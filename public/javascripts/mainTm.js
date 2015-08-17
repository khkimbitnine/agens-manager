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

$(function(){

	//기본화면설정이벤트
	defaultEvt();
	//컨트롤이벤트
	ctrlEvt();

});

function defaultEvt () {

	$(".clck").css({
		border: '0',
		cursor:'pointer'
	});
	$(".subclck").css({
		cursor:'pointer'
	});
	$(".mImg").style({
		background: url('/images/table.png')
	});
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

		switch(obj.text()) {
			case 'Table' :

				//create ->table Field 세팅 
				console.log('Create ->Table menu click');

				break;
			case 'View' :

				//create ->view Field 세팅 
				console.log('Create ->View menu click');

				break;
			default :
				break;
		}
	});

}

function setCreateField (obj) {

	//.main 화면에 다음과 같은 내용을 입력.
	var appendCont = '<div class="input-group input-group-lg">'
						+'<input type="text" class="form-control" placeholder="create" aria-describedby="sizing-addon1" style="height(150)">'
					+'</div>';
	$('.main').append(appendCont);

}

function setSqlTextField (obj) {

	//.main 화면에 다음과 같은 내용을 입력.
	var appendCont = '<textarea class="form-control" rows="15" placeholder="enter the contents"></textarea>';
	$('.main').append(appendCont);

}