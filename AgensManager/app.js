
//=================================================  1) connectedDb 2) constring 3) app.use 경로 4) readFile 경로 바꾸기  ==========//

//-------------------- app.html 불러오는 app모듈
var express = require('express');
var fs = require('fs');
var app = express();
var http = require('http');
var pg = require('pg');
//==================================================================================================================== 1) connectedDb
var connectedDb = "agens";
//var connectedDb = "procarrie";

//======================================================================================================================2) constring
var conString = "postgres://postgres:1111@localhost/"+connectedDb;
//var conString = "postgres://postgres:pro1459@localhost/"+connectedDb;

//======== db, schema, table, column 배열 선언
var arrDB = [];
var arrSch = [];
var arrTab = [];
var arrCol = [];

//======== 클라이언트에서 받은 db, schema, table, column 이름 담을 변수 선언
var result, rs, trs, tsrs, crs  = null;

//=====================================================================================================================3) 소스 경로
app.use('/public', express.static("C:/Users/Johnahkim/workspace/test/public"));
//app.use('/public', express.static("C:/Users/procarrie/workspace/AgensManager/public"));

//포트 연결
app.set('port', 3000);

//서버 연결
var server = http.createServer(app).listen(app.get('port'), function(){

// 배열 만드는 함수 (db, 스키마, 테이블)
	
	//selectDb function
	function selectDb(err, result){
		for(var i=0; i < result.rows.length; i++){
			arrDB.push(result.rows[i].datname);
		}
		console.log(arrDB);
	}

	//selectSc function
	function selectSc(err, rs){
		for(var j=0; j < rs.rows.length; j++){
			arrSch.push(rs.rows[j].schema_name);
		}
		console.log("arrSch: "+arrSch.length);
	}

	//selectTb function
	function selectTb(err, trs){
		for(var k=0; k < trs.rows.length; k++){
			arrTab.push(trs.rows[k].table_name);
		}
		console.log("arrTab: "+arrTab.length);
	}

	//========= socket.io 선언
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
		
		//db 쿼리
		client.query('select datname from pg_database WHERE datistemplate=\'f\';', function(err, result){
			selectDb(err, result);
		});

		//socket 연결
		io.on('connection', function(socket){

			//db 전송
			socket.emit('db', {db: arrDB});

			//db 클릭, 스키마 전송
			socket.on('set_dbname', function (dbname){
				if(dbname === connectedDb){
					console.log("dbname: connected =>   "+dbname+" : "+connectedDb);
					//arrSch 비우기
					arrSch = [];
					
					//스키마 쿼리
					client.query('select schema_name from information_schema.schemata where schema_name not like \'pg_%\' and schema_name <> \'information_schema\'', function(err, rs){
						selectSc(err, rs);
						socket.emit('scname', {schema: arrSch});
					}); 
				} else {//접속한 db와 dbname이 일치하지 않으면, 0을 리턴(편의상)
					socket.emit('scname', {schema: 0});
				}
			});

			//스키마 클릭, 테이블 전송
			socket.on('set_scname', function (scname){
				for(var i = 0 ; i < arrSch.length ; i++){
					if(arrSch[i] === scname){
						arrTab = [];
						//get table list
						client.query('SELECT DISTINCT(table_name) FROM information_schema.tables WHERE table_schema = \''+scname+'\' ORDER BY table_name ASC;', function(err, trs){
							selectTb(err, trs);
							socket.emit('tabname', {table: arrTab});
							console.log(arrTab);
						});
					}
				}
			});

			//테이블 클릭, 컬럼 전송
			socket.on('set_tabname', function (data){
				console.log(data.table_scname+","+data.tabname);
				for(var i = 0 ; i < arrSch.length ; i++){
					if(arrSch[i] === data.table_scname){
						arrTab = [];
						//get table list
						client.query('SELECT DISTINCT(table_name) FROM information_schema.tables WHERE table_schema = \''+data.table_scname+'\' ORDER BY table_name ASC;', function(err, tsrs){
							console.log(err+', '+tsrs+', '+data.tabname);
							selectTbSc(err, tsrs, data.tabname, data.table_scname);
						});
					}
				}
			});
			
		//컬럼 배열 만드는 함수
			
			//selectTbSc function
			function selectTbSc(err, tsrs, tabname, table_scname){
				console.log("tsrs: "+tsrs);
				for(var k=0; k < tsrs.rows.length; k++){
					console.log("tablename : "+tsrs.rows[k].table_name+" : "+tabname);
					if(tsrs.rows[k].table_name === tabname){
						arrCol = [];
						//get column list
						client.query('SELECT column_name FROM information_schema.columns where table_schema=\''+table_scname+'\' and table_name=\''+tabname+'\'', function(err, crs){
							selectCol(err, crs);
							console.log("column: "+arrCol);
							socket.emit('colname', {column: arrCol});
						});
					}
				}
			}

			//selectCol function
			function selectCol(err, crs){
				for(var l=0; l < crs.rows.length; l++){
					arrCol.push(crs.rows[l].column_name);
				}
				console.log("arrCol: "+arrCol.length);
			}
		});

	});//pgconnect end
});

//======================================================================================================================================= 4) readFile 경로
app.get('/', function (req, res){
	fs.readFile('/Users/Johnahkim/git/agensmanager/AgensManager/app.html', function(error, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);			//ja021017
	});
});