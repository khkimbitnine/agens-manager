//-------------------- app.html 불러오는 app모듈
var express = require('express');
var fs = require('fs');
var app = express();
var http = require('http');
var pg = require('pg');
//var connectedDb = "agens";
var connectedDb = "procarrie";

//========constring
//var conString = "postgres://postgres:1111@localhost/"+connectedDb;
var conString = "postgres://postgres:pro1459@localhost/"+connectedDb;

//======== db, schema, table, column 배열 선언
var arrDB = [];
var arrSch = [];
var arrTab = [];
var arrCol = [];

//======== 클라이언트에서 받은 db, schema, table, column 이름 담을 변수 선언
var sc = null;

//app.use('/public', express.static("C:/Users/Johnahkim/workspace/test/public"));
app.use('/public', express.static("C:/Users/procarrie/git/agensmanager/AgensManager/public"));

app.set('port', 3000);
var server = http.createServer(app).listen(app.get('port'), function(){
	//========= socket.io 선언
	var io = require('socket.io').listen(server);
	
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

//		========= socket 연결
		io.on('connection', function(socket){

			//=========== 접속한 db 리스트 전송
			socket.emit('db', {db: arrDB});

			//=========== db 클릭하면, 스키마 전송
			socket.on('set_dbname', function (dbname){
				if(dbname === connectedDb){
					console.log("dbname: connected =>   "+dbname+" : "+connectedDb);
					arrSch = [];
					//get schema list
					client.query('select schema_name from information_schema.schemata where schema_name not like \'pg_%\' and schema_name <> \'information_schema\'', function(err, rs){
						for(var j=0; j < rs.rows.length; j++){
							arrSch.push(rs.rows[j].schema_name);
						}
						console.log("arrSch: "+arrSch.length);
						socket.emit('scname', {schema: arrSch});
					});
				} else {//접속한 db와 dbname이 일치하지 않으면, 0을 리턴(편의상)
					socket.emit('scname', {schema: 0});
				}
			});

			//=========== schema 클릭하면, 테이블 전송
			socket.on('set_scname', function (scname){

				for(var i = 0 ; i < arrSch.length ; i++){
					if(arrSch[i] === scname){
						arrTab = [];
						//get table list
						client.query('SELECT DISTINCT(table_name) FROM information_schema.tables WHERE table_schema = \''+scname+'\' ORDER BY table_name ASC;', function(err, trs){
							for(var k=0; k < trs.rows.length; k++){
								arrTab.push(trs.rows[k].table_name);
							}
							console.log("arrTab: "+arrTab.length);
							socket.emit('tabname', {table: arrTab});
						});
					}
				}
			});
			
			//=========== table 클릭하면, 컬럼 전송
			socket.on('set_tabname', function (table_scname, tabname){

				for(var i = 0 ; i < arrSch.length ; i++){
					if(arrSch[i] === table_scname){
						arrTab = [];
						//get table list
						client.query('SELECT DISTINCT(table_name) FROM information_schema.tables WHERE table_schema = \''+table_scname+'\' ORDER BY table_name ASC;', function(err, trs){
							
							for(var k=0; k < trs.rows.length; k++){
								if(trs.rows[k].table_name === tabname){
									console.log("tablename : "+trs.rows[k].table_name+" : "+tabname);
									arrCol = [];
									
									//get column list
									client.query('SELECT column_name FROM information_schema.columns where table_schema=\''+table_scname+'\' and table_name=\''+tabname+'\'', function(err, crs){
										for(var l=0; l < crs.rows.length; l++){
											arrCol.push(crs.rows[l].column_name);
										}
										console.log("arrCol: "+arrCol.length);
										socket.emit('colname', {column: arrCol});
									});
								}
							}
						});
					}
				}
			});
		});
	});
});

//========= app.html읽기
app.get('/', function (req, res){
	fs.readFile('/Users/procarrie/git/agensmanager/AgensManager/app.html', function(error, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);			//ja021017
	});
});