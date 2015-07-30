/*#############################################################################################
#	1. 프로그램명 : client의 main.jade의 sidebar의 object-browser의 tree-view를 로딩하는 기능
#   2. 파일명     : obload.js
#   3. 프로그램 설명 :
#            3.1  파리미터
#        
#
#            3.2 리턴값
#					-	성공시
#						    {}
#				
#   4. 프로그램 개발자 : Bitnine SA Team 김경호
#   5. 프로그램 개발 로그
#             5.1 최초 개발 : 2015-07-29
#
###############################################################################################*/

var pg = require('pg');
var util = require('util');

exports.obload = function(socket){
	//TO-DO DB 조회
	//TO-DO cookie 에서 받은 유저네임/비번으로 접속->보안 인증 정책 세우고 고치기, database를 dbURL이 포함하는데 object browser에서 DB들부터 레벨1으로 두어서 할 필요가 있을까?
	
	//object browser에 binding 시킬 배열
	var obload_data=[];

	//DB 연결정보 설정
	var username = 'postgres';
	var password = 'postgres';
	var hostname = 'localhost';
	var dbname = 'postgres';
	var dbURL = util.format("postgres://%s:%s@%s/%s", username, password, hostname, dbname);

	makeDBList(dbURL, socket, obload_data);
//	makeSchemaList(dbURL, socket, obload_data);
//	makeTableList(dbURL, socket, obload_data);
//	makeViewList(dbURL, socket, obload_data);
//	makeFunctionList(dbURL, socket, obload_data);

}

function executeQuery (dbURL, queryString, callback) {
	pg.connect(dbURL, function (err, client, done) {
		if (err) {
			return console.error('error fetching client from pool', err);
		}
		client.query(queryString, function (err, result) {
			done(client);
			if (err) {
				return console.error('error running query', err);
			}
			callback(err, result);
		});
	});
}

function makeDBList (dbURL, socket, obload_data) {
	var queryString = 'SELECT datname::name AS dbname FROM pg_database WHERE datistemplate=\'f\'';
	executeQuery(dbURL, queryString, function (err, result) {
		for(var i = 0; i < result.rows.length; i++) {
			obload_data.push({'text' : result.rows[i].dbname});
		}
		socket.emit('obload_res', {obload_data: obload_data});
	});
}