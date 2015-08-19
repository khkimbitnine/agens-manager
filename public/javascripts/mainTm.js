/*#############################################################################################
#	1. 프로그램명 : main 화면 client-side
#   2. 파일명     : mainTm.js
#   3. 프로그램 설명 :
#            3.1  파리미터
#        
#
#            3.2 리턴값
#					-	성공시
#						    {}
#				
#   4. 프로그램 개발자 : Bitnine SA Team 이미연
#   5. 프로그램 개발 로그
#             5.1 최초 개발 : 2015-08-11
#
###############################################################################################*/
/*
var socket = io.connect("http://192.168.188.128:3000");

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
*/
$(function(){

	//기본화면설정이벤트
	defaultEvt();
	//컨트롤이벤트
	ctrlEvt();

});

function defaultEvt () {
	
}

function ctrlEvt () {

	//menu 클릭 이벤트
	$(".clck").click(function() {

		//선택된 object
		var obj = $(this);
		//오른쪽 content 화면 비우기
		$('.main').empty();

		switch(obj.text()) {
			case 'Create':

				//Field 세팅 
				setCreateField(obj);

				break;
			case 'SQL' :

				//sqlTextField 세팅 
				setSqlTextField(obj);

				break;
			case 'History' :

				//Field 세팅 
				

				break;
			case 'Model' :

				//Field 세팅 
				
				break;
			case 'Analyze' :

				//Field 세팅 
				
				break;
			default :
				break;
		}
		
	});

	//서브메뉴 클릭 이벤트
	$(".subclck").click(function() {

		//선택된 object
		var obj = $(this);

		//오른쪽 content 화면 비우기
		$('.main').empty();
		//서브메뉴이미지 변경
		setSelSubMenuChg();

		switch($.trim(obj.text())) {
			case 'Table' :

				//create ->table Field 세팅 
				setTableField (obj);
				

				break;
			case 'Schema' :

				//
				setSchemaField(obj);

				break;
			case 'Index' :

				//
				setIndexField(obj);

				break;
			case 'View' :

				//create ->view Field 세팅 
				setViewField(obj);

				break;
			case 'Function' :

				setFunctionField(obj);

				break;
			case 'Trigger' :

				setTriggerField(obj);

				break;
			default :
				break;
		}
	});
}

function setSelSubMenuChg(){
	//sub메뉴 이미지 변경

	var onMenu = $("#selSubMenu").val();

	switch(onMenu){
		case 'Table':
			$("#tbImg").removeClass('on');
			break;
		case 'Schema':
			$("#scImg").removeClass('on');
			break;
		case 'Index':
			$("#idImg").removeClass('on');
			break;
		case 'View':
			$("#vwImg").removeClass('on');
			break;
		case 'Function':
			$("#ftImg").removeClass('on');
			break;
		case 'Trigger':
			$("#tgImg").removeClass('on');
			break;
		default:
			break;
	}
}

function setCreateField (obj) {
	
	//.main 화면에 다음과 같은 내용을 입력.
	var appendCont = '<div class="input-group input-group-lg">'
						+'<input type="text" class="form-control" placeholder="create" aria-describedby="sizing-addon1" style="height(150)">'
					+'</div>';
	$('.main').append(appendCont);

}

