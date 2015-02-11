//-------------------- app.html 불러오는 app모듈
//var express = require('express');
//var fs = require('fs');
//var app = express();
//app.use('/public', express.static("C:/Users/Johnahkim/workspace/test/public"));

//app.get('/', function (req, res){
//fs.readFile('/Users/Johnahkim/workspace/test/app.html', function(error, data){
//res.writeHead(200, {'Content-Type': 'text/html'});
//res.end(data);
//});
//});
//app.listen(3000, function() {
//console.log('Server Start .');
//});



//-------------------- postgres란 db의 public이란 schema의 테이블과 그의 칼럼들 출력 (System Views)
var http = require('http');
var pg = require('pg');

var conString = "postgres://postgres:pro1459@localhost/procarrie";
//var conString = "postgres://postgres:1111@localhost/postgres";

var server = http.createServer(function(req, res) {

	// get a pg client from the connection pool
	pg.connect(conString, function(err, client, done) {

		var handleError = function(err) {
			// no error occurred, continue with the request
			if(!err) return false;

			done(client);
			res.writeHead(500, {'content-type': 'text/plain'});
			res.end('An error occurred');
			return true;
		};
		
		// get database list
		var arrDB = [];
		client.query('select datname from pg_database WHERE datistemplate=\'f\';', function(err, result){
			for(var i=0; i < result.rows.length; i++){
				arrDB.push(result.rows[i].datname);
			}
			console.log(arrDB);
		});
		
		// get schema list
		var arrSch = [];
		client.query('SELECT DISTINCT(table_schema) FROM information_schema.tables WHERE table_type = \'BASE TABLE\' AND table_schema NOT IN (\'pg_catalog\', \'information_schema\');', function(err, rs){
			for(var j=0; j < rs.rows.length; j++){
				arrSch.push(rs.rows[j].table_schema);
			}
			console.log(arrSch);
		});
		
		//get table list
		var arrTab = [];
		client.query('SELECT DISTINCT(table_name) FROM information_schema.tables WHERE table_schema = \'testschema\' ORDER BY table_name ASC;', function(err, trs){
			for(var k=0; k < trs.rows.length; k++){
				arrTab.push(trs.rows[k].table_name);
			}
			console.log(arrTab);
		});
		
		//get column list
		var arrCol = [];
		client.query('SELECT column_name FROM information_schema.columns WHERE table_name = \'tableschema\';', function(err, crs){
			for(var l=0; l < crs.rows.length; l++){
				arrCol.push(crs.rows[l].column_name);
			}
			console.log(arrCol);
		});
	});
});
server.listen(3001);