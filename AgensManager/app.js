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
var register_user = require('./register_user');
var login_user = require('./login_user');

//1) connectedDb
var sourcePath = "C:/Users/Johnahkim/workspace/test/public";
var fpath = "C:/Users/Johnahkim/workspace/test/";
//2) constring (postgres://username:password@localhost/database)

var createTable;
//3) 소스 경로
app.use('/public', express.static(sourcePath));

//포트 연결
//app.set('port', 7474);
app.set('port', 3000);

//서버 연결
var server = http.createServer(app).listen(app.get('port'), function(){

	// socket.io 선언
	var io = require('socket.io').listen(server);

	console.log('server listening on 3000');
	
	function pgConnect(username, passwd, database, socket){
//		console.log("username: "+username);
//		console.log("passwd: "+passwd);
//		console.log("database: "+database);
//		console.log("socket: "+socket);
		//데이터베이스 연결
		pg.connect("postgres://"+username+":"+passwd+"@localhost/"+database, function(err, client, done){
			if(err){
				return console.error("could not connect to postgres", err);
			}
			
				object_tree.db(socket,client);
				object_tree.subtree(socket, client, database);
				create_table.create_table(socket, client);
				create_index.create_index(socket, client);
				create_schema.create_schema(socket, client);
				create_view.create_view(socket, client);
				create_function.create_function(socket, client);
				create_trigger.create_trigger(socket, client);
				
				socket.on('logout', function(user){
					
					if(user.logout){
						console.log("logout");
						username = "postgres";
						passwd = "1111";
						database = "postgres";
						initConnect(username, passwd, database, client);
						client.end();
					}
					
				});
				
		});//pgconnect end
	}
//	var database = "postgres";
//	var username = "postgres";
//	var passwd = "1111";
//	
	function initConnect(username, passwd, database){
		
		io.on('connect', function(socket){
			pg.connect("postgres://"+username+":"+passwd+"@localhost/"+database, function(err, client, done){
				
				register_user.register_user(socket, client);
				login_user.login_user(socket,client);
				
				socket.on('login', function(user){
					
					if(user.username && user.passwd){
						username = user.username;
						passwd = user.passwd;
						database = "postgres";
						console.log("logged");
						pgConnect(username, passwd, database, socket);
						client.end();
					}
					
					
				});	
			});
		});
	}
	
	initConnect("postgres", "1111", "postgres");
	
});
//4) readFile 경로
app.get('/', function (req, res){
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
app.get('/register_user.html', function (req, res){
	fs.readFile(fpath+'register_user.html', function(error, data){
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