function getSchemaInfo(socket){

	var schemaNames ='<option>{0}</option>' ;
	var connInfo = { uid : 'postgres', upw : 'postgres', connHost: 'localhost', connDB : $('.current_selected_database').text(), type : 'TB'};
	//object -> JSON
	var jConnInfo = JSON.stringify(connInfo);

	socket.emit('tmaction_req', jConnInfo);
	socket.once('tmaction_res', function (data) {

		//JSON -> object
		var result = JSON.parse(data);
		
		$.each(result, function (index, obj) {
			var list_data = Templete.format(schemaNames,
				obj['schema']
				);
			$("#schemaNmSel").append(list_data);
		});

	});

}
function setTableField (obj) {

	$("#selSubMenu").val($.trim(obj.text()));
	obj.addClass('on');
	var appendCont = 
	'<div class="well well-sm row">'
		+'<label for="schemaDrdw" style="margin-right:10;margin-top:6px;" class="col-md-2 text-center">'
			+'<h5>SCHEMA NAME</h5>'
		+'</label>'
		+'<div class="col-md-2">'
			+'<select id="schemaNmSel" class="form-control" style="margin-top:6px;"></select>'
		+'</div>'
		+'<label for="tableTxt" style="margin-right:10;margin-top:6px;" class="col-md-2 text-center">'
			+'<h5>TABLE NAME</h5>'
		+'</label>'
		+'<div class="col-md-3" >'
			+'<input type="text" class="form-control "style="margin-top:6px;" id="tableTxt" placeholder="table name1">'
		+'</div>'
	+'</div>';
	
	$('.main').append(appendCont);

	getSchemaInfo(socket);

	var tableCont = '<table id="createTb" class="table table-striped">'
	+'<tr>'
		+'<th>Column</th>'
		+'<th>Type</th>'
		+'<th>Length</th>'
		+'<th>Not Null</th>'
		+'<th>Primary Key</th>'
		+'<th>Unique Key</th>'
		+'<th>Default</th>'
		+'<th>Foreign Key</th>'
		+'<th>Check</th>'
		+'<th><a href="#" onclick="plusTr();"><img src="/images/plus.png" style="cursor:pointer"/></a></th>'
	+'</tr>'
	+'<tr>'
		+'<td><input type="text" class="form-control " id="tableTxt" placeholder="table name1"></td>'
		+'<td><select class="form-control"><option></option></select></td>'
		+'<td><input type="text" class="form-control " id="tableTxt" placeholder="table name1"></td>'
		+'<td><input type="checkbox" class="form-control"></td>'
		+'<td><input type="checkbox" class="form-control"></td>'
		+'<td><input type="checkbox" class="form-control"></td>'
		+'<td><input type="text" class="form-control " id="tableTxt" placeholder="table name1"></td>'
		+'<td><input type="text" class="form-control " id="tableTxt" placeholder="table name1"></td>'
		+'<td><input type="text" class="form-control " id="tableTxt" placeholder="table name1"></td>'
		+'<td></td>'
	+'</tr>'
	+'</table>'

	+'<table class="table table-striped">'
	+'<tr>'
		+'<th>Comment</th>'
	+'</tr>'
	+'<tr>'
		+'<td><textarea class="form-control sizeX" rows="3" placeholder="enter the comment"></textarea></td>'
	+'</tr>'
	+'</table>'
	+'<div class="btn-group center-block" style="align:center">'
		+'<button type="button" class="btn btn-success">CREATE</button>'
		+'<button type="button" class="btn btn-primary">CANCEL</button>'
	+'</div>'
	;

	$('.main').append(tableCont);

}

function setSchemaField(obj){
	$("#selSubMenu").val($.trim(obj.text()));
	obj.addClass('on');
}

function setIndexField(obj){
	$("#selSubMenu").val($.trim(obj.text()));
	obj.addClass('on');
}

function setViewField(obj){
	$("#selSubMenu").val($.trim(obj.text()));
	obj.addClass('on');

}

function setFunctionField(obj){
	$("#selSubMenu").val($.trim(obj.text()));
	obj.addClass('on');

}

function setTriggerField(obj){
	$("#selSubMenu").val($.trim(obj.text()));
	obj.addClass('on');

}

function setSqlTextField (obj) {

	//.main 화면에 다음과 같은 내용을 입력.
	var appendCont = '<textarea class="form-control" rows="15" placeholder="enter the contents"></textarea>';
	$('.main').append(appendCont);

}

/**
	+ 이벤트
**/

function plusTr(){

	var appendCont = '<tr>'
		+'<td><input type="text" class="form-control " id="tableTxt" placeholder="table name1"></td>'
		+'<td><select class="form-control"><option></option></select></td>'
		+'<td><input type="text" class="form-control " id="tableTxt" placeholder="table name1"></td>'
		+'<td><input type="checkbox" class="form-control"></td>'
		+'<td><input type="checkbox" class="form-control"></td>'
		+'<td><input type="checkbox" class="form-control"></td>'
		+'<td><input type="text" class="form-control " id="tableTxt" placeholder="table name1"></td>'
		+'<td><input type="text" class="form-control " id="tableTxt" placeholder="table name1"></td>'
		+'<td><input type="text" class="form-control " id="tableTxt" placeholder="table name1"></td>'
		+'<td><img src="/images/minus.png" style="cursor:pointer"/></td>'
	+'</tr>'
	;

	$("#createTb").append(appendCont);

}