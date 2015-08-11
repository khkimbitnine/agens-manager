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
append_dropdown_tag = '<li><a style=\'cursor:pointer\' onclick="getDBTreeView(socket, $(this).text()); $(\'.sidebar .btn-group .dropdown-menu > li > .active\').removeAttr(\'class\'); $(this).addClass(\'active\');">{0}</a></li>';
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
	$('.main').empty();
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
						getSchemaSummary(socket, connInfo); 
						break;
					case 'TABLE' : 
						getTableSummary(socket, connInfo, $(this).treeview('getParent', node).text);
						break;
					case 'VIEW' : 
						getViewSummary(socket, connInfo, $(this).treeview('getParent', node).text);
						break;
					case 'FUNCTION' : 
						getFuncSummary(socket, connInfo, $(this).treeview('getParent', node).text);
						break;
					default : 
						break;
				}

				switch ($(this).treeview('getParent', node).text) {
					case 'SCHEMA' :
						getSchemaDetail(socket, connInfo, node.text);
						break;
					case 'TABLE' :
						getTableDetail(socket, connInfo);
						break;
					case 'VIEW' :
						getViewDetail(socket, connInfo);
						break;
					case 'FUNCTION' :
						getFuncDetail(socket, connInfo);
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

function getSchemaSummary(socket, connInfo) {
	//TO-DO 뭘 표시해야 할까 pg_namespace에 별게 없다...
	$('.main').empty();
}

function getTableSummary(socket, connInfo, schemaName) {
	$('.main').empty();

	var navFormat = '<ul id = "summaryNav" class="nav nav-tabs">' +
  						'<li role="presentation" class="active"><a href="#" onclick="navControl($(this).text(), socket); return false;">Table</a></li>' +
  						'<li role="presentation"><a href="#" onclick="navControl($(this).text(), socket); return false;">View</a></li>' +
  						'<li role="presentation"><a href="#" onclick="navControl($(this).text(), socket); return false;">Function</a></li>' +
					'</ul>'

	$('.main').append(navFormat);

	var tblFormat = '<table class="table table-striped table-hover">' +
						'<thead>' +
							'<tr>' +
								'<th>#</th>' +
								'<th>Table Name</th>' +
								'<th>Owner</th>' +
								'<th>Tablespace</th>' +
								'<th>Estimated Row Count</th>' +
								'<th>Comment</th>' +
							'</tr>' +
						'</thead>' +
						'<tbody>' +
						/*
							'<tr>' +
								'<th scope="row">1</th>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
							'</tr>' +
							'<tr>' +
								'<th scope="row">1</th>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
							'</tr>' +
							'<tr>' +
								'<th scope="row">1</th>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
							'</tr>' +
							'<tr>' +
								'<th scope="row">1</th>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
							'</tr>' +
							'<tr>' +
								'<th scope="row">1</th>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
							'</tr>' +
						*/
						'</tbody>' +
					'</table>';
	$('.main').append(tblFormat);

	var socketData = connInfo;

	socketData.type = 'TS';
	socketData.schemaName = schemaName;
	jSocketData = JSON.stringify(socketData);

	socket.emit('tvaction_req', jSocketData);
	socket.on('tvaction_res', function (data) {
		var result = JSON.parse(data);
		$('table > tbody').empty();
		$.each(result, function (index, obj) {
			var list_data = Templete.format(append_getSchemaDetail_Tag,
				index + 1,
				obj['tablename'],
				obj['tableowner'],
				obj['tablespace'],
				obj['rowcounts'],
				obj['comment']
				);
			$('table > tbody').append(list_data);
		});
	});
}

var append_getViewSummary_Tag = '<tr>' +
									'<th scope="row">{0}</th>' +
									'<td>{1}</td>' + 
									'<td>{2}</td>' +
									'<td>{3}</td>' +
								'</tr>';

function getViewSummary(socket, connInfo, schemaName) {
	$('.main').empty();

	var navFormat = '<ul id = "summaryNav" class="nav nav-tabs">' +
  						'<li role="presentation"><a href="#" onclick="navControl($(this).text(), socket); return false;")">Table</a></li>' +
  						'<li role="presentation" class="active"><a href="#" onclick="navControl($(this).text(), socket); return false;">View</a></li>' +
  						'<li role="presentation"><a href="#" onclick="navControl($(this).text(), socket); return false;">Function</a></li>' +
					'</ul>'

	$('.main').append(navFormat);

	var tblFormat = '<table class="table table-striped table-hover">' +
						'<thead>' +
							'<tr>' +
								'<th>#</th>' +
								'<th>View Name</th>' +
								'<th>Owner</th>' +
								'<th>Comment</th>' +
							'</tr>' +
						'</thead>' +
						'<tbody>' +
						'</tbody>' +
					'</table>';
	$('.main').append(tblFormat);

	var socketData = connInfo;

	socketData.type = 'VS';
	socketData.schemaName = schemaName;
	jSocketData = JSON.stringify(socketData);

	socket.emit('tvaction_req', jSocketData);
	socket.on('tvaction_res', function (data) {
		var result = JSON.parse(data);
		$('table > tbody').empty();
		$.each(result, function (index, obj) {
			var list_data = Templete.format(append_getViewSummary_Tag,
				index + 1,
				obj['viewname'],
				obj['viewowner'],
				obj['comment']
				);
			$('table > tbody').append(list_data);
		});
	});
}

var append_getFuncSummary_Tag = '<tr>' +
									'<th scope="row">{0}</th>' +
									'<td>{1}</td>' + 
									'<td>{2}</td>' +
									'<td>{3}</td>' +
									'<td>{4}</td>' +
									'<td>{5}</td>' +
								'</tr>';

function getFuncSummary(socket, connInfo, schemaName) {
	$('.main').empty();

	var navFormat = '<ul id = "summaryNav" class="nav nav-tabs">' +
  						'<li role="presentation"><a href="#" onclick="navControl($(this).text(), socket); return false;">Table</a></li>' +
  						'<li role="presentation"><a href="#" onclick="navControl($(this).text(), socket); return false;">View</a></li>' +
  						'<li role="presentation" class="active"><a href="#" onclick="navControl($(this).text(), socket); return false;">Function</a></li>' +
					'</ul>'

	$('.main').append(navFormat);

	var tblFormat = '<table class="table table-striped table-hover">' +
						'<thead>' +
							'<tr>' +
								'<th>#</th>' +
								'<th>Function Name</th>' +
								'<th>Returns</th>' +
								'<th>Owner</th>' +
								'<th>Programming Language</th>' +
								'<th>Comment</th>' +
							'</tr>' +
						'</thead>' +
						'<tbody>' +
						'</tbody>' +
					'</table>';
	$('.main').append(tblFormat);

	var socketData = connInfo;

	socketData.type = 'FS';
	socketData.schemaName = schemaName;
	jSocketData = JSON.stringify(socketData);

	socket.emit('tvaction_req', jSocketData);
	socket.on('tvaction_res', function (data) {
		var result = JSON.parse(data);
		$('table > tbody').empty();
		$.each(result, function (index, obj) {
			var list_data = Templete.format(append_getFuncSummary_Tag,
				index + 1,
				obj['functionname'],
				obj['returntype'],
				obj['ownername'],
				obj['language'],
				obj['comment']
				);
			$('table > tbody').append(list_data);
		});
	});

}

var append_getSchemaDetail_Tag = '<tr>' + 
									'<th scope="row">{0}</th>' +
									'<td>{1}</td>' +
									'<td>{2}</td>' +
									'<td>{3}</td>' +
									'<td>{4}</td>' +
									'<td>{5}</td>' +
							 	 '</tr>';

function getSchemaDetail(socket, connInfo, schemaName) {
	//TO-DO getTableSummary와 로직 동일. 추후 무언가 추가하기 위해 함수 분리
	$('.main').empty();

	var navFormat = '<ul id = "summaryNav" class="nav nav-tabs">' +
  						'<li role="presentation" class="active"><a href="#" onclick="navControl($(this).text(), socket); return false;">Table</a></li>' +
  						'<li role="presentation"><a href="#" onclick="navControl($(this).text(), socket); return false;">View</a></li>' +
  						'<li role="presentation"><a href="#" onclick="navControl($(this).text(), socket); return false;">Function</a></li>' +
					'</ul>';

	$('.main').append(navFormat);

	var tblFormat = '<table class="table table-striped table-hover">' +
						'<thead>' +
							'<tr>' +
								'<th>#</th>' +
								'<th>Table Name</th>' +
								'<th>Owner</th>' +
								'<th>Tablespace</th>' +
								'<th>Estimated Row Count</th>' +
								'<th>Comment</th>' +
							'</tr>' +
						'</thead>' +
						'<tbody>' +
						/*
							'<tr>' +
								'<th scope="row">1</th>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
							'</tr>' +
							'<tr>' +
								'<th scope="row">1</th>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
							'</tr>' +
							'<tr>' +
								'<th scope="row">1</th>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
							'</tr>' +
							'<tr>' +
								'<th scope="row">1</th>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
							'</tr>' +
							'<tr>' +
								'<th scope="row">1</th>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
								'<td>ttt</td>' +
							'</tr>' +
						*/
						'</tbody>' +
					'</table>';
	$('.main').append(tblFormat);

	var socketData = connInfo;

	socketData.type = 'SD';
	socketData.schemaName = schemaName;
	jSocketData = JSON.stringify(socketData);

	socket.emit('tvaction_req', jSocketData);
	socket.on('tvaction_res', function (data) {
		var result = JSON.parse(data);
		$('table > tbody').empty();
		$.each(result, function (index, obj) {
			var list_data = Templete.format(append_getSchemaDetail_Tag,
				index + 1,
				obj['tablename'],
				obj['tableowner'],
				obj['tablespace'],
				obj['rowcounts'],
				obj['comment']
				);
			$('table > tbody').append(list_data);
		});
	});
}

function getTableDetail(socket, connInfo) {
	$('.main').empty();

	
}

function getViewDetail(socket, connInfo) {
	$('.main').empty();

	
}

function getFuncDetail(socket, connInfo) {
	$('.main').empty();

	
}

function navControl(text, socket) {
	//TO-DO 사용자 DB 아이디 보내기, cookie의 uid 값 읽어야함. 정책에 따라 decryption, hex 시켜야 함. 현재는 하드코딩
	var connDB = $('.sidebar .btn-group .dropdown-menu > li > .active').text();
	var connInfo = { uid : 'postgres', upw : 'postgres', connHost: 'localhost', connDB : connDB};

//이거 로직 오류 var schemaName = $('.obtreeview > ul > li.node-selected').text();

	switch (text) {
		case 'Table':
			getTableSummary(socket, connInfo, schemaName);
			break;
		case 'View':
			getViewSummary(socket, connInfo, schemaName);
			break;
		case 'Function':
			getFuncSummary(socket, connInfo, schemaName);
			break;
		default:
			console.log("navControl error!");
			break;
	}
}














