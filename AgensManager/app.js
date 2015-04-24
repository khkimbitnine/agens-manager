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
		
	var io = require('socket.io').listen(server);
	// socket.io 선언
	console.log('server listening on 3000');
	
	var conString = "postgres://postgres:1111@localhost/postgres";
	
	pg.connect(conString, function(err, client, done){
		var handleError = function(err) {
			// no error occurred, continue with the request
			if(!err) {
				return false;
			}

			done(client);
			return true;
		};
		var arrDB = [];
		client.query('select datname from pg_database WHERE datistemplate=\'f\';', function(err, result){
			if(err){
				//console.log(err);
			}else{
				arrDB = [];
				for(var i=0; i < result.rows.length; i++){
					arrDB.push(result.rows[i].datname);
				}
			}
		});	
			io.on('connection', function(socket){
				socket.emit('db', {db: arrDB});
				object_tree.subtree(socket, client, 'postgres', done);
				create_table.create_table(socket, client, 'postgres', done);
				create_index.create_index(socket, client, done);
				create_schema.create_schema(socket, client, done);
				create_view.create_view(socket, client, done);
				create_function.create_function(socket, client, done);
				create_trigger.create_trigger(socket, client, done);
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
//app.post('/db', function(request, response){
//	request.session.database = request.param('database');
//	response.redirect('/');
//});
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
var prevDatabase;
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

