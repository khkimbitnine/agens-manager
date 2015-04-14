 	var scname;
 	var pattern = /^[a-zA-Z_\d]+$/;

 	$(".checkbox").click(function(){
 		if($(this).is(':checked')){
	 		$(this).next().val(1);
 		}else{
	 		$(this).next().val(0);
 		}
 	});
	$(".order").click(function(){
		$(".order").not($(this)).prop('checked', false);
	});
 	$("#last").prop('checked', true).next().val(1);
 	
 	$.each(db, function(i){
 	$(".database").append("<option value='"+db[i]+"'>"+db[i]+"</option>");
 	});
 	
 	
 	$("#indexForm").on("click", "option", function(){
 		var parent = $(this).parent();
 		var name = $(this).text();
 		if(parent.hasClass("database")){
	 		$(".schema, .table, .column, .index").empty();
 	 		socket.emit('set_dbname', name);
 	 		socket.once('scname', function(data){
 	 			$.each(data.schema, function(i){
 	 				$(".schema").append("<option value='"+data.schema[i]+"'>"+data.schema[i]+"</option>");
 	 			});
 	 		});
 		}
 		if(parent.hasClass("schema")){
 			scname = name;
 			$(".table, .column, .index").empty();
 			socket.emit('set_scname_table', name);
 			socket.on('tabname', function(data){
 				$.each(data.table, function(i){
 					$(".table").append("<option value='"+data.table[i]+"'>"+data.table[i]+"</option>");
 				});
 				socket.removeListener('tabname');
 			});
 		}
 		if(parent.hasClass("table")){
 			$(".column, .index").empty();
 			socket.emit('set_tabname_col', {tabname: name, scname:scname});
 			socket.on('colname', function(data){
 				$.each(data.column, function(i){
 					$(".column").append("<option value='"+data.column[i]+"'>"+data.column[i]+"</option>");
 				});
 				socket.removeListener('colname');
 			});
 		}
 	});
 	
 	$("#btnBox>button").click(function(e){
 		e.preventDefault();
 		var column = $(".column>option:selected");
 		if($(this).index()==0){//add
 			
	 		var col = column.remove().appendTo(".index").prop('selected', false).text();
	 		
	 		if($("#desc").is(":checked")){
	 			col+=" DESC";
	 		}else{
	 			col+=" ASC";
	 		}
	 		if($(".order:eq(0)").is(":checked")) col+=" NULLS FIRST";
	 		if($(".order:eq(1)").is(":checked")) col+=" NULLS LAST";
	 		
	 		column.text(col).val(col);
	 		
 		}else{
 			var index = $(".index>option:selected");
 			var res = index.text().split(" ");
 			
	 		index.remove().appendTo(".column").prop('selected', false).text(res[0]).val(res[0]);
 		}
 	});
 	$("#createBtn").click(function(e){
 		e.preventDefault();
 		var idxVal = $("#indexName").val();
 		var test = pattern.test(idxVal);
 		var columns = [];
 		if(( test || idxVal === '' )&& $(".index").has('option').length!==0){
 			for(var i = 0 ; i < $(".index>option").length ; i++){
 				columns[i] = $(".index>option").eq(i).val();
 			}
 			
 		var formdata = $("#indexForm").serializeArray();
 		socket.emit('index_form', {form: formdata, column: columns});
		socket.once('index_success', function(error){
			socket.once('index_success', function(error){
				if(error==null){
					alert("Index created.");
				}else{
					alert(error);
				}
			})
		})
 			
 		}else if(!test && idxVal !== ''){
 			alert("Index name should be a-z or A-Z or number.");
 		}else{
 			alert("Index should be selected.")
 		}
 	});
 	