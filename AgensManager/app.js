//실행 전 주의사항:  1) connectedDb 2) constring 3) app.use 경로 4) readFile 경로 바꾸기

//-------------------- app.html 불러오는 app모듈
var express = require('express');
var fs = require('fs');
var app = express();
var http = require('http');
var pg = require('pg');
var jade = require('jade');
var create_table = require('./create_table');
var object_tree = require('./object_tree');
var create_index = require('./create_index');
var create_schema = require('./create_schema');
var create_view = require('./create_view');
var create_function = require('./create_function');
var create_trigger = require('./create_trigger');
var login_user = require('./login_user');
var sessions = require("client-sessions");

//1) connectedDb
var sourcePath = "C:/Users/Johnahkim/workspace/test/public";
//var sourcePath = "C:/Users/user/git/AgensManager/agens-manager/AgensManager/public";
var fpath = "C:/Users/Johnahkim/workspace/test/";
//var fpath = "C:/Users/user/git/AgensManager/agens-manager/AgensManager/";

//2) constring (postgres://username:password@localhost/database)

var createTable;
//3) 소스 경로
app.use('/public', express.static(sourcePath));

//포트 연결
//app.set('port', 7474);
app.set('port', 3000);
//서버 연결

var server = http.createServer(app).listen(app.get('port'), function(){
	var io = require('socket.io').listen(server);
	// socket.io 선언
	console.log('server listening on 3000');
	var conString = "postgres://postgres:1111@localhost/postgres";
	
	io.on('connection', function(socket){
		
		socket.setMaxListeners(0);//Listeners Unlimited
		
		var client = new pg.Client(conString);
		client.connect(function(err){
			if(err){
				console.error('couldnt connect','err');
			}
			client.query('select datname from pg_database WHERE datistemplate=\'f\';', function(err, result){
				if(err){
					//console.log(err);
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
//						console.log(arrSch);
						socket.emit('scname', {schema: arrSch});
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
				
				//create table for duplicate names
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
				
			});
		});
		
		//submit
		socket.on('table_form', function(formdata){
			create_table.create_table(socket, client, formdata);
		});
		socket.once('index_form', function(formdata){
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
			object_tree.set_scname_table(socket, client, scname);
		});
		socket.on('set_scname_view', function (scname){
			object_tree.set_scname_view(socket, client, scname);
		});
		socket.on('set_scname_func', function (scname){
			object_tree.set_scname_func(socket, client, scname);
		});
		socket.on('set_tabname_col', function (data){
			object_tree.set_tabname_col(socket, client, data);
		});
		socket.on('set_tabname_cons', function (data){
			object_tree.set_tabname_cons(socket, client, data);
		});
		socket.on('set_tabname_ind', function (data){
			object_tree.set_tabname_ind(socket, client, data);
		});
		
		//create function
		socket.on('schema', function(schema){
			object_tree.schema(socket, client, schema);
		});
		
		//create trigger
		socket.on('username', function(username){
			object_tree.username(socket, client, username);
		});
	});
});


app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({
	secret:'ssshhh', cookie: {maxAge: 6000000}
}));
app.use(app.router);
var appCnt = 0;

app.post('/login', function(request, response){
	request.session.username = request.param('username');
	request.session.passwd = request.param('passwd');
	request.session.database = request.param('database');//===database postgres 넘어옴
	response.redirect('/');
});
app.get('/database', function(req, res){
	res.json(req.session.database);
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

//4) readFile 경로
app.get('/', function (req, res){
	appCnt++;
	console.log(appCnt);
	//console.log(req.session);
	fs.readFile(fpath+'app.html', function(error, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);			//ja021017
	});
});


app.get('/create_table.html', function (req, res){
	fs.readFile(fpath+'create_table.html', function(error, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);			//ja021017
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

