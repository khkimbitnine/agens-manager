/*#############################################################################################
#	1. 프로그램명 :  client로 부터 온 요청에 따른 기능을backend 디렉터리 내에 있는 다른 사용자 모듈에 server-side 로직에 binding (event-routing)
#   2. 파일명     : backend_gate.js
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
#             5.1 최초 개발 : 2015-07-25
#
###############################################################################################*/

var signinJS = require('./signin');
var obloadJS = require('./obload');

exports.backend_events = function(socket) {
	// index.js에서 signin 요청시 처리
	socket.on('signin', function () {
		signinJS.signin(socket);
	});

	// main.js에서 obload 요청시 처리
	socket.on('obload_req', function (data) {
		obloadJS.obload(socket);
	});
}
