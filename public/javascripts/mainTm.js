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
		setSelSubMenuChg();
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

		$("#selSubMenu").val($.trim(obj.text()));
		obj.addClass('on');

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
	
}

function getSchemaInfo(socket){

	//Table create 페이지 Schema SELECTBOX info Type : TB 로 구분
	var schemaNames ='<option>{0}</option>' ;
	var connInfo = { uid : 'postgres', upw : 'postgres', connHost: 'localhost', connDB : $('.current_selected_database').text(), type : 'TB'};
	//object -> JSON
	var jConnInfo = JSON.stringify(connInfo);

	socket.emit('tmaction_req', jConnInfo);
	socket.once('tmaction_tbres', function (data) {

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

function getTypeInfo(socket){

	//Table create 페이지 Schema SELECTBOX info Type : TB 로 구분
	var tpOptions ='<option>{0}</option>' ;
	var connInfo = { uid : 'postgres', upw : 'postgres', connHost: 'localhost', connDB : $('.current_selected_database').text(), type : 'TP'};
	//object -> JSON
	var jConnInfo = JSON.stringify(connInfo);

	socket.emit('tmaction_req', jConnInfo);
	socket.once('tmaction_tpres', function (data) {

		//JSON -> object
		var result = JSON.parse(data);
		
		$.each(result, function (index, obj) {
			
			var list_data = Templete.format(tpOptions,
				obj['types']
				);
			$("#tpSel").append(list_data);
		});

	});
}

function setTableField (obj) {

	//TABLE화면 구성
	var appendCont = '<form id="frm">'
	+'<div class="well well-sm row">'
		+'<label for="schemaNmSel" style="margin-right:10;" class="col-md-2 text-center mgTop6">'
			+'<h5>SCHEMA NAME</h5>'
		+'</label>'
		+'<div class="col-md-2">'
			+'<select id="schemaNmSel" class="form-control mgTop6"></select>'
		+'</div>'
		+'<label for="tableTxt" style="margin-right:10;" class="col-md-2 text-center mgTop6">'
			+'<h5>TABLE NAME</h5>'
		+'</label>'
		+'<div class="col-md-3" >'
			+'<input type="text" class="form-control mgTop6"id="tableTxt" placeholder="table name1">'
		+'</div>'
	+'</div>'
	+'<table id="createTb" class="table table-striped">'
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
		+'<th><a href="#" onclick="plusTr();"><img src="/images/plus.png" class="pdTop6 csPointer"/></a></th>'
	+'</tr>'
	+'<tr id="firstTr">'
		+'<td><input type="text" class="form-control " id="tableTxt" placeholder="table name1"></td>'
		+'<td><select id="tpSel" class="form-control"></select></td>'
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

	+'<table class="table table-striped" style="width:30%">'
	+'<tr>'
		+'<th>Comment</th>'
	+'</tr>'
	+'<tr>'
		+'<td><textarea class="form-control sizeX" rows="3" placeholder="enter the comment"></textarea></td>'
	+'</tr>'
	+'</table>'
	+'<div class="center-block">'
		+'<button type="button" class="btn btn-success" style="margin-right:8px;">CREATE</button>'
		+'<button type="button" class="btn btn-primary">CANCEL</button>'
	+'</div>'
	+'</form>'
	;

	$('.main').append(appendCont);

	getSchemaInfo(socket);
	getTypeInfo(socket);


}

function setSchemaField(obj){

	//SCHEMA화면 구성
	var appendCont = '<form id="frm">'
	+'<div class="well well-sm row">'
		+'<label for="schemaTxt" style="margin-right:10;" class="col-md-2 text-center mgTop6">'
			+'<h5>SCHEMA NAME</h5>'
		+'</label>'
		+'<div class="col-md-3">'
			+'<input type="text" class="form-control mgTop6" id="schemaTxt" placeholder="schema name1">'
		+'</div>'
	+'</div>'
	+'<div class="row">'
		+'<label for="dbSel" class="col-md-2 text-center">'
			+'<h5>DB</h5>'
		+'</label>'
		+'<div class="col-md-3">'
			+'<select id="dbSel" class="form-control"><option></option></select>'
		+'</div>'
	+'</div>'
	+'<div class="row">'
		+'<label for="ownerSel" class="col-md-2 text-center">'
			+'<h5>OWNER</h5>'
		+'</label>'
		+'<div class="col-md-3">'
			+'<select id="ownerSel" class="form-control"><option></option></select>'
		+'</div>'
	+'</div>'
	+'<table class="table table-striped" style="width:30%; margin-top:10px;">'
	+'<tr>'
		+'<th>Comment</th>'
	+'</tr>'
	+'<tr>'
		+'<td><textarea class="form-control sizeX" rows="3" placeholder="enter the comment"></textarea></td>'
	+'</tr>'
	+'</table>'
	+'<div class="center-block">'
		+'<button type="button" class="btn btn-success" style="margin-right:8px;">CREATE</button>'
		+'<button type="button" class="btn btn-primary">CANCEL</button>'
	+'</div>'
	+'</form>'
	;

		$('.main').append(appendCont);

}

function setIndexField(obj){

	//INDEX화면 구성
	var appendCont = '<form id="form">'
	+'<div class="well well-sm row">'
		+'<label for="indexTxt" style="margin-right:10;" class="col-md-2 text-center mgTop6">'
			+'<h5>INDEX NAME</h5>'
		+'</label>'
		+'<div class="col-md-3">'
			+'<input type="text" class="form-control mgTop6" id="indexTxt" placeholder="optional">'
		+'</div>'
	+'</div>'
	+'<div class="row">'
		+'<label for="accessSel" class="col-md-2 text-center">'
			+'<h5>Access Method</h5>'
		+'</label>'
		+'<div class="col-md-2">'
			+'<select id="accessSel" class="form-control"><option></option></select>'
		+'</div>'
		+'<label for="uniqueCk" class="col-md-1 text-center">'
			+'<h5>Unique</h5>'
		+'</label>'
		+'<div class="col-md-1">'
			+'<input id="uniqueCk" type="checkbox" class="form-control"/>'
		+'</div>'
		+'<label for="ccrCk" class="col-md-1 text-center">'
			+'<h5>Concurrency</h5>'
		+'</label>'
		+'<div class="col-md-1">'
			+'<input id="ccrCk" type="checkbox" class="form-control"/>'
		+'</div>'
	+'</div>'
	
	+'<div class="row">'
		+'<div class="col-md-7">'
			+'<table class="table table-striped" style="margin-top:10px;">'
			+'<colgroup>'
				+'<col style="width:10%">'
				+'<col style="width:15%">'
				+'<col style="width:15%">'
				+'<col style="width:10%">'
			+'</colgroup>'
			+'<tr>'
				+'<th>Data Bases</th>'
				+'<th>Schemas</th>'
				+'<th>Tables</th>'
				+'<th>Columns</th>'
			+'</tr>'
			+'<tr>'
				+'<td><select multiple class="form-control"></select></td>'
				+'<td><select multiple class="form-control"></select></td>'
				+'<td><select multiple class="form-control"></select></td>'
				+'<td><select multiple class="form-control"></select></td>'
			+'</tr>'
			+'</table>'
			
		+'</div>'
		+'<div class="col-md-1 text-center" style="width:10%">'
				+'<label for="descCk" style="margin-top:10px;" class="text-center">'
						+'DESC<input id="descCk" type="checkbox" style="margin-top:10px;display:inline;margin-left:5px;"/>'
				+'</label>'
				+'<p/><label for="firstCk" style="margin-top:5px;" class="text-center">'
					+'FIRST<input id="firstCk" type="checkbox" style="margin-top:10px;display:inline;margin-left:5px;"/>'
				+'</label>'
				+'<p/><label for="lastCk" style="margin-top:5px;" class="text-center">'
					+'LAST<input id="lastCk" type="checkbox" style="margin-top:10px;display:inline;margin-left:5px;"/>'
				+'</label>'

		+'</div>'
		/*+'<div class="col-md-1">'
				+'<input id="descCk" type="checkbox" class="form-control" style="margin-top:10px;"/>'
				+'<input id="firstCk" type="checkbox" class="form-control"  style="margin-top:10px;"/>'
				+'<input id="lastCk" type="checkbox" class="form-control"  style="margin-top:10px;"/>'
		+'</div>'*/
		+'<div class="col-md-1">'
			+'<div style="margin-top:30px;"></div>'
			+'<p><button type="button" class="btn btn-success" style="margin-right:8px;">Add</button></p>'
			+'<p><button type="button" class="btn btn-success" style="margin-right:8px;">Remove</button></p>'
		+'</div>'
		+'<div class="col-md-2">'
			+'<table class="table table-striped" style="margin-top:10px;">'
				+'<tr>'
					+'<th>Output</th>'
				+'</tr>'
				+'<tr>'
					+'<td><textarea class="form-control sizeX pre-scrollable" rows="3"></textarea></td>'
				+'</tr>'
			+'</table>'
		+'</div>'
	+'</div>'

	+'<div class="center-block">'
		+'<button type="button" class="btn btn-success" style="margin-right:8px;">CREATE</button>'
		+'<button type="button" class="btn btn-primary">CANCEL</button>'
	+'</div>'
	+'</form>'
	;

	$('.main').append(appendCont);
}

function setViewField(obj){

	//VIEW화면 구성
	var appendCont = '<form id="frm">'
	+'<div class="well well-sm row">'
		+'<label for="viewTxt" style="margin-right:10;" class="col-md-2 text-center mgTop6">'
			+'<h5>VIEW NAME</h5>'
		+'</label>'
		+'<div class="col-md-3">'
			+'<input type="text" class="form-control mgTop6" id="viewTxt" placeholder="View name1">'
		+'</div>'
	+'</div>'
	+'<div class="row">'
		+'<label for="dbSel" class="col-md-2 text-center">'
			+'<h5>DB</h5>'
		+'</label>'
		+'<div class="col-md-2">'
			+'<select id="dbSel" class="form-control"><option></option></select>'
		+'</div>'
	+'</div>'
	
	+'<div class="row">'
		+'<table class="table table-striped" style="width:30%;margin-top:10px;">'
			+'<tr>'
				+'<th>Query</th>'
			+'</tr>'
			+'<tr>'
				+'<td><textarea class="form-control sizeX" rows="3" placeholder="enter the query"></textarea></td>'
			+'</tr>'
		+'</table>'
	+'</div>'

	+'<div class="row">'
		+'<table class="table table-striped" style="width:30%">'
			+'<tr>'
				+'<th>Comment</th>'
			+'</tr>'
			+'<tr>'
				+'<td><textarea class="form-control sizeX" rows="3" placeholder="enter the comment"></textarea></td>'
			+'</tr>'
		+'</table>'
	+'</div>'

	+'<div class="center-block">'
		+'<button type="button" class="btn btn-success" style="margin-right:8px;">CREATE</button>'
		+'<button type="button" class="btn btn-primary">CANCEL</button>'
	+'</div>'
	+'</form>'
	;

	$('.main').append(appendCont);

}

function setFunctionField(obj){

	//FUNCTION화면 구성
	var appendCont = '<form id="frm">'
	+'<div class="well well-sm row">'
		+'<div class="row">'
			+'<label for="sqlpsRd"  class="col-md-2 text-center" >'
				+'<h5>SQL/PLSQL</h5>'
			+'</label>'
			+'<div class="col-md-1" style="width:3%;margin-top:8px;">'
				+'<input type="radio" id="sqlpsRd" name="prLangRd" value="SQL/PLSQL"/>'
			+'</div>'

			+'<label for="intnRd"  class="col-md-1 text-center">'
				+'<h5>INTERNAL</h5>'
			+'</label>'
			+'<div class="col-md-1" style="width:3%;margin-top:8px;">'
				+'<input type="radio" id="intnRd" name="prLangRd" value="INTERNAL"/>'
			+'</div>'

			+'<label for="cRd"  class="col-md-1 text-center">'
				+'<h5>C</h5>'
			+'</label>'
			+'<div class="col-md-1" style="width:3%;margin-top:8px;">'
				+'<input type="radio" id="cRd" name="prLangRd" value="C"/>'
			+'</div>'
		+'</div>'
		+'<div class="row">'
			+'<label for="schemaTxt" style="margin-right:10;" class="col-md-2 text-center mgTop6">'
				+'<h5>SCHEMA NAME</h5>'
			+'</label>'
			+'<div class="col-md-2">'
				+'<input type="text" class="form-control mgTop6" id="schemaTxt" placeholder="Schema name1">'
			+'</div>'
			+'<label for="returnSel" style="margin-right:10;" class="col-md-1 text-center mgTop6">'
				+'<h5>RETURNS:</h5>'
			+'</label>'
			+'<div class="col-md-4 mgTop6" style="margin-right:10;;width:28%">'
				+'<h6 style="display:inline;margin-right:5px;">Set of<input type="checkbox" style="display:inline;margin-left:5px"></h6>'
				+'<select id="returnSel" class="form-control" style="display:inline;width:40%;"><option></option></select>'
				+'<select id="returnSel" class="form-control" style="display:inline;width:20%;margin-right:5px"><option></option></select>'
				+'<h6 style="display:inline;margin-right:5px;">Array<input type="checkbox" style="display:inline;margin-left:5px"></h6>'
			+'</div>'
			+'<label for="" style="margin-right:10;width:20%" class="col-md-3 text-center mgTop6">'
				+'<h5>PROGRAMMING LANGUAGE:</h5>'
			+'</label>'
			+'<div class="col-md-1 text-center mgTop6">'
				+'<h6 id="prLanH6"></h6>'
			+'</div>'
		+'</div>'
	+'</div>'
	+'<div class="row">'
			+'<h5>ARGUMENTS:</h5>'
	+'</div>'
	+'<div class="row">'
		+'<div class="col-md-8">'
			+'<table class="table table-striped" style="margin-top:10px;">'
				+'<colgroup>'
					+'<col style="width:20%">'
					+'<col style="width:30%">'
					+'<col style="width:50%">'
				+'</colgroup>'
				+'<tr>'
					+'<th>Mode</th>'
					+'<th>Name</th>'
					+'<th>Type</th>'
				+'</tr>'
				+'<tr>'
					+'<td><select class="form-control"><select></td>'
					+'<td><input type="text" class="form-control"/></td>'
					+'<td>'
						+'<select class="form-control" style="display:inline;width:40%"><select><select class="form-control" style="display:inline;width:40%;margin-right:10px;"><select>'
						+'<label tyle="display:inline;width:5%;">Array</label><input type="checkbox" style="margin-left:5px;display:inline;width:5%"/>'
					+'</td>'
				+'</tr>'
				+'<tr>'
					+'<td><select class="form-control"><select></td>'
					+'<td><input type="text" class="form-control"/></td>'
					+'<td>'
						+'<select class="form-control" style="display:inline;width:40%"><select><select class="form-control" style="display:inline;width:40%;margin-right:10px;"><select>'
						+'<label tyle="display:inline;width:5%">Array</label><input type="checkbox" style="margin-left:5px;display:inline;width:5%"/>'
					+'</td>'
				+'</tr>'
				+'<tr>'
					+'<td><select class="form-control"><select></td>'
					+'<td><input type="text" class="form-control"/></td>'
					+'<td>'
						+'<select class="form-control" style="display:inline;width:40%"><select><select class="form-control" style="display:inline;width:40%;margin-right:10px;"><select>'
						+'<label tyle="display:inline;width:5%;">Array</label><input type="checkbox" style="margin-left:5px;display:inline;width:5%"/>'
					+'</td>'
				+'</tr>'
			+'</table>'
		+'</div>'

		+'<div class="col-md-3" style="width:13%;margin-top:6%;">'
			+'<button type="button" class="btn btn-success" style="display:inline;margin-right:8px;">UP</button>'
			+'<button type="button" class="btn btn-primary">DOWN</button>'
		+'</div>'
		+'<div class="col-md-1" style="margin-top:6%;">'
			+'<button type="button" class="btn btn-success">REMOVE</button>'
		+'</div>'
	+'</div>'
	+'<div class="row">'
			+'<button type="button" class="btn btn-primary" style="margin-bottom:15px;">+Add another argument</button>'
	+'</div>'
	+'<div class="row">'
		+'<table class="table table-striped">'
			+'<tr>'
				+'<th>Object File</th>'
				+'<th>Link Symbol</th>'
			+'</tr>'
			+'<tr>'
				+'<td><input type="text" class="form-control"/></td>'
				+'<td><input type="text" class="form-control"/></td>'
			+'</tr>'
		+'</table>'
	+'</div>'
	+'<div class="row">'
		+'<table class="table table-striped" style="width:30%">'
		+'<tr>'
			+'<th>Comment</th>'
		+'</tr>'
		+'<tr>'
			+'<td><textarea class="form-control sizeX" rows="3" placeholder="enter the comment"></textarea></td>'
		+'</tr>'
		+'</table>'
	+'</div>'
	+'<div class="row">'
			+'<h5>FUNCTION COSTING:</h5>'
	+'</div>'

	+'<div class="row">'
		+'<table class="table table-striped">'
			+'<tr>'
				+'<th>Execution Cost</th>'
				+'<th>Result Rows</th>'
			+'</tr>'
			+'<tr>'
				+'<td><input type="text" class="form-control" placeholder="enter the "/></td>'
				+'<td><input type="text" class="form-control" placeholder="enter the "/></td>'
			+'</tr>'
		+'</table>'
	+'</div>'

	+'<div class="row">'
		+'<table class="table table-striped">'
			+'<tr>'
				+'<th>Function Costing</th>'
			+'</tr>'
			+'<tr>'
				+'<td><select class="form-control"></select></td>'
			+'</tr>'
		+'</table>'
	+'</div>'

	+'<div class="center-block">'
		+'<button type="button" class="btn btn-success" style="margin-right:8px;">CREATE</button>'
		+'<button type="button" class="btn btn-primary">CANCEL</button>'
	+'</div>'
	+'</form>'
	;

	$('.main').append(appendCont);

	prLanChg();

}

function setTriggerField(obj){

	//트리거화면 구성
	var appendCont = '<form id="frm">'
	+'<div class="well well-sm row">'
		+'<label for="viewTxt" style="margin-right:10;" class="col-md-2 text-center mgTop6">'
			+'<h5>TRIGGER NAME</h5>'
		+'</label>'
		+'<div class="col-md-3">'
			+'<input type="text" class="form-control mgTop6" id="viewTxt" placeholder="Trigger name1">'
		+'</div>'
	+'</div>'
	+'<div class="row">'
		+'<table class="table table-striped" style="width:30%;margin-top:10px;">'
			+'<tr>'
				+'<th>When</th>'
			+'</tr>'
			+'<tr>'
				+'<td><select id="dbSel" class="form-control"><option></option></select></td>'
			+'</tr>'
		+'</table>'
	+'</div>'
	
	+'<div class="row">'
		+'<table class="table table-striped" style="width:60%;margin-top:10px;">'
			+'<colgroup>'
				+'<col style="width:50%">'
				+'<col style="width:50%">'
			+'</colgorup>'
			+'<tr>'
				+'<th>Event</th>'
				+'<th>For each</th>'
			+'</tr>'
			+'<tr>'
				+'<td>'
					+'<select id="dbSel" class="form-control" style="display:inline;"><option></option></select>'
				+'</td>'
				+'<td>'
					+'<select id="dbSel" class="form-control" style="display:inline;"><option></option></select>'
				+'</td>'
			+'</tr>'
		+'</table>'
	+'</div>'

	+'<div class="row">'
		+'<table class="table table-striped" style="width:60%">'
			+'<colgroup>'
				+'<col style="width:50%">'
				+'<col style="width:50%">'
			+'</colgorup>'
			+'<tr>'
				+'<th>Function</th>'
				+'<th>Arguments</th>'
			+'</tr>'
			+'<tr>'
				+'<td><select id="dbSel" class="form-control"><option></option></select></td>'
				+'<td><input type="text" class="form-control"/></td>'
			+'</tr>'
		+'</table>'
	+'</div>'

	+'<div class="center-block">'
		+'<button type="button" class="btn btn-success" style="margin-right:8px;">CREATE</button>'
		+'<button type="button" class="btn btn-primary">CANCEL</button>'
	+'</div>'
	+'</form>'
	;

	$('.main').append(appendCont);

}

function setSqlTextField (obj) {

	//.main 화면에 다음과 같은 내용을 입력.
	var appendCont = '<textarea class="form-control" rows="15" placeholder="enter the contents"></textarea>';
	$('.main').append(appendCont);

}

/**
	+ - 이벤트
**/

function plusTr() {

	//PLUS 버튼 TR 추가
	 var appendCont = $("#firstTr").clone();
	 appendCont.removeAttr('id');
	 appendCont.find('td:last').append('<a href="#" onclick="javascript:minusTr(this);"><img src="/images/minus.png" class="pdTop6 csPointer"/></a>');

	$("#createTb").append(appendCont);

}

function minusTr(obj) {

	//MINUS 버튼 TR 삭제
	$(obj).parent().parent().remove();
}

function prLanChg(){

	//PROGRAMMING LANGUAGE 선택시 자동 변환
	$('input:radio[name="prLangRd"]').change(function(event) {
		var selRd = $(':radio[name="prLangRd"]:checked').val();
		$("#prLanH6").text(selRd);
	});
}