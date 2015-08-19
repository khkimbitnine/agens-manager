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

// signin 버튼 클릭시 PostgreSQL의 ID와 Password 등의 로그인시 필요한 정보를 signin_S.js로 전달한다.
// TO-DO 비밀번호 암호화(SHA256?)
// cookie write 필요
// Server side에서 SQL injection 고려(black listing, white listing 예외처리)
$(function(){
	var socket = io.connect("http://192.168.188.128:3000");

	$("#signin_btn").click(function(){
		var id = $("#inputID").val();
		var pw = $("#inputPassword").val();

		//TO-DO 인증 신청 로직포함해서 보내기
		socket.emit('signin');
    });
	//TO-DO 쿼리스트링으로 GET으로 보내기
    socket.on('auth_success', function (data) {
       	window.location = '/main';
	});
});