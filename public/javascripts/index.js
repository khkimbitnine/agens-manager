/*#############################################################################################
#	1. 프로그램명 : index.jade에서 PostgreSQL 로그인 client-side
#   2. 파일명     : index.js
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
#             5.1 최초 개발 : 2015-07-19
#
###############################################################################################*/

// Server side에서 SQL injection 고려(black listing, white listing 예외처리)
$(function(){
	var socket = io.connect("http://10.211.55.14:3000");

	$("#signin_btn").click(function(){
		var uid = $("#inputID").val();
		var upw = $("#inputPassword").val();
		var connhost = $("#inputHost").val() + ':' + $("#inputPort").val();

		socket.emit('signin', JSON.stringify({uid: uid, upw: upw, connhost: connhost, connDB: 'postgres'}));
    });

    socket.on('auth_success', function (data) {
    	var cookieData = JSON.parse(data);
    	initializeCookie(cookieData);
        window.location = '/main';
	});

	socket.on('auth_fail', function (data) {
		var message = JSON.parse(data);
		alert(data.msg);
	});
});

function initializeCookie(data) {
	Cookies.set('uid', data.uid);
    Cookies.set('token', data.token);
}
