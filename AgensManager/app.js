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
//1) connectedDb
var connectedDb = "bitnine";
var sourcePath = "C:/Users/Johnahkim/workspace/test/public";
var fpath = "C:/Users/Johnahkim/workspace/test/";
//2) constring (postgres://username:password@localhost/database)
var conString = "postgres://postgres:1111@localhost/"+connectedDb;

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

	//데이터베이스 연결
	pg.connect(conString, function(err, client, done) {

		//에러 핸들러
		var handleError = function(err) {
			if(!err) {
				return false;
			}
			done(client);
			return true;
		};
		object_tree.db(client);

		//socket 연결
		io.on('connection', function(socket){

			object_tree.subtree(socket, client, connectedDb);
			create_table.create_table(socket, client);
			create_index.create_index(socket, client);
			create_schema.create_schema(socket, client);
			create_view.create_view(socket, client);
			create_function.create_function(socket, client);
			create_trigger.create_trigger(socket, client);
			register_user.register_user(socket, client);
		});

	});//pgconnect end
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
