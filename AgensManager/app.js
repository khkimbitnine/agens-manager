//-------------------- app.html 불러오는 app모듈
var express = require('express');
var fs = require('fs');
var app = express();
var http = require('http');
var pg = require('pg');

// Connect to Database
//var conString = "postgres://postgres:1111@localhost/agens";
var conString = "postgres://postgres:pro1459@localhost/procarrie";

//======== db, schema, table, column 배열 선언
var arrDB = [];
var arrSch = [];
var arrTab = [];
var arrCol = [];

//======== 클라이언트에서 받은 db, schema, table, column 이름 담을 변수 선언
var sc = null;
//app.use('/public', express.static("C:/Users/Johnahkim/workspace/test/public"));
app.use('/public', express.static("C:/Users/procarrie/workspace/AgensManager/public"));

app.set('port', 3000);
var server = http.createServer(app).listen(app.get('port'), function(){
	console.log('server listening on 3000');
	
	pg.connect(conString, function(err, client, done) {
		
		var handleError = function(err) {
			// no error occurred, continue with the request
			if(!err) {
				return false;
			}

			done(client);
			return true;
		};
		
		// get database list
		client.query('select datname from pg_database WHERE datistemplate=\'f\';', function(err, result){
			for(var i=0; i < result.rows.length; i++){
				arrDB.push(result.rows[i].datname);
			}
			console.log(arrDB);
		});
		
		// get schema list
		client.query('select schema_name from information_schema.schemata where schema_name not like \'pg_%\' and schema_name <> \'information_schema\'', function(err, rs){
			for(var j=0; j < rs.rows.length; j++){
				arrSch.push(rs.rows[j].schema_name);
			}
			console.log(arrSch);
		});
		
		//get table list
		if(sc !== null){
			client.query('SELECT DISTINCT(table_name) FROM information_schema.tables WHERE table_schema = \'' + sc + '\' ORDER BY table_name ASC;', function(err, trs){
				for(var k=0; k < trs.rows.length; k++){
					arrTab.push(trs.rows[k].table_name);
				}
				console.log(arrTab);
			});
		}
		
		//get column list
		client.query('SELECT column_name FROM information_schema.columns WHERE table_name = \'tableschema\';', function(err, crs){
			for(var l=0; l < crs.rows.length; l++){
				arrCol.push(crs.rows[l].column_name);
			}
			console.log(arrCol);
		});
	});
});

//========= app.html읽기
app.get('/', function (req, res){
	fs.readFile('/Users/procarrie/workspace/AgensManager/app.html', function(error, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);			//ja021017
	});
});

//========= socket.io 선언
var io = require('socket.io').listen(server);

//========= socket 연결
io.on('connection', function(socket){
	//=========== 접속한 db 리스트 전송
	socket.emit('db', {db: arrDB});
	
	//=========== db 클릭하면, 스키마 전송
	socket.on('set_dbname', function (dbname){
		if(dbname !== null){
			socket.emit('scname', {schema: arrSch});
		}
	});
	
	//=========== schema 클릭하면, 테이블 전송
	socket.on('set_scname', function (scname){
		if(scname !== null){
			sc = scname;
			console.log(sc);
			console.log(arrTab);
			socket.emit('tabname', {table: arrTab});
		}
	});
});