
		$(document).ready(function() {//preventDefault 옵션
    		$('#tab-container').easytabs({animationSpeed: 'fast', updateHash: false});
		});
		
		//tab z-index
		var zIndex;
		
		//tab클릭preventdefault 
		$(".tab").click(function() {
			
			zIndex = parseInt($(this).css("z-index")) + 1;
			$(this).css({
				"z-index" : zIndex
			});
			//console.log($(this).css("z-index"));
		});


		//bar 자식요소 생성
		$(".bar").each(function() {

			var bar, barWrapper;
			bar = $(this);
			barWrapper = bar.html();
			var c = $("<div class = 'bar_wrapper'></div>");
			c.append(barWrapper);
			bar.html(c);

			var bar_content = $("<div>").addClass("bar_content");
			c.wrapInner(bar_content);

		});

		//toolMenu text
		var toolMenuLabelText = [ "Create", "SQL", "History", "Model",
				"Server config", "Analyze", "Privilege" ];
		var create = [ "table", "schema", "index", "view", "function", "trigger"];
		var toolMenuSubUl = $("<ul>").appendTo($("#toolMenu .bar_content"));

		//toolMenu's sub <ul>
		toolMenuSubUl.append("<li id='create'>").append("<li id='sql'>")
				.append("<li id='history'>").append("<li id='model'>").append(
						"<li id='serverConfig'>").append("<li id='analyze'>")
				.append("<li id='privilege'>")

		for (var i = 0; i < toolMenuLabelText.length; i++) {
			toolMenuSubUl.children("li:eq(" + i + ")").append(
					"<a href='' class='label'>" + toolMenuLabelText[i] + "</a>");
		}
		
		$(".label").click(function(e){
				e.preventDefault();
				if($(this).hasClass("on")){
					$(this).removeClass('on').css("color", "#fff");
					if(!$(this).siblings('ul').is(":hidden")){
						$(this).siblings('ul').find(".object").removeClass("on").css({"background": "rgb(36,39,45)","color": "#fff", "font-weight":"normal"});
					}
				}else{
					$(this).addClass("on").css("color", "rgb(6,201,229)");
					$(".label").not($(this)).removeClass("on").css("color", "#fff");
					
					if(!$(".label").not($(this)).siblings('ul').is(":hidden")){
						$(".label").not($(this)).siblings('ul').slideToggle().find(".object").removeClass("on").css({"background": "rgb(36,39,45)","color": "#fff", "font-weight":"normal"});
					}
				}
		})
		
		//createMenu's sub <ul>
		var createLi = $("#create");
		var $createSubUl = $("<ul>").appendTo(createLi).css("background", "rgb(36,39,45)");

		for (var i = 0; i < create.length; i++) {
			$createSubUl.append("<li class='object_li'><a class='object'>"
					+ create[i] + "</a></li>");
		}
		


		//hide createMenu's sub <ul>
		$createSubUl.hide();

		//createLabel click event
		toolMenuSubUl.on("click", ".label:eq(0)", function(e) {
			$(this).next().slideToggle();
		});
		
		var $content = $(".content");
		
		$("#reg").click(function(e){
			e.preventDefault();
			$content.empty();
			$.ajax({
				url:"register_user.html",
				success:function(data){
					$content.html(data);
				}
			});
			
		});
		$("#login").click(function(e){
			e.preventDefault();
			
			if($(this).hasClass("logout")){
				$("#reg").text('');
				$(this).text("log-in").removeClass('logout');
				$("#browser").empty();
				$.post("http://localhost:3000/logout", function(data){
					location.href='/';
				});
			}else{
				$content.empty();
				$.ajax({
					url:"login_user.html",
					success:function(data){
						$content.html(data);
					}
				});
			}
		});
		
		toolMenuSubUl.on("click", ".object", function(e){
			e.preventDefault();
			var $this = $(this);
			if($this.hasClass("on")){
				$this.removeClass("on").css({"color": "#fff", "font-weight":"normal", "background":"rgb(36,39,45)"});
			}else{
				$this.addClass("on").css({"background":"#fff","color":"rgb(30,109,170)", "font-weight":"bold"});
				$(".object").not($this).removeClass("on").css({"background": "rgb(36,39,45)","color": "#fff", "font-weight":"normal"});
			}
		});

		//======================= 트리 생성 ===============================
		var s = $("#browser").treeview({
			collapsed : true
		});
		//========= 소켓 연결
		var socket = io.connect();
		
				//create table click event: content에 create_table.html 로드 
		toolMenuSubUl.on("click", ".object_li>.object", function() {
			var $content = $(".content");
			var flag = false;
			if($(".db").text().length > 0){
				flag = true;
			}
			
			var objectIndex = $(this).parent().index();
			if(flag){
				$content.empty();	
			}
			
			if(objectIndex == 0 && flag){//table
		 		$.ajax({
	             	url:"create_table.html",
	             	success:function(data){
	             		$content.html(data);
	              } 
	        	}); 
		 		$.get('http://localhost:3000/database', function(database){
					console.log("database: "+database);
					socket.emit('set_dbname', database);
		 		});
			}
			if(objectIndex == 1 && flag){//schema
		 		$.ajax({
	             	url:"create_schema.html",
	             	success:function(data){
	             		$content.html(data);
	              } 
	        	}); 
			}
			if(objectIndex == 2 && flag){//index
		 		$.ajax({
	             	url:"create_index.html",
	             	success:function(data){
	             		$content.html(data);
	              } 
	        	}); 
			}
			if(objectIndex == 3 && flag){//view
		 		$.ajax({
	             	url:"create_view.html",
	             	success:function(data){
	             		$content.html(data);
	              } 
	        	}); 
			}
			if(objectIndex == 4 && flag){//function
				
		 		$.ajax({
	             	url:"create_function.html",
	             	success:function(data){
	             		$content.html(data);
	             		
	              } 
	        	}); 
			}
			if(objectIndex == 5 && flag){//trigger
				
		 		$.ajax({
	             	url:"create_trigger.html",
	             	success:function(data){
	             		$content.html(data);
	              } 
	        	}); 
			}

		});
		
		//========= 트리전체를 감싸는 #browser 선언
		var $browser = $("#browser");

		//========= hitarea 접기/펼치기 표시
		var expHit = "hitarea expandable-hitarea lastExpandable-hitarea";
		var exp = "expandable lastExpandable";
		var collHit = "hitarea collapsable-hitarea lastCollapsable-hitarea";
		var coll = "collapsable lastCollapsable";
		var db;
		var username;
		//========= db 트리 생성				
		//db 클릭, 스키마 전송.
		socket.once('db', function(data) {
			db = data.db;
			for (var i = 0; i < db.length; i++) {
				$(
						"<li class='"+exp+"'><div class='"+expHit+"'></div><span class='db'>"
						+ db[i] + "</span></li>").appendTo(
								$browser);
			}
//			$("#login").addClass('logout').text('log-out');
//			username = data.username;
//			$("#user").text(username+" | ");
		});

		//expandable/ collapsable 함수
		function expand($this) {
			$this.prev().removeClass().addClass(expHit);
			$this.parent().removeClass().addClass(exp);
		}

		function collapse($this) {
			$this.prev().removeClass().addClass(collHit);
			$this.parent().removeClass().addClass(coll);
		}
		
		//========= db 클릭, 스키마 생성             
		$browser.on("click", ".db", function() {
			var $this = $(this);//db
			var dbname = $this.text();//db 이름

			if ($this.parent().hasClass("collapsable")) {
				$this.next().remove();
				expand($this);
			} else {
				collapse($this);

				//스키마 출력 함수 호출
				schname_emit(dbname, $this);
			}
		});
		var schema = [];
