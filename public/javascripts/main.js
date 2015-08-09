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

var socket = io.connect("http://10.211.55.14:3000");

Templete = {}
Templete.format = function(text) {
	if (arguments.length <= 1) {
		return text;
	}
	var tokenCount = arguments.length - 2;
	for (var token = 0; token <= tokenCount; token++) {
		text = text.replace(new RegExp("\\{" + token + "\\}", "gi"),arguments[token + 1]);
	}
	return text;
}

$(function(){

	appendDropdownList(socket);

});

//로그인한 유저의 DB 목록을 가져오서 Dropdown 메뉴를 구성한다.
append_dropdown_tag = '<li><a style=\'cursor:pointer\' onclick="getDBTreeView(socket, $(this).text())">{0}</a></li>';
function appendDropdownList (socket) {

	//TO-DO 사용자 DB 아이디 보내기, cookie의 uid 값 읽어야함. 정책에 따라 decryption, hex 시켜야 함. 현재는 하드코딩
	var connInfo = { uid : 'postgres', upw : 'postgres', connHost: 'localhost'};
	//object -> JSON
	var jConnInfo = JSON.stringify(connInfo);

	socket.emit('ddload_req', jConnInfo);
	
	socket.on('ddload_res', function (data) {
		//JSON -> object
		var result = JSON.parse(data);
		
		$.each(result, function (index, obj) {
			var list_data = Templete.format(append_dropdown_tag,
				obj['dbname']
				);
			$(".dropdown-menu").append(list_data);
		});

	});
}

function getDBTreeView (socket, connDB) {
	
	//TO-DO 사용자 DB 아이디 보내기, cookie의 uid 값 읽어야함. 정책에 따라 decryption, hex 시켜야 함. 현재는 하드코딩
	var connInfo = { uid : 'postgres', upw : 'postgres', connHost: 'localhost', connDB : connDB};
	//object -> JSON
	var jConnInfo = JSON.stringify(connInfo);

	socket.emit('tvload_req', jConnInfo);

	socket.on('tvload_res', function (data) {
		var treeViewData = JSON.parse(data);
		$('.obtreeview').treeview({
			color: "#428bca",
			showTags: true,
			showBorder: false,
			backColor: '#f5f5f5',
			data: treeViewData,
			onNodeSelected: function(event, node) {

				switch (node.text) {					
					case 'SCHEMA' : 
						getSchemaSummary(); 
						break;
					case 'TABLE' : 
						getTableSummary();
						break;
					case 'VIEW' : 
						getViewSummary();
						break;
					case 'FUNCTION' : 
						getFuncSummary();
						break;
					default : 
						break;
				}

				switch ($(this).treeview('getParent', node).text) {
					case 'SCHEMA' :
						getSchemaDetail();
						break;
					case 'TABLE' :
						getTableDetail();
						break;
					case 'VIEW' :
						getViewDetail();
						break;
					case 'FUNCTION' :
						getFuncDetail();
						break;
					default :
						break;
				}

			},
			onNodeUnselected: function(event, node) {

			}
		});
	});
}

function getSchemaSummary() {
	//TO-DO 뭘 표시해야 할까 pg_namespace에 별게 없다...
	console.log("schema summary");
	$('.main').empty();
}

function getTableSummary() {
	console.log("table summary");
	$('.main').empty();
}

function getViewSummary() {
	console.log("view summary");
	$('.main').empty();
}

function getFuncSummary() {
	console.log("func summary");
	$('.main').empty();
}

function getSchemaDetail() {
	console.log("schema detail");
	$('.main').empty();
}

function getTableDetail() {
	console.log("table detail");
	$('.main').empty();
}

function getViewDetail() {
	console.log("view detail");
	$('.main').empty();
}

function getFuncDetail() {
	console.log("func detail");
	$('.main').empty();
}
















