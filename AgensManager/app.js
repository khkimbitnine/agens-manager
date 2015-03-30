//실행 전 주의사항:  1) connectedDb 2) constring 3) app.use 경로 4) readFile 경로 바꾸기

//-------------------- app.html 불러오는 app모듈
var express = require('express');
var fs = require('fs');
var app = express();
var http = require('http');
var pg = require('pg');
var jade = require('jade');
var bodyParser = require('body-parser');
var create_table = require('./create_table');
var object_tree = require('./object_tree');
// 1) connectedDb
var connectedDb = "bitnine";

// 2) constring (postgres://username:password@localhost/database)
var conString = "postgres://postgres:1111@localhost/"+connectedDb;

var createTable;
// 3) 소스 경로
app.use('/public', express.static("C:/Users/Johnahkim/workspace/test/public"));

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
			create_table.create_table(socket);
			
			socket.on('index_form', function(formdata){
				var form = formdata.form;
				var index = formdata.index;
				var query = "CREATE INDEX";
				var direction = " NULLS LAST";
				if(form[5].value==1) direction = " NULLS FIRST";
				if(form[8].value==1) query = "CREATE UNIQUE INDEX";
				if(form[10].value==1) query += " CONCURRENTLY";
				query += " ON";
				query += " "+form[0].value;
				for(var i = 0 ; i < index.length ; i ++){
					var column = index[i].value;
					if(form[9].value!=='') {
						column+" "+form[9].value+direction+" "
					}
				}
			});
			
		});

	});//pgconnect end
});
// 4) readFile 경로
app.get('/', function (req, res){
		fs.readFile('/Users/Johnahkim/workspace/test/app.html', function(error, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);			//ja021017
	});

});

app.get('/create_table.html', function (req, res){
		fs.readFile('/Users/Johnahkim/workspace/test/create_table.html', function(error, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);			//ja021017
	});
});
app.get('/create_index.html', function (req, res){
	fs.readFile('/Users/Johnahkim/workspace/test/create_index.html', function(error, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);			
	});
});
