	
	var col_template = '<tr>'
			+ '<td>'
			+ '<input type="text" name="column" class="column_input" />'
			+ '</td>'
			+ '<td>'
			+ '<select name="type" class="type">'
			+ '<option value="" />'
			+ '</select>'
			+ '</td>'
			+ '<td>'
			+ '<input type="text" class="length" disabled/>'
			+ '<input type="hidden" name="length" value = ""/>'
			+ '</td>'
			+ '<td>'
			+ '<input type="text" class="precision" disabled/>'
			+ '<input type="hidden" name="precision" value=""/>'
			+ '</td>'
			+ '<td>'
			+ '<img class="not_null checkbox" src="public/css/images/chkbox_default.png"/>'
			+ '<input type="hidden" name="not_null" value="0" />'
			+ '</td>'
			+ '<td>'
			+ '<img class="p_key checkbox" src="public/css/images/chkbox_default.png"/>'
			+ '<input type="hidden" name="p_key" value="0" />'
			+ '</td>'
			+ '<td>'
			+ '<img class="u_key checkbox" src="public/css/images/chkbox_default.png"/>'
			+ '<input type="hidden" name="u_key" value="0" />'
			+ '</td>'
			+ '<td><input type="text" name="de_fault" class="default" /></td>'
			+ '<td>'
			+ '<input type="text" name="f_key" class="f_key" readonly/>'
			+ '</td>'
			+ '<td><input type="text" name="check" class="check" /></td>'
			+ '</tr>';
	
	
	function appendColumn() {

		if ($("#column tr").length == 1) {
			
			$("#column").append(col_template);
			
		} else {
			
			var $tr = $("#column").append(col_template).find("tr:last").append('<td><button class= "remove button" /></td>');
			var $opt = $("#column tr").eq(1).find('.type>option');
			
			for(var i = 1 ; i < $opt.length ; i ++){
				$tr.find('.type').append('<option value = "'+$opt.eq(i).val()+'">'+$opt.eq(i).val()+'</option>');
			}
			
		}
		
	}
	
	appendColumn();

	$(document).on("click", ".p_key.checkbox", function() {
		
	 	$(".p_key.checkbox").click(function(){
	 		
	 		var $this = $(this);
	 		
	 		if(!$this.hasClass('on')){
				$(".p_key.checkbox").not($this).removeClass('on').prop("src", "public/css/images/chkbox_default.png").next().val(0);
	 		}
	 	});
	});

		for(var i = 0 ; i < $(".db").length ; i++){
			$("#dbList").append("<option value='"+$(".db").eq(i).text()+"'>"+ $(".db").eq(i).text()+ "</option>")
		}
		var table = [];
		var varType = [];
		
		$("#dbList").change(function(){
			
			if($(this).find('option:selected').index() > 0){
				
				var $schema = $("#schemaList");
				var $type = $(".type");
				
				$schema.empty();
				$type.empty();
				
				socket.emit('set_dbname', $(this).find('option:selected').val());
				
				socket.once('type', function(rs){
					$type.append('<option>');
					
					for(i = 0 ; i < rs.length ; i ++){
						
						$type.append("<option class='typeOption' value='"+rs[i]+"'>"
								+ rs[i] + "</option>").append("<option class='typeOption' value='"+rs[i]+"[]'>"
								+ rs[i] +'[]'+ "</option>");
						
					}
				});
				
				socket.once('var_type', function(rs){
					
					for(i = 0 ; i < rs.length ; i++){
						
						varType[2*i] = rs[i];
						varType[2*i+1] = rs[i]+'[]';
						
					}
				});
				
				socket.once('table', function(rs){
					
					for(var i = 0 ; i < rs.length ; i ++){
						
						table[i] = rs[i];
						
					}
				});
				
				socket.once('scname',function(data) {
					$schema.append('<option>');
					
					for(var i = 0 ; i < data.schema.length ; i++){
						$schema.append("<option value='"+data.schema[i]+"'>"+ data.schema[i]+ "</option>");
					}
				});
				
			}
		});
		
	$("#column").on("click", ".f_key",function(){
		
		var trInd = $(this).closest('tr').index(); 
		var rowInd = trInd - 1;
		
		if($("tr").eq(trInd).find('.type>option:selected').index() == 0){
			
			alert("Please select type before foreign key.");
			
		}
		
		if($("#dbList").find('option:selected').index() == 0){
			
			alert('Please select database.');
			
		}
		
		if($("tr").eq(trInd).find('.type>option:selected').index()>0 && $("#dbList").find('option:selected').index() >0){
			
			$(".pop").empty();
			$("#fKeyPop, #popupBG").fadeIn();
			$("#fKeyInd").text(rowInd);		
			
			var $fSchema = $("#fSchema");
			
			for(var i = 0 ; i < $("#schemaList").find("option").length; i++){
				$fSchema.append("<option value = '"+$("#schemaList").find("option").eq(i).val()+"'>"+$("#schemaList").find('option').eq(i).val()+"</option>");
			}
			
			$("#selectedCol").text($(this).val());
		
		}
	});
	
	$("#fSchema").change(function(){
		
		if($(this).find('option:selected').index()>=0){
			$("#fTable").empty();
			
			socket.emit('set_scname_table', $(this).find("option:selected").val());
			
			socket.once('tabname', function(data) {
				
				$("#fTable").append('<option>');
				
				for(var i = 0 ; i < data.table.length ; i++){
					$("#fTable").append("<option value='"+data.table[i]+"'>"+ data.table[i] + "</option>");
				}
				
			});
		}
	});
	
	$("#fTable").change(function(){
		
		if($(this).find('option:selected').index()>0){
			
			$("#fColumn").empty();
			
			socket.emit('set_tabname_col', {scname: $("#fSchema").find('option:selected').text(), tabname: $(this).find('option:selected').text()});
			
			socket.once('colname', function(data){
				$("#fColumn").append('<option>');
				
				$.each(data.column, function(i){
					$("#fColumn").append("<option value='"+data.column[i]+"'>"+ data.column[i] + "</option>")
				});
			});
		}
	});
	
	$("#fBtnBox button:eq(0)").click(function(e){//ok button
		e.preventDefault();
		
		var fKeyInd = $("#fKeyInd").text();
		var trInd = fKeyInd + 1;
		
		var schema = $("#fSchema").find('option:selected').val();
		var table = $("#fTable").find('option:selected').val();
		var column = $("#fColumn").find('option:selected').val();
		
		$("#fKeyPop, #popupBG").fadeOut();
		
		if($("#fColumn").find('option:selected').index() > 0){
			
			$(".f_key").eq(fKeyInd).val(schema+"."+table+"("+column+")");
			
		}else{
			
			$(".f_key").eq(fKeyInd).val("");
		}
		
	});
	

	
	$("#fBtnBox button:eq(1)").click(function(e){
		e.preventDefault();
		$("#fKeyPop, #popupBG").fadeOut();
	});

	$("#submitBtn").click(function(e) {
		e.preventDefault();
		validCheck(table);
	});
	
	$(".add").click(function(e) {
		e.preventDefault();
		appendColumn();
	});

	var namePat = /^[a-zA-Z_][a-zA-Z_\d]+$/;
	var onePat = /^[a-zA-Z_]+$/;	//one character

	var colPat = /^[a-zA-Z_\d]+$/;
	var lengthPat = /^[\d]+$/;
	var txtPat = /^[a-zA-Z_\d\s\''\.]+$/;

	function notValid(notValid) {
		notValid.css("border", "2px solid red").addClass("notValid");
	}

	function validCheck(table) {
		
		$(".notValid").removeClass("notValid").css({
			"border" : "1px solid #aaa"
		});

		var $columnTr = $("#column tr");
		var index = $("#column tr").length - 1;
		var $schema = $("#schema");
		var $name = $("#name");
		
		if (!namePat.test($name.val()) && !onePat.test($name.val())){
			
			notValid($name);
			
		}
		var dup = false;
		
		if($("#dbList").find('option:selected').index() == 0){
			
			notValid($("#dbList"));
			
		}
		
		if($("#schemaList").find('option:selected').index() == 0){
			
			notValid($("#schemaList"));
			
		}
		
		if(namePat.test($name.val()) || onePat.test($name.val())){
			
			for(var i = 0 ; i < table.length ; i++){
				if(table[i]== $name.val()){
					dup = true;
				}
			}
			
			if(dup){
				alert("Table name duplicated");
				notValid($name);
			}
		}

		if ($schema.children("option:selected").index() ==0) notValid($schema);


		for (var i = 1; i <= index; i++) {
			
			var $column = $columnTr.eq(i).find(".column_input")
			var $type = $columnTr.eq(i).find(".type")
			var $length = $columnTr.eq(i).find(".length")
			var $fkey = $columnTr.eq(i).find(".f_key.checkbox")
			var $def = $columnTr.eq(i).find(".default")
			
			if (!colPat.test($column.val()))
				notValid($column);
			if ($type.children("option:selected").index() == 0)
				notValid($type);
			if (!lengthPat.test($length.val()) && !$length.prop('disabled'))
				notValid($length);
			if ($fkey.is(':checked') && $fkey.siblings(".f.f_column").find('option:selected').index()==0) notValid($fkey.siblings('.f.f_column'))
			if (!txtPat.test($def.val()) && !$def.val() == '')
				notValid($def);
			
		}

		var $comment = $("#comment");
		
		if (!txtPat.test($comment.val()) && !$comment.val() == '')
			notValid($comment);

		if ($(".notValid").size() == 0) {

			socket.emit('table_form', $("#tableForm").serializeArray());
			socket.once('table_success', function(error){
				if(error==null){
					
					alert("Table created.");
					
				}else{
					
					alert(error);
				}
			})
		}
	}

	var trLth;

	$("#column").on("click", ".remove", function(e) {
		e.preventDefault();
		$(this).parent().parent().remove();
		trLth = $("#column tr").length - 1;

		for (var i = 1; i <= trLth; i++) {
			$(".col_no").eq(i - 1).text(i + ". ");
		}
		
	});

	$(document).on("change", "select.type",function(){
		
		var $length = $(this).closest('td').next().find('.length').prop('disabled', true);
		var $precision = $(this).closest('td').next().next().find('.precision').prop('disabled', true);
		var optionSel = $(this).find('option:selected').val();
		
		for(var i = 0 ; i < varType.length; i ++){
			
			if(varType[i] == optionSel){
				$length.prop('disabled', false);
			}
			
		}
		if(optionSel == 'numeric' || optionSel == 'numeric[]'){
			
			$precision.prop('disabled', false);
			
		}
	});
	$(".length, .precision").change(function(){
		
		$(this).next().val($(this).val());
		
	});
	
	$("#column").on("click", ".checkbox", function() {
		
			if ($(this).hasClass('on')) {
				
				$(this).removeClass('on');
				$(this).next().val(0);
				$(this).prop("src", "public/css/images/chkbox_default.png");
				
			} else {
				
				$(this).addClass('on');
				$(this).next().val(1);
				$(this).prop("src", "public/css/images/chkbox_btn.png");
				
			}
	});
