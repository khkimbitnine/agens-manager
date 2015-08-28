/*#############################################################################################
#	1. 프로그램명 :  client-side main.js의 dropdown 메뉴에 들어갈 로그인한 유저의 DB 목록을 뽑아 보내준다.
#   2. 파일명     : ddload.js
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
#             5.1 최초 개발 : 2015-07-30
#
###############################################################################################*/

var pg = require('pg');
var util = require('util');
var eq = require('./executeQuery');

exports.ddload = function (socket, data) {

	//TO-DO data에 날아온 DB 유저 정보를 바탕으로 아래 연결정보를 설정한다. 정책에 다라 decryption, dehex 필요...
	//JSON -> object
	var cookieInfo = JSON.parse(data);

	// Hash 뒤지기
	var tokenValue = getSessionInfo(cookieInfo);

	if(tokenValue != -1) {
		var username = tokenValue.uid;
		var password = tokenValue.upw;
		var hostname = tokenValue.connhost;
		var dbname = 'postgres';
		var dbURL = util.format("postgres://%s:%s@%s/%s", username, password, hostname, dbname);

		makeDBList(dbURL, socket, username);
	} else {
		// 세션끊긴거 통보
		console.log('session disconnected');
		socket.emit('req_session_disconnected');
		return -1;
	}
}

function makeDBList (dbURL, socket, username) {
	//TO-DO SQL injection
	var queryString = 'SELECT A.datname::name AS dbname ' + 
	                    'FROM pg_database A JOIN pg_user B ' +
	                      'ON A.datdba = B.usesysid ' + 
	                   'WHERE B.usename = \'' + username + '\' ' +
	                     'AND A.datistemplate=\'f\'';
	eq.executeQuery(dbURL, queryString, function (err, result) {
		if (err) {
			stderr(err);
			return;
		}
		var jResult = JSON.stringify(result.rows);
		socket.emit('ddload_res', jResult);
	});
}

function getSessionInfo(cookieInfo) {
	var uid = cookieInfo.uid;
	var token = cookieInfo.token;

	var tokenValue = tokenHashMap.get(token);

	if(tokenValue) {
		return tokenValue;
	} else {
		console.log('token not found');
		return -1;
	}
}