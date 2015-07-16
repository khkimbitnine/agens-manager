// import Node.js modules
var path = require('path');
var util = require('util');

// import modules for Agens Manager
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var socketIO = require('socket.io');
var ioSession = require('express-socket.io-session');
var pg = require('pg');
pg.defaults.poolSize = 20;
var app = express();

// pass Socket.IO Server to "bin/www"
var io = socketIO();
app.io = io;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// static files
//app.use('/static', express.static('/home/bitnine/source_code_dir/agens-manager/agensmanager/public'));
app.use('/static', express.static('/Users/Johnahkim/git/agensmanager/public'));

// parse post data of the body
app.use(bodyParser.urlencoded({ extended: true }));

// session with file store
var sessMiddle = session({
  name: 'sid',
  resave: false,
  saveUninitialized: false,
  secret: 'agens-manager',  // FIXME: admin must be able to set this value
  store: new FileStore,
  unset: 'destroy'// 'destroy' The session will be destroyed (deleted) when the response ends.
});
app.use(sessMiddle);
io.use(ioSession(sessMiddle));

// helper callback function to print out error messages
function stderr(err) {
  if (err)
    console.error(err);
}

// '/login' does not need to be logged-in (order is important)
//app.get('/login', function(req, res) {
//  req.session.loggedIn ? res.redirect('/') : res.render('login');
//});

process.on('uncaughtException', function (err) {
	 console.log('Caught exception: ' + err);
	});

var err;
var username;

app.post('/login', function(req, res) {
  var hostname = 'localhost';
  var database = 'postgres';
  username = req.body.username;
  var password = req.body.password;

  // FIXME: check username and password
  var dbURL = util.format("postgres://%s:%s@%s/%s",
                          username, password, hostname, database);
  pg.connect(dbURL, function(err, client, done) {
  	if(err) {
  		stderr(err.toString());
  		req.session.error = err.toString();
    }else{
      req.session.loggedIn = true;
      req.session.dbURL = dbURL;
      req.session.save();
    }
  	res.redirect('/');
  });
});

// hereafter, login required (except '/login')
//app.use(function(req, res, next) {
//  req.session.loggedIn ? next() : res.redirect('/login');
//});

app.get('/logout', function(req, res) {
  req.session.destroy(stderr);
  res.clearCookie('sid');
  res.redirect('/');
});
app.get('/login_error', function(req, res){
	if(req.session.error){
		res.writeHead(200, {'Content-Type':'text/plain'});
		res.end(req.session.error);
		req.session.destroy();
	}
})

// Checks if session exists after log-in form submitted
app.get('/session', function(req, res){
	if(req.session.loggedIn){
		res.writeHead(200, { 'Content-Type': 'text/plain' });
	  res.end('true');	
	}
  
});


/*
 * FIXME: use Jade!
 *
app.get('/', function(req, res) {
  res.render('index');
});
 */
