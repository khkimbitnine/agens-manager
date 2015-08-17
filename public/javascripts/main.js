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
append_dropdown_tag = '<li><a style=\'cursor:pointer\' onclick="$(\'.current_selected_database\').text($(this).text()); getDBTreeView(socket); $(\'.sidebar .btn-group .dropdown-menu > li > .active\').removeAttr(\'class\'); $(this).addClass(\'active\');">{0}</a></li>';
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

function getDBTreeView (socket) {
	$('.main').empty();
	//TO-DO 사용자 DB 아이디 보내기, cookie의 uid 값 읽어야함. 정책에 따라 decryption, hex 시켜야 함. 현재는 하드코딩
	var connInfo = { uid : 'postgres', upw : 'postgres', connHost: 'localhost', connDB : $('.current_selected_database').text()};
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
						$('.current_selected_schema').text($(this).treeview('getParent', node).text); 
						getTableSummary(socket, connInfo, $('.current_selected_schema').text());
						break;
					case 'VIEW' : 
						$('.current_selected_schema').text($(this).treeview('getParent', node).text);
						getViewSummary(socket, connInfo, $('.current_selected_schema').text());
						break;
					case 'FUNCTION' : 
						$('.current_selected_schema').text($(this).treeview('getParent', node).text);
						getFuncSummary(socket, connInfo, $('.current_selected_schema').text());
						break;
					default : 
						break;
				}

				switch ($(this).treeview('getParent', node).text) {
					case 'SCHEMA' :
						$('.current_selected_schema').text(node.text);
						getSchemaDetail(socket, connInfo, $('.current_selected_schema').text());
						break;
					case 'TABLE' :
						$('.current_selected_schema').text($(this).treeview('getParent', $(this).treeview('getParent', node)).text);
						$('.current_selected_relation').text(node.text);
						getTableDetail(socket, connInfo, $('.current_selected_schema').text(), $('.current_selected_relation').text());
						break;
					case 'VIEW' :
						$('.current_selected_schema').text($(this).treeview('getParent', $(this).treeview('getParent', node)).text);
						$('.current_selected_relation').text(node.text);
						getViewDetail(socket, connInfo, $('.current_selected_schema').text(), $('.current_selected_relation').text());
						break;
					case 'FUNCTION' :
						$('.current_selected_schema').text($(this).treeview('getParent', $(this).treeview('getParent', node)).text);
						getFuncDetail(socket, connInfo, $('.current_selected_schema').text());
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

	var navSummaryFormat = '<ul id = "summaryNav" class="nav nav-tabs">' +
  						'<li role="presentation" class="active"><a href="#" onclick="navSummaryControl($(this).text(), socket); return false;">Table</a></li>' +
  						'<li role="presentation"><a href="#" onclick="navSummaryControl($(this).text(), socket); return false;">View</a></li>' +
  						'<li role="presentation"><a href="#" onclick="navSummaryControl($(this).text(), socket); return false;">Function</a></li>' +
					'</ul>';

	$('.main').append(navSummaryFormat);

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

	var navSummaryFormat = '<ul id = "summaryNav" class="nav nav-tabs">' +
  						'<li role="presentation"><a href="#" onclick="navSummaryControl($(this).text(), socket); return false;")">Table</a></li>' +
  						'<li role="presentation" class="active"><a href="#" onclick="navSummaryControl($(this).text(), socket); return false;">View</a></li>' +
  						'<li role="presentation"><a href="#" onclick="navSummaryControl($(this).text(), socket); return false;">Function</a></li>' +
					'</ul>';

	$('.main').append(navSummaryFormat);

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

	var navSummaryFormat = '<ul id = "summaryNav" class="nav nav-tabs">' +
  						'<li role="presentation"><a href="#" onclick="navSummaryControl($(this).text(), socket); return false;">Table</a></li>' +
  						'<li role="presentation"><a href="#" onclick="navSummaryControl($(this).text(), socket); return false;">View</a></li>' +
  						'<li role="presentation" class="active"><a href="#" onclick="navSummaryControl($(this).text(), socket); return false;">Function</a></li>' +
					'</ul>';

	$('.main').append(navSummaryFormat);

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

	var navSummaryFormat = '<ul id = "summaryNav" class="nav nav-tabs">' +
  						'<li role="presentation" class="active"><a href="#" onclick="navSummaryControl($(this).text(), socket); return false;">Table</a></li>' +
  						'<li role="presentation"><a href="#" onclick="navSummaryControl($(this).text(), socket); return false;">View</a></li>' +
  						'<li role="presentation"><a href="#" onclick="navSummaryControl($(this).text(), socket); return false;">Function</a></li>' +
					'</ul>';

	$('.main').append(navSummaryFormat);

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

var append_getTableDetail_Tag = '<tr>' +
									'<th scope="row">{0}</th>' +
									'<td>{1}</td>' +
									'<td>{2}</td>' +
									'<td>{3}</td>' +
									'<td>{4}</td>' + 
									'<td>{5}</td>' +
									'<td>{6}</td>' +
								'</tr>';
function getTableDetail(socket, connInfo, schemaName, tableName) {
	$('.main').empty();

	var navTableDetailFormat = '<ul id = "summaryNav" class="nav nav-tabs">' +
  									'<li role="presentation" class="active"><a href="#" onclick="navTableDetailControl($(this).text(), socket); return false;">Columns</a></li>' +
  									'<li role="presentation"><a href="#" onclick="navTableDetailControl($(this).text(), socket); return false;">Indexes</a></li>' +
  									'<li role="presentation"><a href="#" onclick="navTableDetailControl($(this).text(), socket); return false;">Constraints</a></li>' +
  									'<li role="presentation"><a href="#" onclick="navTableDetailControl($(this).text(), socket); return false;">Data</a></li>' +
								'</ul>';
	$('.main').append(navTableDetailFormat);

	var tblFormat = '<table class="table table-striped table-hover">' +
						'<thead>' +
							'<tr>' +
								'<th>#</th>' +
								'<th>Column Name</th>' +
								'<th>Type</th>' +
								'<th>Length</th>' +
								'<th>PK</th>' +
								'<th>NOT NULL</th>' +
								'<th>Default Value</th>' +
							'</tr>' +
						'</thead>' +
						'<tbody>' +
						'</tbody>' +
					'</table>';
	$('.main').append(tblFormat);
	
	var socketData = connInfo;

	socketData.type = 'TD';
	socketData.schemaName = schemaName;
	socketData.tableName = tableName;
	jSocketData = JSON.stringify(socketData);

	socket.emit('tvaction_req', jSocketData);
	socket.on('tvaction_res', function (data) {
		var result = JSON.parse(data);
		$('table > tbody').empty();
		$.each(result, function (index, obj) {
			var list_data = Templete.format(append_getTableDetail_Tag,
				index + 1,
				obj['columnname'],
				obj['type'],
				obj['length'],
				obj['pk'],
				obj['notnull'],
				obj['defaultvalue']
				);
			$('table > tbody').append(list_data);
		});
	});
}

var append_getTableDetailIndexes_Tag = '<tr>' +
								       		'<th scope="row">{0}</th>' +
								       		'<td>{1}</td>' +
								       		'<td>{2}</td>' +
								       		'<td>{3}</td>' +
								       		'<td>{4}</td>' + 
								       		'<td>{5}</td>' +
									   '</tr>';

function getTableDetailIndexes(socket, connInfo, schemaName, tableName) {
	$('.main').empty();

	var navTableDetailFormat = '<ul id = "summaryNav" class="nav nav-tabs">' +
  									'<li role="presentation"><a href="#" onclick="navTableDetailControl($(this).text(), socket); return false;">Columns</a></li>' +
  									'<li role="presentation" class="active"><a href="#" onclick="navTableDetailControl($(this).text(), socket); return false;">Indexes</a></li>' +
  									'<li role="presentation"><a href="#" onclick="navTableDetailControl($(this).text(), socket); return false;">Constraints</a></li>' +
  									'<li role="presentation"><a href="#" onclick="navTableDetailControl($(this).text(), socket); return false;">Data</a></li>' +
								'</ul>';
	$('.main').append(navTableDetailFormat);

	var tblFormat = '<table class="table table-striped table-hover">' +
						'<thead>' +
							'<tr>' +
								'<th>#</th>' +
								'<th>Index Name</th>' +
								'<th>Access Method</th>' +
								'<th>PK</th>' +
								'<th>Unique</th>' +
								'<th>Partial</th>' +
							'</tr>' +
						'</thead>' +
						'<tbody>' +
						'</tbody>' +
					'</table>';
	$('.main').append(tblFormat);

	var socketData = connInfo;

	socketData.type = 'TDI';
	socketData.schemaName = schemaName;
	socketData.tableName = tableName;
	jSocketData = JSON.stringify(socketData);

	socket.emit('tvaction_req', jSocketData);
	socket.on('tvaction_res', function (data) {
		var result = JSON.parse(data);
		$('table > tbody').empty();
		$.each(result, function (index, obj) {
			var list_data = Templete.format(append_getTableDetailIndexes_Tag,
				index + 1,
				obj['indexname'],
				obj['accessmethod'],
				obj['pk'],
				obj['unique'],
				obj['partial']
				);
			$('table > tbody').append(list_data);
		});
	});
}

var append_getTableDetailConstraints_Tag = '<tr>' +
										   		'<th scope="row">{0}</th>' +
												'<td>{1}</td>' +
												'<td>{2}</td>' +
												'<td>{3}</td>' +
												'<td>{4}</td>' + 
												'<td>{5}</td>' +
												'<td>{6}</td>' +
												'<td>{7}</td>' +
										   '</tr>';

function getTableDetailConstraints(socket, connInfo, schemaName, tableName) {
	$('.main').empty();

	var navTableDetailFormat = '<ul id = "summaryNav" class="nav nav-tabs">' +
  									'<li role="presentation"><a href="#" onclick="navTableDetailControl($(this).text(), socket); return false;">Columns</a></li>' +
  									'<li role="presentation"><a href="#" onclick="navTableDetailControl($(this).text(), socket); return false;">Indexes</a></li>' +
  									'<li role="presentation" class="active"><a href="#" onclick="navTableDetailControl($(this).text(), socket); return false;">Constraints</a></li>' +
  									'<li role="presentation"><a href="#" onclick="navTableDetailControl($(this).text(), socket); return false;">Data</a></li>' +
								'</ul>';
	$('.main').append(navTableDetailFormat);

	var tblFormat = '<table class="table table-striped table-hover">' +
						'<thead>' +
							'<tr>' +
								'<th>#</th>' +
								'<th>Constraint Name</th>' +
								'<th>Type</th>' +
								'<th>Index Name</th>' +
								'<th>Deferrable</th>' +
								'<th>Deferred</th>' +
								'<th>Update Action</th>' +
								'<th>Delete Action</th>' +
							'</tr>' +
						'</thead>' +
						'<tbody>' +
						'</tbody>' +
					'</table>';
	$('.main').append(tblFormat);

	var socketData = connInfo;

	socketData.type = 'TDC';
	socketData.schemaName = schemaName;
	socketData.tableName = tableName;
	jSocketData = JSON.stringify(socketData);

	socket.emit('tvaction_req', jSocketData);
	socket.on('tvaction_res', function (data) {
		var result = JSON.parse(data);
		$('table > tbody').empty();
		$.each(result, function (index, obj) {
			var list_data = Templete.format(append_getTableDetailConstraints_Tag,
				index + 1,
				obj['constraintname'],
				obj['type'],
				obj['indexname'],
				obj['deferrable'],
				obj['deferred'],
				obj['updateaction'],
				obj['deleteaction']
				);
			$('table > tbody').append(list_data);
		});
	});
}

function getTableDetailData(socket, connInfo, schemaName, tableName) {
	$('.main').empty();

	var navTableDetailFormat = '<ul id = "summaryNav" class="nav nav-tabs">' +
  									'<li role="presentation"><a href="#" onclick="navTableDetailControl($(this).text(), socket); return false;">Columns</a></li>' +
  									'<li role="presentation"><a href="#" onclick="navTableDetailControl($(this).text(), socket); return false;">Indexes</a></li>' +
  									'<li role="presentation"><a href="#" onclick="navTableDetailControl($(this).text(), socket); return false;">Constraints</a></li>' +
  									'<li role="presentation" class="active"><a href="#" onclick="navTableDetailControl($(this).text(), socket); return false;">Data</a></li>' +
								'</ul>';
	$('.main').append(navTableDetailFormat);

	var tblFormat = '<div class = table-responsive>' +
						'<table class="table table-striped table-hover table-condensed">' +
							'<thead>' +
								'<tr>' +
								'</tr>' +
							'</thead>' +
							'<tbody>' +
							'</tbody>' +
						'</table>' +
					'</div>';

	$('.main').append(tblFormat);

	var socketData = connInfo;

	socketData.type = 'TDD';
	socketData.schemaName = schemaName;
	socketData.tableName = tableName;
	jSocketData = JSON.stringify(socketData);

	socket.emit('tvaction_req', jSocketData);

	socket.on('tvaction_res', function (data) {

		var result = JSON.parse(data);

		$('table > thead > tr').empty();

		$('table > thead > tr').append('<th>#</th>');

		for(var i = 0; i < Object.keys(result[0]).length; i++) {
			$('table > thead > tr').append('<th>' + Object.keys(result[0])[i] + '</th>');
		}

		$('table > tbody').empty();

		for(var i = 0; i < result.length; i++) {
			$('table > tbody').append('<tr><th scope="row">'+ (i+1) + '</th></tr>');
			$.each(result[i], function(index, value) {
				$('table > tbody > tr:eq('+ i +')').append('<td>' + value + '</td>');
			});
		}
		
	});
}

var append_getViewDetail_Tag = '<tr>' +
							   		'<th scope="row">{0}</th>' +
									'<td>{1}</td>' +
									'<td>{2}</td>' +
									'<td>{3}</td>' +
							   '</tr>';
function getViewDetail(socket, connInfo, schemaName, viewName) {
	$('.main').empty();

	var navViewDetailFormat = '<ul id = "summaryNav" class="nav nav-tabs">' +
  									'<li role="presentation" class="active"><a href="#" onclick="navViewDetailControl($(this).text(), socket); return false;">Columns</a></li>' +
  									'<li role="presentation"><a href="#" onclick="navViewDetailControl($(this).text(), socket); return false;">Data</a></li>' +
								'</ul>';
	$('.main').append(navViewDetailFormat);

	var viewFormat = '<table class="table table-striped table-hover">' +
						'<thead>' +
							'<tr>' +
								'<th>#</th>' +
								'<th>Column Name</th>' +
								'<th>Type</th>' +
								'<th>Length</th>' +
							'</tr>' +
						'</thead>' +
						'<tbody>' +
						'</tbody>' +
					'</table>';
	$('.main').append(viewFormat);

	var socketData = connInfo;

	socketData.type = 'VD';
	socketData.schemaName = schemaName;
	socketData.viewName = viewName;
	jSocketData = JSON.stringify(socketData);

	socket.emit('tvaction_req', jSocketData);
	socket.on('tvaction_res', function (data) {
		var result = JSON.parse(data);
		$('table > tbody').empty();
		$.each(result, function (index, obj) {
			var list_data = Templete.format(append_getViewDetail_Tag,
				index + 1,
				obj['columnname'],
				obj['type'],
				obj['length']
				);
			$('table > tbody').append(list_data);
		});
	});
}

function getViewDetailData(socket, connInfo, schemaName, viewName) {
	$('.main').empty();

	var navViewDetailFormat = '<ul id = "summaryNav" class="nav nav-tabs">' +
  									'<li role="presentation"><a href="#" onclick="navViewDetailControl($(this).text(), socket); return false;">Columns</a></li>' +
  									'<li role="presentation" class="active"><a href="#" onclick="navViewDetailControl($(this).text(), socket); return false;">Data</a></li>' +
								'</ul>';
	$('.main').append(navViewDetailFormat);

	var viewFormat = '<div class = table-responsive>' +
						'<table class="table table-striped table-hover table-condensed">' +
							'<thead>' +
								'<tr>' +
								'</tr>' +
							'</thead>' +
							'<tbody>' +
							'</tbody>' +
						'</table>' +
					'</div>';
					
	$('.main').append(viewFormat);

	var socketData = connInfo;

	socketData.type = 'VDD';
	socketData.schemaName = schemaName;
	socketData.viewName = viewName;
	jSocketData = JSON.stringify(socketData);

	socket.emit('tvaction_req', jSocketData);

	socket.on('tvaction_res', function (data) {

		var result = JSON.parse(data);

		$('table > thead > tr').empty();

		$('table > thead > tr').append('<th>#</th>');

		for(var i = 0; i < Object.keys(result[0]).length; i++) {
			$('table > thead > tr').append('<th>' + Object.keys(result[0])[i] + '</th>');
		}

		$('table > tbody').empty();

		for(var i = 0; i < result.length; i++) {
			$('table > tbody').append('<tr><th scope="row">'+ (i+1) + '</th></tr>');
			$.each(result[i], function(index, value) {
				$('table > tbody > tr:eq('+ i +')').append('<td>' + value + '</td>');
			});
		}
		
	});
}

function getFuncDetail(socket, connInfo, schemaName) {
	$('.main').empty();

	
}

function navSummaryControl(type, socket) {
	//TO-DO 사용자 DB 아이디 보내기, cookie의 uid 값 읽어야함. 정책에 따라 decryption, hex 시켜야 함. 현재는 하드코딩
	var connDB = $('.sidebar .btn-group .dropdown-menu > li > .active').text();
	var connInfo = { uid : 'postgres', upw : 'postgres', connHost: 'localhost', connDB : connDB};

	switch (type) {
		case 'Table':
			getTableSummary(socket, connInfo, $('.current_selected_schema').text());
			break;
		case 'View':
			getViewSummary(socket, connInfo, $('.current_selected_schema').text());
			break;
		case 'Function':
			getFuncSummary(socket, connInfo, $('.current_selected_schema').text());
			break;
		default:
			console.log("navSummaryControl error!");
			break;
	}
}

function navTableDetailControl(type, socket) {
	//TO-DO 사용자 DB 아이디 보내기, cookie의 uid 값 읽어야함. 정책에 따라 decryption, hex 시켜야 함. 현재는 하드코딩
	var connDB = $('.sidebar .btn-group .dropdown-menu > li > .active').text();
	var connInfo = { uid : 'postgres', upw : 'postgres', connHost: 'localhost', connDB : connDB};

	switch (type) {
		case 'Columns':
			getTableDetail(socket, connInfo, $('.current_selected_schema').text(), $('.current_selected_relation').text());
			break;
		case 'Indexes':
			getTableDetailIndexes(socket, connInfo, $('.current_selected_schema').text(), $('.current_selected_relation').text());
			break;
		case 'Constraints':
			getTableDetailConstraints(socket, connInfo, $('.current_selected_schema').text(), $('.current_selected_relation').text());
			break;
		case 'Data':
			getTableDetailData(socket, connInfo, $('.current_selected_schema').text(), $('.current_selected_relation').text());
			break;
		default:
			console.log("navTableDetailControl error!");
			break;
	}
}

function navViewDetailControl(type, socket) {
	//TO-DO 사용자 DB 아이디 보내기, cookie의 uid 값 읽어야함. 정책에 따라 decryption, hex 시켜야 함. 현재는 하드코딩
	var connDB = $('.sidebar .btn-group .dropdown-menu > li > .active').text();
	var connInfo = { uid : 'postgres', upw : 'postgres', connHost: 'localhost', connDB : connDB};

	switch (type) {
		case 'Columns':
			getViewDetail(socket, connInfo, $('.current_selected_schema').text(), $('.current_selected_relation').text());
			break;
		case 'Data':
			getViewDetailData(socket, connInfo, $('.current_selected_schema').text(), $('.current_selected_relation').text());
			break;
		default:
			console.log("navTableDetailControl error!");
			break;
	}
}






