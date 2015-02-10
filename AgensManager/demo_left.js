//-------------------- demo_left.html 불러오는 app모듈
//var express = require('express');
//var fs = require('fs');
//var app = express();
//app.use('/public', express.static("C:/Users/Johnahkim/workspace/test/public"));
//
//app.get('/', function (req, res){
//	fs.readFile('/Users/Johnahkim/workspace/test/demo_left.html', function(error, data){
//		res.writeHead(200, {'Content-Type': 'text/html'});
//		res.end(data);
//	});
//});
//app.listen(3000, function() {
//	console.log('Server Start .');
//});



//-------------------- postgres란 db의 public이란 schema의 테이블과 그의 칼럼들 출력 (System Views)
var http = require('http');
var pg = require('pg');

var conString = "postgres://postgres:1111@localhost/postgres";

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

      client.query('select * from pg_tables where schemaname=\'public\'', function(err, result) {
        // handle an error from the query
        if(handleError(err)) {
        	console.log(err); 
        return;
        }

        // return the client to the connection pool for other requests to reuse
        for(var i = 0; i < result.rows.length ; i++){
        //console.log("tablename("+(i+1)+") : "+result.rows[i].tablename);
        client.query('select * from information_schema.columns where table_schema=\'public\' and table_name=\''+result.rows[i].tablename+'\'', function(err, rs){
        	console.log(rs.rows[0].table_name+"'s columns are........");
        	for(var m = 0; m <rs.rows.length ; m++){
        		console.log("- "+rs.rows[m].column_name);
        	}
        	done();
        	res.writeHead(200, {'content-type': 'text/plain'});
        	res.end(rs.rows[0].table_name);
        });
        }
      });
    });
  });

server.listen(3001);