//var fpath = '/home/bitnine/source_code_dir/agens-manager/agensmanager/';// FIXME: admin must be able to set this value
var fpath = '/Users/Johnahkim/git/agensmanager/';// FIXME: admin must be able to set this value
console.log("fpath=%s", fpath);
app.get('/', function(req, res) {
  fs.readFile(fpath + 'app.html', function(error, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});



/*
 * FIXME: following codes need to be refactored
 */

var fs = require('fs');
var table_ddl = require('./table_ddl');
var object_browser = require('./object_browser');
var create_index = require('./create_index');
var create_schema = require('./create_schema');
var view_ddl = require('./view_ddl');
var proc_ddl = require('./proc_ddl');
var create_trigger = require('./create_trigger');

io.on('connection', function(socket) {
//  socket.setMaxListeners(0);
  var sess = socket.handshake.session;
  if (!sess.loggedIn) {
    console.log('not logged-in');
    return;
  }

  function simpleQuery(queryText, callback) {
    pg.connect(sess.dbURL, function(err, client, done) {
      if (err) {
        stderr(err);
        return;
      }

      client.query(queryText, function(err, result) {
      	done(client);
        callback(err, result);
      });
    });
  }

  var query = "SELECT datname FROM pg_database WHERE datistemplate='f';";
  simpleQuery(query, function(err, result) {
    if (err) {
      stderr(err);
      return;
    }

    var dbs = [];
    for (var i = 0; i < result.rows.length; i++)
      dbs.push(result.rows[i].datname);

    console.log('emit: db');
    socket.emit('db', dbs);
  });

  socket.on('set_dbname', function(dbname) {
    // TODO: check dbname
    sess.dbURL = sess.dbURL.replace(new RegExp('[^/]+$'), dbname);
    sess.save();

    // object browser, create table, create index
    var query = "SELECT schema_name " +
    						"FROM information_schema.schemata " +
    						"WHERE schema_name NOT LIKE 'pg_%' " +
    						"AND schema_name <> 'information_schema'";
    simpleQuery(query, function(err, result) {
      if (err) {
        stderr(err);
        return;
      }

      var schemas = [];
      for (var i = 0; i < result.rows.length; i++)
        schemas.push(result.rows[i].schema_name);
//      console.log('emit: scname');
      socket.emit('scname', { schema: schemas });
    });
    				
    // create table (for duplicate names)
    query = "SELECT DISTINCT(table_name) FROM information_schema.tables";
    simpleQuery(query, function(err, result) {
      if (err) {
        stderr(err);
        return;
      }

      var tables = [];
      for (var i = 0; i < result.rows.length; i++)
        tables[i] = result.rows[i].table_name;

//      console.log('emit: table');
      socket.emit('table', tables);
    });

    // create table (for data types)
    query = "SELECT pg_catalog.format_type(t.oid, NULL) AS name "+
    				"FROM pg_catalog.pg_type t LEFT JOIN pg_catalog.pg_namespace n ON n.oid = t.typnamespace "+
    				"WHERE (t.typrelid = 0 OR (SELECT c.relkind = 'c' "+
    																	"FROM pg_catalog.pg_class c "+
    																	"WHERE c.oid = t.typrelid)) AND NOT EXISTS(SELECT 1 "+
    																																						"FROM pg_catalog.pg_type el "+
    																																						"WHERE el.oid = t.typelem AND el.typarray = t.oid) " +
    																																						"AND pg_catalog.pg_type_is_visible(t.oid) "+
    																																						"ORDER BY 1;";
    simpleQuery(query, function(err, result) {
      if (err) {
        stderr(err);
        return;
      }

      var types = [];
      for (var i = 0; i < result.rows.length ; i++)
        types.push(result.rows[i].name);

//      console.log('emit: type');
      socket.emit('type', types);
    });

    // create table (for variable length data types)
    query = "SELECT pg_catalog.format_type(t.oid, NULL) AS name "+ 
    				"FROM pg_catalog.pg_type t LEFT JOIN pg_catalog.pg_namespace n ON n.oid = t.typnamespace " +
						"WHERE (t.typrelid = 0 OR (SELECT c.relkind = 'c' " +
																			"FROM pg_catalog.pg_class c " +
																			"WHERE c.oid = t.typrelid)) AND NOT EXISTS(SELECT 1 " +
																																								"FROM pg_catalog.pg_type el " +
																																								"WHERE el.oid = t.typelem AND el.typarray = t.oid) " +
																																								"AND pg_catalog.pg_type_is_visible(t.oid) " +
																																								"AND typlen < 0 ORDER BY 1;";
    simpleQuery(query, function(err, result) {
      if (err) {
        stderr(err);
        return;
      }

      var vars = [];
      for (var i = 0; i < result.rows.length ; i++){
        vars.push(result.rows[i].name);
      }

//      console.log('emit: var_type');
      socket.emit('var_type', vars);
    });

    // create function
    query = "SELECT schema_name FROM information_schema.schemata ORDER BY 1;";
    simpleQuery(query, function(err, result) {
      if (err) {
        stderr(err);
        return;
      }

      var schemas = [];
      for (var i = 0; i < result.rows.length ; i++)
        schemas.push(result.rows[i].schema_name);

//      console.log('emit: schemas');
      socket.emit('schemas', schemas);
    });

    // create schema
    query = "SELECT rolname FROM pg_authid;";
    simpleQuery(query, function(err, result) {
      if (err) {
        stderr(err);
        return;
      }

      var roles = [];
      for (var i = 0; i < result.rows.length; i++)
        roles.push(result.rows[i].rolname);

//      console.log('emit: get_role');
      socket.emit("get_role", roles);
    });
    
    // create trigger (for function list)
    query = "SELECT proname " +
				 		"FROM pg_proc, (SELECT usesysid " +
				 									 "FROM pg_user " +
				 									 "WHERE usename='"+username+"') u " +
				 		"WHERE proowner = u.usesysid OR prorettype = 2279 " +
				 		"ORDER BY proname;";
    simpleQuery(query, function(err, rs){

			if(err){
			
			console.log(err);
			
			}
			
			var proname = [];
			
			for(var i = 0 ; i < rs.rows.length ; i++){
				
				proname.push(rs.rows[i].proname);
				
			}
			socket.emit('trigger_function', proname);
			
		});
  });

  function getPgClient(callback) {
    pg.connect(sess.dbURL, function(err, client, done) {
      if (err) {
        stderr(err);
        return;
      }
      callback(client);
      done();
    });
  }

  // ddl - table
  socket.on('create_table', function(formdata) {
    getPgClient(function(client) {
      table_ddl.create_table(socket, client, formdata);
    });
  });
  socket.on('alter_table', function(formdata){
  	getPgClient(function(client){
  		table_ddl.alter_table(socket, client, formdata);
  	});
  });
  socket.on('drop_table', function(sctb){
  	getPgClient(function(client){
  		table_ddl.drop_table(socket, client, sctb);
  	});
  });
  
  // ddl - view
  socket.on('create_view', function(data) {
    getPgClient(function(client) {
      view_ddl.create_view(socket, client, data);
    });
  });
  socket.on('alter_view', function(formdata){
  	getPgClient(function(client){
  		view_ddl.alter_view(socket, client, formdata);
  	});
  });
  socket.on('drop_view', function(scv){
  	getPgClient(function(client){
  		view_ddl.drop_view(socket, client, scv);
  	});
  });
  
  // ddl - proc
  socket.on('create_function', function(formdata) {
    getPgClient(function(client) {
      proc_ddl.create_proc(socket, client, formdata);
    });
  });
  socket.on('schema', function(schema) {
    getPgClient(function(client) {
      proc_ddl.schema(socket, client, schema);
    });
  });
  socket.on('alter_proc', function(schema) {
  	getPgClient(function(client) {
  		proc_ddl.alter_proc(socket, client, schema);
  	});
  });
  socket.on('drop_proc', function(scp) {
  	getPgClient(function(client) {
  		proc_ddl.drop_proc(socket, client, scp);
  	});
  });
  
  // create - index
  socket.on('create_index', function(formdata) {
    getPgClient(function(client) {
      create_index.create_index(socket, client, formdata);
    });
  });
  
  // create - schema
  socket.on('create_schema', function(data) {
    getPgClient(function(client) {
      create_schema.create_schema(socket, client, data);
    });
  });
  
  // create - trigger
  socket.on('create_trigger', function(formdata) {
  	getPgClient(function(client) {
  		create_trigger.create_trigger(socket, client, formdata);
  	});
  });

  // object browser - sidebar
  socket.on('set_scname_table', function (scname) {
    getPgClient(function(client) {
      object_browser.set_scname_table(socket, client, scname);
    });
  });
  socket.on('set_scname_view', function (scname) {
    getPgClient(function(client) {
      object_browser.set_scname_view(socket, client, scname);
    });
  });
  socket.on('set_scname_func', function (scname) {
    getPgClient(function(client) {
      object_browser.set_scname_func(socket, client, scname);
    });
  });
  socket.on('set_tabname_col', function (data) {
    getPgClient(function(client) {
      object_browser.set_tabname_col(socket, client, data);
    });
  });
  socket.on('set_tabname_cons', function (data) {
    getPgClient(function(client) {
      object_browser.set_tabname_cons(socket, client, data);
    });
  });
  socket.on('set_tabname_ind', function (data) {
    getPgClient(function(client) {
    	object_browser.set_tabname_ind(socket, client, data);
    });
  });
  
  // object browser - content
  socket.on('set_dbname_schema', function(data){
  	getPgClient(function(client){
  		object_browser.set_dbname_schema(socket, client, data);
  	});
  });
  socket.on('set_schema_table', function(data){
  	getPgClient(function(client){
  		object_browser.set_schema_table(socket, client, data);
  	});
  });
  socket.on('set_schema_view', function(data){
  	getPgClient(function(client){
  		object_browser.set_schema_view(socket, client, data);
  	});
  });
  socket.on('set_schema_proc', function(data){
  	getPgClient(function(client){
  		object_browser.set_schema_proc(socket, client, data);
  	});
  });
});

app.get('/create_table.html', function (req, res) {
  fs.readFile(fpath + 'create_table.html', function(error, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});
app.get('/create_index.html', function (req, res) {
  fs.readFile(fpath + 'create_index.html', function(error, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);      
  });
});
app.get('/create_schema.html', function (req, res) {
  fs.readFile(fpath + 'create_schema.html', function(error, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);      
  });
});
app.get('/create_view.html', function (req, res) {
  fs.readFile(fpath + 'create_view.html', function(error, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);      
  });
});
app.get('/create_function.html', function (req, res) {
  fs.readFile(fpath + 'create_function.html', function(error, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);      
  });
});
app.get('/create_trigger.html', function (req, res) {
  fs.readFile(fpath + 'create_trigger.html', function(error, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);      
  });
});
app.get('/login_user.html', function (req, res) {
  fs.readFile(fpath + 'login_user.html', function(error, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});
app.get('/db_content.html', function (req, res) {
	fs.readFile(fpath + 'db_content.html', function(error, data) {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(data);
	});
});
app.get('/schema_content.html', function (req, res) {
	fs.readFile(fpath + 'schema_content.html', function(error, data) {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(data);
	});
});
app.get('/alter_table.html', function (req, res) {
	fs.readFile(fpath + 'alter_table.html', function(error, data) {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(data);
	});
});
app.get('/alter_view.html', function (req, res) {
	fs.readFile(fpath + 'alter_view.html', function(error, data) {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(data);
	});
});
app.get('/alter_proc.html', function (req, res) {
	fs.readFile(fpath + 'alter_proc.html', function(error, data) {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(data);
	});
});

module.exports = app;
