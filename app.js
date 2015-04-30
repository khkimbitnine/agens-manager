var express = require('express');
var app = express();
var http = require('http');
var pg = require('pg');
var fs = require('fs');
var create_table = require('./create_table');
var object_browser = require('./object_browser');
var create_index = require('./create_index');
var create_schema = require('./create_schema');
var create_view = require('./create_view');
var create_function = require('./create_function');
var create_trigger = require('./create_trigger');
var login_user = require('./login_user');
var sessions = require("client-sessions");

var sourcePath = "C:/Users/Johnahkim/workspace/test/public";
//var sourcePath = "C:/Users/user/git/AgensManager/agens-manager/AgensManager/public";
var fpath = "C:/Users/Johnahkim/workspace/test/";
//var fpath = "C:/Users/user/git/AgensManager/agens-manager/AgensManager/";

app.set('port', 3000);

var server = http.createServer(app).listen(app.get('port'), function(){
	
	var io = require('socket.io').listen(server);
	console.log('server listening on 3000');
	var conString = "postgres://postgres:1111@localhost/postgres";
	
	io.on('connection', function(socket){
		
		socket.setMaxListeners(0);
		
		var client = new pg.Client(conString);
		client.connect(function(err){
			if(err){
				console.error('couldnt connect','err');
			}
			client.query('select datname from pg_database WHERE datistemplate=\'f\';', function(err, result){
				if(err){
					console.log(err);
				}else{
					var arrDB = [];
					for(var i=0; i < result.rows.length; i++){
						arrDB.push(result.rows[i].datname);
					}
					socket.emit('db', arrDB);
				}
				client.end();
			});	
			
		});
		socket.on('set_dbname', function (dbname){
				client.end();
				client = new pg.Client("postgres://postgres:1111@localhost/"+dbname);
				client.connect(function(err){
					if(err){
						console.error('couldnt connect','err');
					}
					//object browser, create table, create index
					client.query('select schema_name from information_schema.schemata where schema_name not like \'pg_%\' and schema_name <> \'information_schema\'', function(err, result){
						if(err){
							console.log(err);
						}
							var arrSch = [];
							for(var i=0; i < result.rows.length; i++){
								arrSch.push(result.rows[i].schema_name);
							}
							socket.emit('scname', {schema: arrSch});
					});	
					
					//create table (for duplicate names)
					client.query('SELECT DISTINCT(table_name) FROM information_schema.tables', function(err, rs){
						if(err){
							console.log('table err: '+err)
						}
							var table = [];
							for(var i = 0 ; i < rs.rows.length ; i++){
								table[i] = rs.rows[i].table_name;
							}
							socket.emit('table', table);
					});
					//create table (for data types)
					client.query("SELECT pg_catalog.format_type(t.oid, NULL) AS name FROM pg_catalog.pg_type t LEFT JOIN pg_catalog.pg_namespace n ON n.oid = t.typnamespace WHERE (t.typrelid = 0 OR (SELECT c.relkind = 'c' FROM pg_catalog.pg_class c WHERE c.oid = t.typrelid)) AND NOT EXISTS(SELECT 1 FROM pg_catalog.pg_type el WHERE el.oid = t.typelem AND el.typarray = t.oid) AND pg_catalog.pg_type_is_visible(t.oid) ORDER BY 1;", function(err, res){
						if(err){
							console.log(err);
						}
							var arrType = [];
							for(var i = 0 ; i < res.rows.length ; i++){
								arrType.push(res.rows[i].name);
							}
							
							socket.emit('type', arrType);
					});
					
					//create table (for variable length data types)
					client.query("SELECT pg_catalog.format_type(t.oid, NULL) AS name FROM pg_catalog.pg_type t LEFT JOIN pg_catalog.pg_namespace n ON n.oid = t.typnamespace WHERE (t.typrelid = 0 OR (SELECT c.relkind = 'c' FROM pg_catalog.pg_class c WHERE c.oid = t.typrelid)) AND NOT EXISTS(SELECT 1 FROM pg_catalog.pg_type el WHERE el.oid = t.typelem AND el.typarray = t.oid) AND pg_catalog.pg_type_is_visible(t.oid) AND typlen < 0 ORDER BY 1;", function(err, res){
						if(err){
							console.log(err);
						}
						var arrVar = [];
						for(var i = 0 ; i < res.rows.length ; i++){
							arrVar.push(res.rows[i].name);
						}
						
						socket.emit('var_type', arrVar);
					});
					
					//create function
					client.query("select schema_name from information_schema.schemata order by 1", function(err, rs){
						if(err){
							console.log(err)
						}else{
							var schemas = [];
							for(var i = 0 ; i < rs.rows.length ; i++){
								schemas.push(rs.rows[i].schema_name);
							}
							socket.emit('schemas', schemas);
						}
					});
					//create schema
					client.query("select rolname from pg_authid", function(err, rs){
						if(err){
							console.log(err);
						}else{
							var roles = [];
							for(var i=0; i < rs.rows.length; i++){
								roles.push(rs.rows[i].rolname);
							}
							socket.emit("get_role", roles);
						}
					});
				});
		});
		
		//form
		socket.on('table_form', function(formdata){
			create_table.create_table(socket, client, formdata);
		});
		socket.on('index_form', function(formdata){
			create_index.create_index(socket, client, formdata);
		});
		socket.on('schema_form', function(data){
			create_schema.create_schema(socket, client, data);
		});
		socket.on('view_form', function(data){
			create_view.create_view(socket, client, data);
		});
		socket.on('function_form', function(formdata){
			create_function.create_function(socket, client, formdata);
		});
		
		//object browser
		socket.on('set_scname_table', function (scname){
			object_browser.set_scname_table(socket, client, scname);
		});
		socket.on('set_scname_view', function (scname){
			object_browser.set_scname_view(socket, client, scname);
		});
		socket.on('set_scname_func', function (scname){
			object_browser.set_scname_func(socket, client, scname);
		});
		socket.on('set_tabname_col', function (data){
			object_browser.set_tabname_col(socket, client, data);
		});
		socket.on('set_tabname_cons', function (data){
			object_browser.set_tabname_cons(socket, client, data);
		});
		socket.on('set_tabname_ind', function (data){
			object_browser.set_tabname_ind(socket, client, data);
		});
		
		//create function
		socket.on('schema', function(schema){
			create_function.schema(socket, client, schema);
		});
		
		//create trigger
		socket.on('username', function(username){
			create_trigger.username(socket, client, username);
		});
	});
});

