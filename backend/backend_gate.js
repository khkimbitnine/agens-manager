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
var ddloadJS = require('./ddload');
var tvloadJS = require('./tvload');
var tvactionJS = require('./tvaction');

exports.backend_events = function(socket) {
	// index.js에서 signin 요청시 처리
	socket.on('signin', function () {
		signinJS.signin(socket);
	});

	// main.js에서 dropdown_req 요청시 처리
	socket.on('ddload_req', function (data) {
		ddloadJS.ddload(socket, data);
	});

	// DB를 선택하여 tree view를 로드하는 요청시 처리
	socket.on('tvload_req', function (data) {
		tvloadJS.tvload(socket, data);
	});

	// Tree View에서 SCHEMA를 클릭하였을시 처리
	socket.on('tvactionSchemaSummary_req', function (data) {
		tvactionJS.descSchemaSummary(socket, data);
	});

	// Tree View에서 TABLE을 클릭하였을시 처리
	socket.on('tvactionTableSummary_req', function (data) {
		tvactionJS.descTableSummary(socket, data);
	});

	// Tree View에서 VIEW를 클릭하였을시 처리
	socket.on('tvactionViewSummary_req', function (data) {
		tvactionJS.descViewSummary(socket, data);
	});

	// Tree View에서 FUNCTION을 클릭하였을시 처리
	socket.on('tvactionFuncSummary_req', function (data) {
		tvactionJS.descFuncSummary(socket, data);
	});

	// Tree View에서 Schema 명을 클릭하였을시 처리
	socket.on('tvactionSchemaDetail_req', function (data) {
		tvactionJS.descSchemaDetail(socket, data);
	});

	// Tree View에서 Table 명을 클릭하였을시 처리
	socket.on('tvactionTableDetail_req', function (data) {
		tvactionJS.descTableDetail(socket, data);
	});

	// Tree View에서 View 명을 클릭하였을시 처리
	socket.on('tvactionViewDetail_req', function (data) {
		tvactionJS.descViewDetail(socket, data);
	});

	// Tree View에서 Function 명을 클릭하였을시 처리
	socket.on('tvactionFuncDetail_req', function (data) {
		tvactionJS.descFuncDetail(socket, data);
	});
}
