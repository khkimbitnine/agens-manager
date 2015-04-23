	
	var col_template = '<tr>'
			+ '<td class="column">'
			+ '<input type="text" name="column" class="column_input" value=""/>'
			+ '</td>'
			+ '<td class="type_box">'
			+ '<select name="type" class="type">'
			+ '<option value="" />'
			+ '</select>'
			+ '<select name="array" class="array">'
			+ '<option value="" />'
			+ '<option value="[]">[]</option>'
			+ '</select>'
			+ '</td>'
			+ '<td>'
			+ '<input type="text" name="length" class="length" value="" disabled />'
			+ '<input type="hidden" name="length2" class="length"/>'
			+ '</td>'
			+ '<td class="constraint_box">'
			+ '<input type="checkbox" class="constraint checkbox"/>'
			+ '<input type="hidden" class="const" name="constraint" value="0" />'
			+ '<input value="" class="c" style="display: none" />'
			+ '</td>'
			+ '<td>'
			+ '<input type="checkbox" class="not_null checkbox" />'
			+ '<input type="hidden" name="not_null" value="0" />'
			+ '</td>'
			+ '<td>'
			+ '<input type="checkbox" class="u_key checkbox" />'
			+ '<input type="hidden" name="u_key" value="0" />'
			+ '</td>'
			+ '<td>'
			+ '<input type="checkbox" class="p_key checkbox" />'
			+ '<input type="hidden" name="p_key" value="0" />'
			+ '</td>'
			+ '<td class="f_key_box">'
			+ '<input type="checkbox" class="f_key checkbox" />'
			+ '<input type="hidden" name="f_key" value="0" />'
			+ '<select class="f f_schema" style="display: none" />'
			+ '<select class="f f_table" style="display: none" />'
			+ '<select class="f f_column" style="display: none" />'
			+ '</td>'
			+ '<td><input type="text" name="de_fault" class="default" value=""/></td>'
			+ '<td><input type="text" name="col_comment" class="comment" value=""/></td>'
			+ '<td><input type="text" name="check" class="check" value=""/></td>'
			+ '</tr>';

	var type = [ "bigint", "bigserial", "boolean", "box", "bytea", "cidr",
			"circle", "date", "double precision", "inet", "integer", "json",
			"line", "lseg", "macaddr", "money", "path", "point", "polygon",
			"real", "smallint", "smallserial", "serial", "text", "tsquery",
			"tsvector", "txid_snapshot", "uuid", "xml", "bit", "bit varying",
			"character", "character varying", "interval", "time",
			"time with time zone", "timestamp", "timestamp with time zone",
			"numeric" ];

	function appendColumn() {

		if ($("#column tr").length == 1) {
			$("#column").append(col_template);
		} else {
			$("#column").append(col_template).find("tr:last").append(
					'<td><button class= "remove button" /></td>')
		}

		var $col = $("#column tr").eq($("#column tr").length - 1);
		var $col_type = $col.find(".type");
		for (var i = 0; i < type.length; i++)
			$col_type
					.append("<option class='typeOption' data-num='"+i+"' value='"+type[i]+"'>"
							+ type[i] + "</option>");
	}
	appendColumn();

	$(document).on("change", ".checkbox", function() {
		if ($(this).is(':checked')) {
			$(this).next().val(1);
		} else {
			$(this).next().val(0);
		}
	});

	$("#column").on("click",".p_key.checkbox",function() {
		$(".p_key").not($(this)).prop('checked', false).next().val(0);
	});
	
	var schemaArray = [];
	var $schema = $("#schemaList");
	

	
	function schemaList($object){
			socket.emit('set_dbname_table', 'postgres');
			socket.once('scname_table',function(data) {
				for(var i = 0 ; i < data.length ; i++){
					$object.append("<option value='"+data[i]+"'>"
							+ data[i]+ "</option>");
				}
			});
		}
	
	schemaList($schema);

	$("#column").on("click",".f_key.checkbox",function() {
						var $sch = $(this).siblings(".f_schema").css(
								"display", "block");
						if ($(this).is(":checked")) {
							$(".u_key, .p_key, .not_null").prop('disabled', true);
							console.log($schema.find("option").length);
							for(var i = 0 ; i < $schema.find("option").length; i++){
								$sch.append("<option value = '"+$schema.find("option").eq(i).val()+"'>"+$schema.find('option').eq(i).val()+"</option>");
							}
						} else {

							$(this).parent().find("select").empty().hide();
						}
					});

	$("#column").on("click", ".constraint.checkbox", function() {
		var c = $(this).parent().find(".c")

		if (c.hasClass('on')) {
			c.hide().removeClass("on notValid");
		} else {
			c.show().addClass("on");
		}
	});

	$(".c").change(function() {
		$(this).parent().find(".const").val($(this).val());
	});
	var refschema;//f_key value
	var reftable;
	var refcolumn;

	$("#column").on(
			"click",
			".f_schema",
			function() {

				refschema = $(this).find("option:selected").val();
				var trInd = $(this).parent().parent().index();

				if ($(this).find("option:selected").index() > 0) {
					var table = $("#column tr").eq(trInd).find(".f_table")
							.show();
					table.empty();
					table.append("<option>");

					socket.emit('set_scname_table', $(this).find(
							"option:selected").text());
					socket.on('tabname', function(data) {
						$.each(data.table, function(i) {
							table.append("<option value='"+data.table[i]+"'>"
									+ data.table[i] + "</option>");
						});
						socket.removeListener('tabname');
					});
				}

			});

	$("#column").on(
			"click",
			".f_table",
			function() {

				reftable = $(this).find("option:selected").val();
				$(this).parent().find(".f_key").next().val(reftable);

				var trInd = $(this).parent().parent().index();

				if ($(this).find("option:selected").index() > 0) {
					var column = $("#column tr").eq(trInd).find(".f_column")
							.show();
					column.empty();
					column.append("<option>");

					socket.emit('set_tabname_col', {
						tabname : $(this).find("option:selected").text(),
						scname : $(this).prev().find("option:selected").text()
					});
					socket.on('colname', function(data) {
						$.each(data.column, function(i) {
							column.append("<option value='"+data.column[i]+"'>"
									+ data.column[i] + "</option>");
						});
						socket.removeListener('colname');
					});
				}

			});
	$("#column")
			.on(
					"click",
					".f_column",
					function() {
						var $this = $(this);
						if($this.find("option:selected").index()>0){
								var tr = $this.parent().parent().index();
								
								var dataType = $this.parent().parent().find(".type")
										.find("option:selected"); //to match & compare datatype
								var i = $this.find("option:selected").index();
								var $f_key = $this.parent().find(".f_key").next(); //f_key input value to change
		
								if (dataType.index() == 0){
									alert("Please select type");
									$this.find("option:eq(0)").prop('selected', true);	
								}
		
								if (dataType.index() > 0 && i > 0) {
									reftable = $this.parent().find(".f_table").find('option:selected').val();
									refcolumn = $this.find("option:selected").val();
		
									var emit = socket.emit('f_check', {
										schema : refschema,
										table : reftable,
										column : refcolumn,
										typeInd : dataType.index()
									});
									
									//console.log(emit);
									
									socket.once('f_checked', function(data) {
										var isunique = data.isunique;
										var sameType = data.sameType;
										if(!isunique){
											alert("There is no unique constraint matching '"+refcolumn+"' for referenced table '"
													+ reftable + "'");
											$this.find("option:eq(0)").prop('selected', true);
										}else if(isunique && !sameType){
											alert(refcolumn
													+ "'s dataType and "+dataType.val()+" are incompatible types.");
											$this.find("option:eq(0)").prop('selected', true);	
										}else{
											$f_key.val(reftable + " ("
													+ refcolumn + ")");
											console.log("foreign key added");
										}
									});
								}
						}
					});
	


	var trLth;

	$("#submitBtn").click(function(e) {
		e.preventDefault();
		console.log($("#tableForm").serializeArray());
		validCheck();

	});
	$(".add").click(function(e) {
		e.preventDefault();
		appendColumn();
	});

	var namePattern = /^[a-zA-Z_][a-zA-Z_\d]+$/;
	var onePattern = /^[a-zA-Z_]+$/;//한글자일 경우

	var colPattern = /^[a-zA-Z_\d]+$/;
	var lengthPattern = /^[\d]+$/;
	var commentPattern = /^[a-zA-Z_\d\s\''\.]+$/;//	숫자 = \d 홑따옴표 = \'' 공백= \s 마침표 = \.

	function notValid(notValid) {
		notValid.css("border", "2px solid red").addClass("notValid");
	}

	function validCheck() {
		$(".notValid").removeClass("notValid").css({
			"border" : "1px solid #aaa"
		});//temp default border

		var $columnTr = $("#column tr");
		var index = $("#column tr").length - 1;
		var $schema = $("#schema");
		var $name = $("#name");

		if ($schema.children("option:selected").index() ==0)
			notValid($schema);
		if (!namePattern.test($name.val()) && !onePattern.test($name.val()))
			notValid($name);

		for (var i = 1; i <= index; i++) {
			var $column = $columnTr.eq(i).find(".column_input")
			var $type = $columnTr.eq(i).find(".type")
			var $length = $columnTr.eq(i).find(".length")
			var $constraint = $columnTr.eq(i).find(".constraint.checkbox")
			var $fkey = $columnTr.eq(i).find(".f_key.checkbox")
			var $def = $columnTr.eq(i).find(".default")
			var $columnComment = $columnTr.eq(i).find(".comment")
			//var $check = $columnTr.eq(i).find(".check")
			
			if (!colPattern.test($column.val()))
				notValid($column);
			if ($type.children("option:selected").index() == 0)
				notValid($type);
			if (!lengthPattern.test($length.val()) && !$length.prop('disabled'))
				notValid($length);
			if ($constraint.is(':checked')
					&& !colPattern.test($constraint.next().next().val()))
				notValid($constraint.next().next()) //constraint_name
			if ($fkey.is(':checked') && $fkey.siblings(".f.f_column").find('option:selected').index()==0) notValid($fkey.siblings('.f.f_column'))
			if (!commentPattern.test($def.val()) && !$def.val() == '')
				notValid($def);
			if (!commentPattern.test($columnComment.val())
					&& !$columnComment.val() == '')
				notValid($columnComment);
			//if (!commentPattern.test($check.val()) && !$check.val() == '')
			//	notValid($check);

		}

		var $comment = $("#comment");
		if (!commentPattern.test($comment.val()) && !$comment.val() == '')
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

		//유효성 검사 - 통과하는 걸 어떻게 검사?1) notValid 클래스가 있는지 확인(실패)

	}

	$("#column").on("click", ".remove", function(e) {//첫번째 컬럼 줄에는 remove가 없어야 함.
		e.preventDefault();
		$(this).parent().parent().remove();
		trLth = $("#column tr").length - 1;

		for (var i = 1; i <= trLth; i++) {

			$(".col_no").eq(i - 1).text(i + ". ");

		}
		//console.log(trLth);
	});

	$("#column").on("click", "select.type", function() {
		
		var lengthParent = $(this).parent().next();
		var length = lengthParent.children(".length");
		var typeInd = $(this).children("option:selected").index();
		//console.log(typeInd);
		if (typeInd >= 30 && typeInd < type.length) {//length로 전송(numeric 외 length가 필요한 경우.)
			length.eq(0).prop("disabled", false).css("width", 100);
			length.eq(1).prop({
				"type" : "hidden",
				"disabled" : true
			});

		} else if (typeInd == type.length) {//numeric
			lengthParent.width(104);
			length.prop({
				"type" : "text",
				"disabled" : false
			}).css("width", "48px");
			length.eq(0).css("float", "left");
			length.eq(1).css("float", "right");

		} else {//length 필요 없는 경우 - length2전송
			length.eq(0).prop({
				"disabled" : true,
				"value" : ""
			}).css("width", 100);
			length.eq(1).prop({
				"type" : "hidden",
				"disabled" : false
			});
			if (typeInd == 1 && typeInd == 23) {
				lengthParent.prev().find(".array").prop("disabled", true);
			}
		}

		$(this).next().children('option:first').prop('selected', true);
	});

	$("#tableForm").on(
			"click",
			"select.array",
			function() {
				var length = $(this).parent().next().children(".length");
				var typeInd = $(this).prev().children("option:selected")
						.index();
				if ($(this).children('option:selected').val() == '[]') {
					length.eq(0).prop("disabled", true).css("width", 100);
					length.eq(1).prop("type", "hidden");
				} else if (typeInd >= 30 && typeInd < type.length
						&& $(this).children('option:selected').val() == '') {
					length.eq(0).prop("disabled", false).css("width", 100);
					length.eq(1).prop("type", "hidden");
				} else if (typeInd == type.length
						&& $(this).children('option:selected').val() == '') {
					length.parent().width(104);
					length.prop({
						"type" : "text",
						"disabled" : false
					}).css("width", "48px");
					length.eq(0).css("float", "left");
					length.eq(1).css("float", "right");
				}
			});
