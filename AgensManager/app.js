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
//var sourcePath = "C:/Users/user/git/agensmanager/AgensManager/public";
var fpath = "C:/Users/Johnahkim/workspace/test/";
//var fpath = "C:/Users/user/git/agensmanager/AgensManager/";
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
	console.log('server listening on 3000');
});
var io = require('socket.io').listen(server);
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({
	secret:'ssshhh', cookie: {maxAge: 6000000}
}));
app.use(app.router);
var appCnt = 0;

//4) readFile 경로
app.get('/', function (req, res){
	appCnt++;
	console.log(appCnt);
	console.log(req.session.username+"<-- /")
	fs.readFile(fpath+'app.html', function(error, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);			//ja021017
	});
		var	username;
		io.sockets.on('connection', function(socket){
			var username =req.session.username;
			var passwd = req.session.passwd;
			var conString = "";
				console.log("username: "+username);
				if(typeof(username) == 'undefined'){
					console.log(req.session.username);
					conString = "postgres://postgres:1111@localhost/postgres";
					
					var client = new pg.Client(conString);
					
					client.connect(function(err){
						if(err){
							return console.error('could not connect to postgres1', err);
						}
						register_user.register_user(socket, client);
						login_user.login_user(socket,client);
					});
					
					socket.on('disconnect', function(){
						console.log('disconnected');
					});
					
				}else{

					console.log(req.session.username);
					conString = "postgres://"+username+":"+passwd+"@localhost/postgres";
					
					var client = new pg.Client(conString);
					
					client.connect(function(err){
						if(err){
							return console.error('could not connect to postgres', err);
						}else{
							object_tree.db(socket,client);
							object_tree.subtree(socket, client, 'postgres');
							create_table.create_table(socket, client);
							create_index.create_index(socket, client);
							create_schema.create_schema(socket, client);
							create_view.create_view(socket, client);
							create_function.create_function(socket, client);
							create_trigger.create_trigger(socket, client);
						}

					});
					

				}
				socket.on('disconnect', function(){
					console.log('disconnected');
				});
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

app.post('/login_user.html', function(request, response){
	var username = request.param('username');
	var passwd = request.param('passwd');
		request.session.username = username;
		request.session.passwd = passwd;
		response.redirect('/');
});

app.get('/login_user.html', function (req, res){
	fs.readFile(fpath+'login_user.html', function(error, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);			
	});
});

app.post('/logout', function(request, response){
	request.session.destroy(function(err){
		if(err){
			console.log(err);
		}else{
			request.session = null;
		}
	});
});