//		$.ajax({
//			method:"POST"
//		})
		
//		socket.emit('set_dbname', )
		//스키마 출력 함수
		function schname_emit(dbname, $this) {
//			$.ajax({
//				method:"POST",
//				url:"http://localhost:3000/db",
//				data:{database:dbname}
//			}).done(function(msg){
//				location.href='/';
//			});
//			 $.post("http://localhost:3000/db",{database:dbname},function(data){        
//				 //location.href='/';
//					//db이름 전송
//				 
//		        });
			socket.emit('set_dbname', dbname);
			//스키마 수신
			socket.once('scname', function(data) {//이벤트 리스너 해제를 확실히 하기 위해서, once 메서드(한번만 리스너 실행)를 씀(이유모름. 다른 리스너들은 on을 써도 작동됨.) 

			if (data.schema != 0) {//접속한 db와 dbname이 일치하지 않을 때 0으로 리턴되면 실행하지 않음.

				//스키마 배열 생성 함수 호출
				$("<ul style='display: block;' class='sch'>").insertAfter($this);

				for (var i = 0; i < data.schema.length; i++) {
					schema[i] = data.schema[i];
					$("<li class='"+exp+"'><div class='"+expHit+"'></div><span class='schema'>"
							+ data.schema[i] + "</span></li>").appendTo($this.next());
				}
			
					//스키마 수신 이벤트 리스너 해제
					socket.removeListener('scname');
				}
			});

			//스키마 배열 생성 함수(data = 스키마 데이터)
			function sch_name(data, $this) {


			}
		}

		//========= 스키마 클릭, 테이블/뷰/함수(이름만) 생성

		$browser.on("click", ".schema", function() {
			var $this = $(this);//schema

			if ($this.parent().hasClass("collapsable")) {
				$this.next().remove();
				expand($this);
			} else {
				collapse($this);

				$("<ul>").insertAfter($this).append(
						"<li class='"+exp+"'><div class='"+expHit+"'></div><span class='schemaTable'>"
								+ "table" + "</span></li>").append(
						"<li class='"+exp+"'><div class='"+expHit+"'></div><span class='schemaView'>"
								+ "view" + "</span></li>").append(
						"<li class='"+exp+"'><div class='"+expHit+"'></div><span class='schemaFunc'>"
								+ "function" + "</span></li>");
			}
		});

		//========= 스키마테이블 클릭, 테이블 생성             
		$browser.on("click", ".schemaTable", function() {
			var $this = $(this);
			var $parent = $this.parent();//.collapsable.lastCollapsable
			var scname = $parent.parent().prev().text();//ex) public
			if ($this.prev().hasClass("collapsable-hitarea")) {
				$parent.children(".tableUl").remove();
				expand($this);
			} else {
				collapse($this);
				//테이블 출력 함수 호출
				tabname_emit(scname, $parent);
			}
		});

		//테이블 출력 함수 (scname = 스키마 이름)
		function tabname_emit(scname, $parent) {

			//스키마 이름 전송
			socket.emit('set_scname_table', scname);

			//테이블 수신
			socket.on('tabname', function(data) {

				if (data.table.length !== 0) {

					$("<ul style='display: block;' class='tableUl'>").appendTo(
							$parent);

					//테이블 배열 생성 함수 호출
					tab_name(data);

				}
			});
			//테이블 배열 생성 함수 (data = 테이블 데이터)
			function tab_name(data) {

				//console.log(data);
				for (var i = 0; i < data.table.length; i++) {
					//console.log(data.table[i]);
					$(
							"<li class='"+exp+"'><div class='"+expHit+"'></div><span class='table'>"
									+ data.table[i] + "</span></li>").appendTo(
							$parent.children(".tableUl"));
				}

				//테이블 수신 이벤트 리스너 해제
				socket.removeListener('tabname');
			}
		}

		//========= 스키마뷰 클릭, 뷰 생성             
		$browser.on("click", ".schemaView", function() {
			var $this = $(this);
			var $parent = $this.parent();
			var scname = $parent.parent().prev().text();
			if ($this.prev().hasClass("collapsable-hitarea")) {
				$parent.children(".vw").remove();
				expand($this);
			} else {

				collapse($this);
				//뷰 출력 함수 호출
				viewname_emit(scname, $parent);
			}
		});

		//뷰 출력 함수 (scname = 스키마 이름)
		function viewname_emit(scname, $parent) {

			//스키마 이름 전송
			socket.emit('set_scname_view', scname);

			//뷰 수신
			socket.on('viewname', function(data) {

				if (data.view.length !== 0) {

					$("<ul style='display: block;' class='vw'>").appendTo(
							$parent);

					//뷰 배열 생성 함수 호출
					view_name(data);
				}
			});
			//뷰 배열 생성 함수 (data = 뷰 데이터)
			function view_name(data) {

				//console.log(data);
				for (var i = 0; i < data.view.length; i++) {
					//console.log(data.view[i]);
					$(
							"<li class='"+exp+"'><div class='"+expHit+"'></div><span class='view'>"
									+ data.view[i] + "</span></li>").appendTo(
							$parent.children(".vw"));
				}

				//뷰 수신 이벤트 리스너 해제
				socket.removeListener('viewname');
			}
		}

		//========= 스키마함수 클릭, 함수 생성             
		$browser.on("click", ".schemaFunc", function() {
			var $this = $(this);
			var $parent = $this.parent();
			var scname = $parent.parent().prev().text();

			if ($this.prev().hasClass("collapsable-hitarea")) {
				$parent.children(".func").remove();
				expand($this);
			} else {

				collapse($this);
				//함수 출력 함수 호출
				funcname_emit(scname, $parent);
			}
		});

		//함수 출력 함수 (scname = 스키마 이름)
		function funcname_emit(scname, $parent) {

			//스키마 이름 전송
			socket.emit('set_scname_func', scname);

			//함수 수신
			socket.on('funcname', function(data) {

				if (data.func.length !== 0) {

					$("<ul style='display: block;' class='func'>").appendTo(
							$parent);

					//함수 배열 생성 함수 호출
					func_name(data);

				}
			});
			//함수 배열 생성 함수 (data = 함수 데이터)
			function func_name(data) {

				//console.log(data);
				for (var i = 0; i < data.func.length; i++) {
					//console.log(data.func[i]);
					$(
							"<li class='last'><span class='func'>"
									+ data.func[i] + "</span></li>").appendTo(
							$parent.children(".func"));
				}

				//함수 수신 이벤트 리스너 해제
				socket.removeListener('funcname');
			}
		}

		//========= 테이블 클릭, column/index/constraints(이름만) 생성
		$browser
				.on(
						"click",
						".table",
						function() {
							var $this = $(this);

							if ($this.parent().hasClass("collapsable")) {
								$this.next().remove();
								expand($this);
							} else {
								collapse($this);

								$("<ul>")
										.insertAfter($this)
										.append(
												"<li class='"+exp+"'><div class='"+expHit+"'></div><span class='tableColumn'>"
														+ "column"
														+ "</span></li>")
										.append(
												"<li class='"+exp+"'><div class='"+expHit+"'></div><span class='tableIndex'>"
														+ "index"
														+ "</span></li>")
										.append(
												"<li class='"+exp+"'><div class='"+expHit+"'></div><span class='tableConstraint'>"
														+ "constraint"
														+ "</span></li>");
							}
						});

		//========= 뷰 클릭, column(이름만) 생성
		$browser.on("click", ".view", function() {
			var $this = $(this);

			if ($this.parent().hasClass("collapsable")) {
				$this.next().remove();
				expand($this);
			} else {
				collapse($this);

				$("<ul>").insertAfter($this).append(
						"<li class='"+exp+"'><div class='"+expHit+"'></div><span class='viewColumn'>"
								+ "column" + "</span></li>");
			}

		});

		//========= 테이블컬럼 클릭, 컬럼 생성 
		$browser.on("click", ".tableColumn, .viewColumn", function() {
			var $this = $(this);
			var $parent = $this.parent();
			var tabname = $parent.parent().prev().text();
			var scname = $parent.parent().parent().parent().parent().parent()
					.prev().text();
			if ($this.prev().hasClass("collapsable-hitarea")) {
				$parent.children(".col").remove();
				expand($this);
			} else {

				collapse($this);
				// 컬럼 출력 함수 호출
				colname_emit(tabname, scname, $parent);
			}
		});

		//컬럼 출력 함수 
		function colname_emit(tabname, scname, $parent) {

			//테이블 이름 전송
			socket.emit('set_tabname_col', {
				tabname : tabname,
				scname : scname
			});

			//컬럼 수신
			socket.on('colname', function(data) {

				if (data.column.length !== 0) {

					$("<ul style='display: block;' class='col'>").appendTo(
							$parent);

					//컬럼 배열 생성 함수 호출
					col_name(data);
				}
			});

			//컬럼 배열 생성 함수 (data = 컬럼 데이터)
			function col_name(data) {

				for (var i = 0; i < data.column.length; i++) {
					//console.log(data.column[i]);
					$(
							"<li class='last'><span class='column'>"
									+ data.column[i] + "</span></li>")
							.appendTo($parent.children(".col"));
				}
				//컬럼 수신 이벤트 리스너 해제
				socket.removeListener('colname');
			}
		}

		//========= 테이블제약키 클릭, 제약키 생성 
		$browser.on("click", ".tableConstraint", function() {
			var $this = $(this);
			var $parent = $this.parent();
			var tabname = $parent.parent().prev().text();
			var scname = $parent.parent().parent().parent().parent().parent()
					.prev().text();
			if ($this.prev().hasClass("collapsable-hitarea")) {
				$parent.children(".cons").remove();
				expand($this);
			} else {

				collapse($this);
				// 제약키 출력 함수 호출
				consname_emit(tabname, scname, $parent);
			}
		});

		//제약키 출력 함수 
		function consname_emit(tabname, scname, $parent) {

			//테이블 이름 전송
			socket.emit('set_tabname_cons', {
				tabname : tabname,
				scname : scname
			});

			//제약키 수신
			socket.on('consname', function(data) {

				if (data.constraint.length !== 0) {

					$("<ul style='display: block;' class='cons'>").appendTo(
							$parent);

					//제약키 배열 생성 함수 호출
					cons_name(data);
				}
			});

			//제약키 배열 생성 함수 (data = 제약키 데이터)
			function cons_name(data) {

				for (var i = 0; i < data.constraint.length; i++) {
					//console.log(data.constraint[i]);
					$(
							"<li class='last'><span class='cons'>"
									+ data.constraint[i] + "</span></li>")
							.appendTo($parent.children(".cons"));
				}
				//제약키 수신 이벤트 리스너 해제
				socket.removeListener('consname');
			}
		}

		//========= 테이블인덱스 클릭, 인덱스 생성 
		$browser.on("click", ".tableIndex", function() {
			var $this = $(this);
			var $parent = $this.parent();
			var tabname = $parent.parent().prev().text();
			var scname = $parent.parent().parent().parent().parent().parent()
					.prev().text();
			if ($this.prev().hasClass("collapsable-hitarea")) {
				$parent.children(".ind").remove();
				expand($this);
			} else {

				collapse($this);
				// 인덱스 출력 함수 호출
				indname_emit(tabname, scname, $parent);
			}
		});

		//인덱스 출력 함수
		function indname_emit(tabname, scname, $parent) {

			//테이블 이름 전송
			socket.emit('set_tabname_ind', {
				tabname : tabname,
				scname : scname
			});

			//인덱스 수신
			socket.on('indname', function(data) {

				if (data.index.length !== 0) {

					$("<ul style='display: block;' class='ind'>").appendTo(
							$parent);

					//인덱스 배열 생성 함수 호출
					ind_name(data);
				}
			});

			//인덱스 배열 생성 함수 (data = 인덱스 데이터)
			function ind_name(data) {

				for (var i = 0; i < data.index.length; i++) {
					//console.log(data.index[i]);
					$(
							"<li class='last'><span class='ind'>"
									+ data.index[i] + "</span></li>").appendTo(
							$parent.children(".ind"));
				}

				//인덱스 수신 이벤트 리스너 해제
				socket.removeListener('indname');
			}
		}
