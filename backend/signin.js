/*#############################################################################################
#	1. 프로그램명 : index.jade에서 client가 입력한 정보를 바탕으로 PostgreSQL 로그인 및 인증 후 client auth
#   2. 파일명     : signin.js
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
#             5.1 최초 개발 : 2015-07-27
#
###############################################################################################*/

//TO-DO DB 조회
exports.signin = function(socket){
	hashMap.set("1", {uid : 1, token : 'aaaaa'});

	console.log(hashMap.get("1").token);


	socket.emit('auth_success', {msg:'welcome'});
}