//session
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({
	secret:'ssshhh', cookie: {maxAge: 6000000}
}));
app.use(app.router);

app.post('/login', function(request, response){
	request.session.username = request.param('username');
	request.session.passwd = request.param('passwd');
	request.session.database = request.param('database');
	response.redirect('/');
});

app.post('/logout', function(request, response){
	request.session.regenerate(function(err){
		if(err){
			console.log(err);
		}else{
			console.log('session regenerated');
			response.redirect('/');
		}
	});
});

//file
app.use('/public', express.static(sourcePath));

var appCnt = 0;
app.get('/', function (req, res){
	appCnt++;
	console.log(appCnt);
	fs.readFile(fpath+'app.html', function(error, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);
	});
});

app.get('/create_table.html', function (req, res){
	fs.readFile(fpath+'create_table.html', function(error, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);
	});
});
app.get('/create_index.html', function (req, res){
	fs.readFile(fpath+'create_index.html', function(error, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);			
	});
});
app.get('/create_schema.html', function (req, res){
	fs.readFile(fpath+'create_schema.html', function(error, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);			
	});
});
app.get('/create_view.html', function (req, res){
	fs.readFile(fpath+'create_view.html', function(error, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);			
	});
});
app.get('/create_function.html', function (req, res){
	fs.readFile(fpath+'create_function.html', function(error, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);			
	});
});
app.get('/create_trigger.html', function (req, res){
	fs.readFile(fpath+'create_trigger.html', function(error, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);			
	});
});
app.get('/login_user.html', function (req, res){
	fs.readFile(fpath+'login_user.html', function(error, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);
	});
});

