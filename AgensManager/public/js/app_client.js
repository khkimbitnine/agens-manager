
		$(document).ready(function() {//preventDefault 옵션
    		$('#tab-container').easytabs({animationSpeed: 'fast', updateHash: false});
		});
		
		//tab z-index
		var zInd;
		
		//tab클릭preventdefault 
		$(".tab").click(function() {
			zInd = parseInt($(this).css("z-index")) + 1;
			
			$(this).css("z-index", zInd);
			
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
					if(!$(".label").not($(this)).next().is(":hidden")){
						$(".label").not($(this)).next().slideToggle().find(".object").removeClass("on").css({"background": "rgb(36,39,45)","color": "#fff", "font-weight":"normal"});
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
			if(!$this.hasClass("on")){
				$this.addClass("on").css({"background":"#eee","color":"rgb(30,109,170)", "font-weight":"bold"});
				$(".object").not($this).removeClass("on").css({"background": "rgb(36,39,45)","color": "#fff", "font-weight":"normal"});
			}
		});
		
		//create
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
			
			if(objectIndex == 0 && flag){
		 		$.ajax({
	             	url:"create_table.html",
	             	success:function(data){
	             		$content.html(data);
	              } 
	        	}); 
			}
			if(objectIndex == 1 && flag){
		 		$.ajax({
	             	url:"create_schema.html",
	             	success:function(data){
	             		$content.html(data);
	              } 
	        	}); 
			}
			if(objectIndex == 2 && flag){
		 		$.ajax({
	             	url:"create_index.html",
	             	success:function(data){
	             		$content.html(data);
	              } 
	        	}); 
			}
			if(objectIndex == 3 && flag){
		 		$.ajax({
	             	url:"create_view.html",
	             	success:function(data){
	             		$content.html(data);
	              } 
	        	}); 
			}
			if(objectIndex == 4 && flag){
				
		 		$.ajax({
	             	url:"create_function.html",
	             	success:function(data){
	             		$content.html(data);
	              } 
	        	}); 
			}
			if(objectIndex == 5 && flag){
				
		 		$.ajax({
	             	url:"create_trigger.html",
	             	success:function(data){
	             		$content.html(data);
	              } 
	        	}); 
			}

		});

		//object browser
		var s = $("#browser").treeview({
			collapsed : true
		});
		
		//socket
		var socket = io.connect();
		
		var $browser = $("#browser");

		//hitarea
		var expHit = "hitarea expandable-hitarea lastExpandable-hitarea";
		var exp = "expandable lastExpandable";
		var collHit = "hitarea collapsable-hitarea lastCollapsable-hitarea";
		var coll = "collapsable lastCollapsable";
		
		//db
		socket.once('db', function(db) {
			for (var i = 0; i < db.length; i++) {
				$("<li class='"+exp+"'><div class='"+expHit+"'></div><span class='db'>"
						+ db[i] + "</span></li>").appendTo($browser);
			}
		});

		//expandable/collapsable
		function expand($this) {
			$this.prev().removeClass().addClass(expHit);
			$this.parent().removeClass().addClass(exp);
		}

		function collapse($this) {
			$this.prev().removeClass().addClass(collHit);
			$this.parent().removeClass().addClass(coll);
		}
		//db -> schema
		$browser.on("click", ".db", function() {
			var $this = $(this);
			var dbname = $this.text();
			socket.emit('set_dbname', dbname);
			
			if ($this.parent().hasClass("collapsable")) {
				
				$this.next().remove();
				expand($this);
				
			} else {
				
				collapse($this);
				
				var schema = [];
				socket.once('scname', function(data) { 
						
						$("<ul style='display: block;' class='sch'>").insertAfter($this);
						
						for (var i = 0; i < data.schema.length; i++) {
							schema[i] = data.schema[i];
							$("<li class='"+exp+"'><div class='"+expHit+"'></div><span class='schema'>"
									+ data.schema[i] + "</span></li>").appendTo($this.next());
						}
				});
			}
		});
		

		//schema -> table, view, function
		
		$browser.on("click", ".schema", function() {
			var $this = $(this);
			
			var dbname = $this.closest(".sch").prev().text();
			socket.emit('set_dbname', dbname);
			
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

		//table -> tabname      
		$browser.on("click", ".schemaTable", function() {
			
			var $this = $(this);
			var $parent = $this.parent();//li
			var scname = $parent.parent().prev().text();
			
			var dbname = $this.closest(".sch").prev().text();
			socket.emit('set_dbname', dbname);
			
			if ($this.prev().hasClass("collapsable-hitarea")) {
				
				$parent.children(".tableUl").remove();
				expand($this);
				
			} else {
				
				collapse($this);
				
				socket.emit('set_scname_table', scname);

				socket.once('tabname', function(data) {

					if (data.table.length !== 0) {

						$("<ul style='display: block;' class='tableUl'>").appendTo($parent);

						for (var i = 0; i < data.table.length; i++) {
							$("<li class='"+exp+"'><div class='"+expHit+"'></div><span class='table'>"
											+ data.table[i] + "</span></li>").appendTo($this.next());
						}

					}
				});
			}
		});

		//view -> viewname     
		$browser.on("click", ".schemaView", function() {
			var $this = $(this);
			var $parent = $this.parent();
			var scname = $parent.parent().prev().text();

			var dbname = $this.closest(".sch").prev().text();
			socket.emit('set_dbname', dbname);
			
			if ($this.prev().hasClass("collapsable-hitarea")) {
				
				$parent.children(".vw").remove();
				expand($this);
				
			} else {

				collapse($this);
				
				socket.emit('set_scname_view', scname);

				socket.once('viewname', function(data) {

					if (data.view.length !== 0) {

						$("<ul style='display: block;' class='vw'>").appendTo($parent);

						for (var i = 0; i < data.view.length; i++) {
							$("<li class='"+exp+"'><div class='"+expHit+"'></div><span class='view'>"
											+ data.view[i] + "</span></li>").appendTo($this.next());
						}

					}
				});
			}
		});


		//function -> funcname          
		$browser.on("click", ".schemaFunc", function() {
			
			var $this = $(this);
			var $parent = $this.parent();
			var scname = $parent.parent().prev().text();

			var dbname = $this.closest(".sch").prev().text();
			socket.emit('set_dbname', dbname);

			if ($this.prev().hasClass("collapsable-hitarea")) {
				
				$parent.children(".func").remove();
				expand($this);
				
			} else {

				collapse($this);

				socket.emit('set_scname_func', scname);

				socket.once('funcname', function(data) {

					if (data.func.length !== 0) {

						$("<ul style='display: block;' class='func'>").appendTo($parent);

						for (var i = 0; i < data.func.length; i++) {
							$("<li class='last'><span class='func'>"+ data.func[i] + "</span></li>").appendTo($this.next());
						}
					}
				});
			}
		});

		//table -> column, index, constraint
		$browser.on("click",".table",function() {
							var $this = $(this);

							var dbname = $this.closest(".sch").prev().text();
							socket.emit('set_dbname', dbname);

							if ($this.parent().hasClass("collapsable")) {
								$this.next().remove();
								expand($this);
							} else {
								
								collapse($this);

								$("<ul>").insertAfter($this).append("<li class='"+exp+"'><div class='"+expHit+"'></div><span class='tableColumn'>"
														+ "column"
														+ "</span></li>").append("<li class='"+exp+"'><div class='"+expHit+"'></div><span class='tableIndex'>"
														+ "index"+ "</span></li>").append("<li class='"+exp+"'><div class='"+expHit+"'></div><span class='tableConstraint'>"
														+ "constraint"
														+ "</span></li>");
							}
						});

		//view -> column
		$browser.on("click", ".view", function() {
			
			var $this = $(this);

			var dbname = $this.closest(".sch").prev().text();
			socket.emit('set_dbname', dbname);

			if ($this.parent().hasClass("collapsable")) {
				
				$this.next().remove();
				expand($this);
				
			} else {
				
				collapse($this);
				$("<ul>").insertAfter($this).append("<li class='"+exp+"'><div class='"+expHit+"'></div><span class='viewColumn'>"
								+ "column" + "</span></li>");
			}

		});

		//column -> colname
		$browser.on("click", ".tableColumn, .viewColumn", function() {
			
			var $this = $(this);
			var $parent = $this.parent();
			var tabname = $parent.parent().prev().text();
			var scname = $this.parents('ul').siblings('.schema').text();

			var dbname = $this.closest(".sch").prev().text();
			socket.emit('set_dbname', dbname);
			
			if ($this.prev().hasClass("collapsable-hitarea")) {
				
				$parent.children(".col").remove();
				expand($this);
				
			} else {

				collapse($this);
				socket.emit('set_tabname_col', {
					tabname : tabname,
					scname : scname
				});

				socket.once('colname', function(data) {
					console.log(data);
					if (data.column.length !== 0) {

						$("<ul style='display: block;' class='col'>").appendTo($parent);

						for (var i = 0; i < data.column.length; i++) {
							$("<li class='last'><span class='column'>"
											+ data.column[i] + "</span></li>").appendTo($this.next());
						}
					}
				});
			}
		});


		//constraint -> consname
		$browser.on("click", ".tableConstraint", function() {
			var $this = $(this);
			var $parent = $this.parent();
			var tabname = $parent.parent().prev().text();
			var scname = $this.closest('.sch').find('.schema').text();

			var dbname = $this.closest(".sch").prev().text();
			socket.emit('set_dbname', dbname);
			
			if ($this.prev().hasClass("collapsable-hitarea")) {
				
				$parent.children(".cons").remove();
				expand($this);
				
			} else {

				collapse($this);
				
				socket.emit('set_tabname_cons', {
					tabname : tabname,
					scname : scname
				});

				socket.once('consname', function(data) {

					if (data.constraint.length !== 0) {

						$("<ul style='display: block;' class='cons'>").appendTo($parent);

						for (var i = 0; i < data.constraint.length; i++) {
							$("<li class='last'><span class='cons'>"
									+ data.constraint[i] + 
									"</span></li>").appendTo($this.next());
						}
					}
				});
			}
		});

		//index -> indname
		$browser.on("click", ".tableIndex", function() {
			var $this = $(this);
			var $parent = $this.parent();
			var tabname = $parent.parent().prev().text();
			var scname = $this.closest('.sch').find('.schema').text();
			

			var dbname = $this.closest(".sch").prev().text();
			socket.emit('set_dbname', dbname);
			
			
			if ($this.prev().hasClass("collapsable-hitarea")) {
				
				$parent.children(".ind").remove();
				expand($this);
				
			} else {

				collapse($this);
				
				socket.emit('set_tabname_ind', {
					tabname : tabname,
					scname : scname
				});

				socket.once('indname', function(data) {
					if (data.index.length !== 0) {

						$("<ul style='display: block;' class='ind'>").appendTo(
								$parent);

						for (var i = 0; i < data.index.length; i++) {
							$("<li class='last'><span class='ind'>"
											+ data.index[i] + "</span></li>").appendTo($this.next());
						}
					}
				});

				
			}
		});

