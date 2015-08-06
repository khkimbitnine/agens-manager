/*#############################################################################################
#	1. 프로그램명 :  query 실행 모듈
#   2. 파일명     : executeQuery.js
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
#             5.1 최초 개발 : 2015-07-28
#
###############################################################################################*/

var pg = require('pg');

exports.executeQuery = function (dbURL, queryString, callback) {
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