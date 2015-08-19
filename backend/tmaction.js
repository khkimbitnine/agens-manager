/*#############################################################################################
#	1. 프로그램명 : 클라이언트가 특정 개체를 클릭하였을 때 dashboard에 binding할 데이터를 뽑아오고 클라이언트에 보내준다.
#   2. 파일명     : tmaction.js
#   3. 프로그램 설명 :
#            3.1  파리미터
#        
#
#            3.2 리턴값
#					-	성공시
#						    {}
#				
#   4. 프로그램 개발자 : Bitnine SA Team 이미연
#   5. 프로그램 개발 로그
#             5.1 최초 개발 : 2015-08-12
#
###############################################################################################*/

var pg = require('pg');
var util = require('util');
var eq = require('./executeQuery');

exports.tmaction = function (socket, data) {

	var socketData = JSON.parse(data);
	var schemaName = socketData.schemaName;

	var username = socketData.uid;
	var password = socketData.upw;
	var hostname = socketData.connHost;
	var dbname = socketData.connDB;
	var dbURL = util.format("postgres://%s:%s@%s/%s", username, password, hostname, dbname);

	switch (socketData.type) {
		case 'TB' :
			getSchemaSummary(dbURL, socket, schemaName, username);
			break;
		default :
			console.log("no types for tmaction!");
			break;
	}

}

function getSchemaSummary(dbURL, socket, schemaName, username) {

	var queryString = 'SELECT nspname AS schema ' +
    					'FROM pg_namespace ' +
    				   'WHERE nspname NOT LIKE \'pg_%\' '  +
    				     'AND nspname <> \'information_schema\';';

	eq.executeQuery(dbURL, queryString, function (err, result) {
		if (err) {
			stderr(err);
			return;
		}
		
		//schema = result.rows[0].schema;

		eq.executeQuery(dbURL, queryString, function (err, result) {
			if (err) {
				stderr(err);
				return;
			}

			var jTvactionData = JSON.stringify(result.rows);
			
			socket.emit('tmaction_res', jTvactionData);
		
		});
	});
}




