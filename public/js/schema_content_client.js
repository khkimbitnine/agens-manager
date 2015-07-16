
	var $infoBox = $("#infoBox");
	
	// Shows information of the selected schema's table
	function table_info(){
		
		socket.once('get_schema_table', function(data){
			
			var table_info = JSON.parse(data);
			
			$infoBox.empty();
			
			$infoBox.append("<table id='tableBox'>"+
								"<tr>"+
									"<th></th>"+
									"<th>Table</th>"+
									"<th>Owner</th>"+
									"<th>Tablespace</th>"+
									"<th>Estimated row count</th>"+
									"<th>Comment</th>"+
								"</tr>"+
							"</table>");		
			
			for(var i = 0 ; i < table_info.length ; i ++){
				
				var tr = $("<tr>").appendTo($infoBox.find("table"));
				
				if(i == 0 ){
					
					$("<td>").append("<input type='checkbox' class='checkbox' checked/>").appendTo(tr);
					
				}else{
					
					$("<td>").append("<input type='checkbox' class='checkbox'/>").appendTo(tr);
					
				}

				
				$("<td class='tabname'>").text(table_info[i].table).appendTo(tr);
				
				$("<td class='tabowner'>").text(table_info[i].owner).appendTo(tr);
				
				$("<td>").text(table_info[i].tablespace).appendTo(tr);
				
				$("<td>").text(table_info[i].row).appendTo(tr);
				
				$("<td class='tabcomment'>").text(table_info[i].comment).appendTo(tr);
				
			}
			
		});
		
	}
	
	// Shows information of the selected schema's view
	function view_info(){
		
		socket.once('get_schema_view', function(data){
			
			var view_info = JSON.parse(data);
			
			$infoBox.empty();
			
			$infoBox.append("<table id='viewBox'>"+
								"<tr>"+
									"<th></th>"+
									"<th>View</th>"+
									"<th>Owner</th>"+
									"<th>Comment</th>"+
								"</tr>"+
							"</table>");		
			
			for(var i = 0 ; i < view_info.length ; i ++){
				
				var tr = $("<tr>").appendTo($infoBox.find("table"));
				
				if(i == 0 ){
					
					$("<td>").append("<input type='checkbox' class='checkbox' checked/>").appendTo(tr);
					
				}else{
					
					$("<td>").append("<input type='checkbox' class='checkbox'/>").appendTo(tr);
					
				}

				
				$("<td class='viewname'>").text(view_info[i].view).appendTo(tr);
				
				$("<td class='viewowner'>").text(view_info[i].owner).appendTo(tr);
				
				$("<td class='viewcomment'>").text(view_info[i].comment).appendTo(tr);
				
				$("<td class='viewquery hidden'>").text(view_info[i].query).appendTo(tr);
			}
		});
	}
	
	// Shows information of the selected schema's function
	function proc_info(){
		
		socket.once('get_schema_proc', function(data){
			
			var proc_info = JSON.parse(data);
			
			$infoBox.empty();
			
			$infoBox.append("<table id='procBox'>"+
								"<tr>"+
									"<th></th>"+
									"<th>Function</th>"+
									"<th>Returns</th>"+
									"<th>Owner</th>"+
									"<th>Programming Language</th>"+
									"<th>Comment</th>"+
								"</tr>"+
							"</table>");		
			
			for(var i = 0 ; i < proc_info.length ; i ++){
				
				var tr = $("<tr>").appendTo($infoBox.find("table"));
				
				if(i == 0 ){
					
					$("<td>").append("<input type='checkbox' class='checkbox' checked/>").appendTo(tr);
					
				}else{
					
					$("<td>").append("<input type='checkbox' class='checkbox'/>").appendTo(tr);
					
				}
				
				$("<td class='proname'>").text(proc_info[i].proname).appendTo(tr);
				
				$("<td class='returns'>").text(proc_info[i].returns).appendTo(tr);
				
				$("<td class='owner'>").text(proc_info[i].owner).appendTo(tr);
				
				$("<td class='language'>").text(proc_info[i].language).appendTo(tr);
				
				$("<td class='comment'>").text(proc_info[i].comment).appendTo(tr);
				
				$("<td class= 'arg hidden'>").text(proc_info[i].arg).appendTo(tr);
				
				$("<td class= 'definition hidden'>").text(proc_info[i].definition).appendTo(tr);
				
				$("<td class= 'execution_cost hidden'>").text(proc_info[i].execution_cost).appendTo(tr);
				
				$("<td class= 'result_rows hidden'>").text(proc_info[i].result_rows).appendTo(tr);
				
				$("<td class= 'immutable hidden'>").text(proc_info[i].immutable).appendTo(tr);
				
				$("<td class= 'null_call hidden'>").text(proc_info[i].null_call).appendTo(tr);
				
				$("<td class= 'definer hidden'>").text(proc_info[i].definer).appendTo(tr);
			}
		});
	}
	
	// Table tab shows table_info
	$("#table").click(function(){
		
		var $this = $(this);
		
		$this.siblings().css("background", "#bbb");
		$this.css("background", "grey");
		
		socket.emit('set_schema_table', $("#browser span.on").text());
		
		table_info();
		
	});
	
	// View tab shows view_info
	$("#view").click(function(){
		
		var $this = $(this);
		
		$this.siblings().css("background", "#bbb");
		$this.css("background", "grey");
		
		socket.emit('set_schema_view', $("#browser span.on").text());
		
		view_info();
		
	});
	
	// Function tab shows proc_info
	$("#function").click(function(){
		
		var $this = $(this);
		
		$this.siblings().css("background", "#bbb");
		$this.css("background", "grey");
		
		socket.emit('set_schema_proc', $("#browser span.on").text());
		
		proc_info();
		
	});
	
	// Table information is default
	$("#table").click();
	
	$("#infoBox").on("click", ".checkbox", function(){
		var $this = $(this);
		
		$(".checkbox").not(this).prop('checked', false).next().val(0);
		
		$this.next().val(1);
		
		
	});	
	
	// Alter button - Alters the selected table/view/function
	$("#btnBox>button:eq(0)").click(function(){
		
		// Alters the selected table
		if($("#infoBox>table").is("#tableBox") && $("#tableBox td").length){
			
			$.ajax({
				url: "alter_table.html",
				success:function(data){
					
					var $content = $(".content");
					var tabname = $(".checkbox:checked").parent().siblings(".tabname").text();
					var schema = $(".schema.on").text();
					var owner = $(".checkbox:checked").parent().siblings(".tabowner").text();
					var comment = $(".checkbox:checked").parent().siblings(".tabcomment").text();
					
					$content.empty().html(data);
					$content.find("#oldName").val(tabname);
					$content.find("#name").val(tabname);
					
					var $schema = $content.find("#schemaList");
					var $oldSchema = $content.find("#oldSchema");
					
					var $owner = $content.find("#ownerList");
					var $oldOwner = $content.find("#oldOwner");
					
					var $comment = $content.find("#comment");
					var $oldCmt = $content.find("#oldCmt");
					
					$schema.empty();

					socket.emit('set_dbname', $(".schema.on").closest(".db").text());

					socket.once('scname',function(data) {
						
						$schema.append('<option>');

						for(var i = 0 ; i < data.schema.length ; i++){
							
							$schema.append("<option value='"+data.schema[i]+"'>"+ data.schema[i]+ "</option>");
							
						}
						
						$schema.val(schema);//option selected
						
						$oldSchema.val(schema);
					});
					
					socket.once('get_role', function(data){
						
						$owner.append('<option>');
						
						for (var i = data.length - 1; i >= 0; i--) {
							$owner.append(
									'<option class="role" value="'+data[i]+'">' + data[i]
											+ '</option>');
						}
						
						$owner.val(owner);
						
						$oldOwner.val(owner);
					});
					
					$comment.val(comment);
					
					$oldCmt.val(comment);
				}
			});
			
		}
		
		// Alters the selected view
		if($("#infoBox>table").is("#viewBox") && $("#viewBox td").length){
		
			$.ajax({
				url: "alter_view.html",
				success:function(data){
					
					var $content = $(".content");
					var viewname = $(".checkbox:checked").parent().siblings(".viewname").text();
					var query = $(".checkbox:checked").parent().siblings(".viewquery").text();
					var comment = $(".checkbox:checked").parent().siblings(".viewcomment").text();
					
					$content.empty().html(data);
					$content.find("#oldName").val(viewname);
					$content.find("#name").val(viewname);
					
					$content.find("#oldQuery").val(query.replace(';',''));					
					$content.find("#query").val(query.replace(';',''));					
					
					$content.find("#oldCmt").val(comment);
					$content.find("#comment").val(comment);
					
				}
			});
			
		}
		
		// Alters the selected function
		if($("#infoBox>table").is("#procBox") && $("#procBox td").length){
			
			$.ajax({
				
				url: "alter_proc.html",
				success:function(data){
					
					var $content = $(".content");
					var schema = $(".schema.on").text();
					
					var $proc = $(".checkbox:checked").parent();
					
					var name = $proc.siblings(".proname").text();
					var arg = $proc.siblings(".arg").text();
					var returns = $proc.siblings(".returns").text();
					var language = $proc.siblings(".language").text();
					var definition = $proc.siblings(".definition").text();
					var comment = $proc.siblings(".comment").text();
					var execution_cost = $proc.siblings(".execution_cost").text();
					var result_rows = $proc.siblings(".result_rows").text();
					var immutable = $proc.siblings(".immutable").text();
					var null_call = $proc.siblings(".null_call").text();
					var definer = $proc.siblings(".definer").text();
					
					$content.empty().html(data);
					$content.find("#oldSc").val(schema);
					
					var $schemaList = $content.find("#schemaList").append('<option>');

					var $schemas = $(".schema.on").closest('.sch').find('.schema');
					
					for(var i = 0 ; i < $schemas.length ; i ++){
						
						$("<option>").appendTo($schemaList).val($schemas.eq(i).text()).text($schemas.eq(i).text());
						
					}
					
					$schemaList.val(schema);
					
					$content.find("#name input").eq(0).val(name).next().val(name);
					
					$content.find("input#arg").val(arg).next().text(arg);
					
					$content.find("input#ret").val(returns).next().text(returns);
					
					$content.find("input#lang").val(language).next().text(language);
					
					$content.find("#oldDef").val(definition.replace(';','')).next().val(definition.replace(';',''));
					
					$content.find("#oldCmt").val(comment).next().val(comment);
					
					$content.find("#oldCost").val(execution_cost).next().val(execution_cost);
					
					$content.find("#oldRows").val(result_rows).next().val(result_rows);
					
					if(immutable == "i"){
						
						$content.find("#oldBehav").val("IMMUTABLE").next().find("option:eq(1)").prop("selected", true);
						
					}
					if(immutable == "s"){
						
						$content.find("#oldBehav").val("STABLE").next().find("option:eq(2)").prop("selected", true);
						
					}
					
					if(immutable == "v"){
						
						$content.find("#oldBehav").val("VOLATILE").next().find("option:eq(3)").prop("selected", true);
						
					}
					
					if(null_call == "t"){
						
						$content.find("#oldStrict").val("RETURNS NULL ON NULL INPUT").next().find("option:eq(2)").prop("selected", true);
						
					}else{
						
						$content.find("#oldStrict").val("CALLED ON NULL INPUT").next().find("option:eq(1)").prop("selected", true);
						
					}
					
					if(definer == "t"){
						
						$content.find("#oldSec").val("SECURITY DEFINER").next().find("option:eq(2)").prop("selected", true);
						
					}else{
						
						$content.find("#oldSec").val("SECURITY INVOKER").next().find("option:eq(1)").prop("selected", true);
						
					}
					
				}
			});
			
		}

		
	});
	
	// Drop button - Drops the selected table/view/function
	$("#btnBox>button:eq(1)").click(function(e){
		
		e.preventDefault();
		
		// Drops the selected table if exists
		if($("#infoBox>table").is("#tableBox") && $("#tableBox td").length){
			
			var tabname = $(".checkbox:checked").parent().siblings(".tabname").text();
			
			if(window.confirm('Really want to drop?')){

			socket.emit('drop_table', {schema: $(".schema.on").text(), table: tabname});
			
			socket.once('table_success', function(error){
				
				if(error==null){
					
					alert("Table dropped.");
					
					// Returns to table_info
					$(".schema.on").click();
					$("#table").click();
					
				}else{
					
					alert(error);
				}
			});
			
			}
		}
		
		// Drops the selected view if exists
		if($("#infoBox>table").is("#viewBox") && $("#viewBox td").length){
			
			var viewname = $(".checkbox:checked").parent().siblings(".viewname").text();
			
			if(window.confirm('Really want to drop?')){
				
				socket.emit('drop_view', {schema: $(".schema.on").text(), view: viewname});
				
				socket.once('view_success', function(error){
					if(error==null){
						
						alert("View dropped.");
						
						// Returns to view_info
						$(".schema.on").click();
						$("#view").click();
						
					}else{
						
						alert(error);
						
					}
				});
			}
		}
		
		// Drops the selected function if exists
		if($("#infoBox>table").is("#procBox") && $("#procBox td").length){
			
			var proname = $(".checkbox:checked").parent().siblings(".proname").text();
			var arg = $(".checkbox:checked").parent().siblings(".arg").text();
			
			if(window.confirm('Really want to drop?')){
			
				socket.emit('drop_proc', {schema: $(".schema.on").text(), proc: proname+"("+arg+")"});
				
				socket.once('function_success', function(error){
					
					if(error==null){
						
						alert("Function dropped.");
						
						// Returns to proc_info
						$(".schema.on").click();
						$("#function").click();
						
					}else{
						
						alert(error);
					}
				});
			}
		}
		
		
	});