/*#############################################################################################
#	1. 프로그램명 : main 화면 client-side
#   2. 파일명     : main.js
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

$(function(){
	var socket = io.connect("http://10.211.55.14:3000");

	//TO-DO 사용자 DB 아이디 보내기, 하기 postgres는 cookie의 uid 값 읽어야함. 현재는 하드코딩
	socket.emit('obload_req', {uid: 'postgres'});

	socket.on('obload_res', function (data) {
		$('.obtreeview').treeview({
			color: "#428bca",
			showTags: true,
			showBorder: false,
			backColor: '#f5f5f5',
			levels: 1,
			expandIcon: "",
			collapseIcon: "",
			nodeIcon: "",
			data: data.obload_data
		});	
	});
});