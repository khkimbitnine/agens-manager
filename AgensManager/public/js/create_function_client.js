socket.disconnect();
socket.connect();
	var sql_template = '<ul class="temp">'
	+ '<li id="row1">'
	+ '<span>Name</span>'
	+ '<span>Returns</span>'
	+ '<span>Programming language</span>'
	+ '<div id="name">'
	+ '<input type="text" name="name" />'
	+ '</div>'
	+ '<div id="returns">'
	+ '<label for="name">SET OF</label>'
	+ '<input type="checkbox" id="setof" />'
	+ '<input type="hidden" name="setof" value="" />'
	+ '<div id="typeBox">'
	+ '<select name="schema" class="schema"><option></option><option value ="">Basic datatype</option></select>'
	+ '<select name="type" class="type"><option></option></select>'
	+ '<span>Array</span>'
	+ '<input type="checkbox" id="array" />'
	+ '<input type="hidden" name="array" value=""/>'
	+ '</div>'
	+ '</div>'
	+ '</li><!--'
	+ '--><li id="row2"><span>Arguments</span>'
	+ '<ul>'
	+ '<span>Mode</span>'
	+ '<span>Name</span>'
	+ '<span>Type</span>'
	+ '</ul>'
	+ '</li>'
	+ '<li id="row3" >'
	+ '<button id="add">Add another argument</button>'
	+ '</li>'
	+ '<li id="row4" class="def">'
	+ '</li>'
	+ '<li id="row5" >'
	+ '<label for="comment">Comment</label>'
	+ '<textarea name="comment" id="comment" cols="30" rows="10"></textarea>'
	+ '</li>'
	+ '<li id="row6" >'
	+ '<span>Function Costing</span>'
	+ '<ul>'
	+ '<li>'
	+ '<label for="execution_cost">Execution Cost: </label>'
	+ '<input type="text" name="execution_cost" id="execution_cost" />'
	+ '</li>'
	+ '<li>'
	+ '<label for="result_rows">Result Rows: </label>'
	+ '<input type="text" name="result_rows" id="result_rows" readonly style="background: #ccc"/>'
	+ '</li>'
	+ '</ul>'
	+ '</li>'
	+ '<li id="row7" >'
	+ '<span>Properties</span>'
	+ '<select name="behavior" id="behavior">'
	+ '<option></option>'
	+ '<option value="IMMUTABLE">IMMUTABLE</option>'
	+ '<option value="STABLE">STABLE</option>'
	+ '<option value="VOLATILE">VOLATILE</option>'
	+ '</select>'
	+ '<select name="strict" id="strict">'
	+ '<option></option>'
	+ '<option value="CALLED ON NULL INPUT">CALLED ON NULL INPUT</option>'
	+ '<option value="RETURNS NULL ON NULL INPUT">RETURNS NULL ON NULL INPUT</option>'
	+ '</select>'
	+ '<select name="security" id="security">'
	+ '<option></option>'
	+ '<option value="SECURITY INVOKER">SECURITY INVOKER</option>'
	+ '<option value="SECURITY DEFINER">SECURITY DEFINER</option>'
	+ '</select>'
	+ '</li>'
	+ '</ul>';
 
	var $functionForm = $("#functionForm");
	$functionForm.append(sql_template);
	
	var def = '<label>Definition</label><textarea name="definition" id="definition" cols="30" rows="10"></textarea>';
	$(".def").append(def);
	
	var $row1_3 = $("#row1");
	var sql = '<div id="language" class="sql"><select name="language"><option value="sql">sql</option><option value="plpgsql">plpgsql</option></select></div>';
	$row1_3.append(sql);
	$row1_3.find("#language").css({"display":"inline-block", "width": "19%"});
	
	
	var $row2Ul = $("#row2>ul")
	var argmode = '<div class="argmode">'
		+ '<select name="argmode">'
		+ '<option value="IN">IN</option>'
		+ '<option value="OUT">OUT</option>'
		+ '<option value="INOUT">INOUT</option>'
		+ '</select>'
		+ '</div>';
		
	var argname = '<div class="argname">'
		+ '<input type="text" name="argname" />'
		+ '</div>';
	
	var argtype = '<div class="argtype">'
		+ '<select name="argschema" class="schema"><option></option><option value="">Basic datatype</option></select>'
		+ '<select name="argtype" class="type"><option></option></select>'
		+ '<label for="array">Array</label>'
		+ '<input type="checkbox" name="array" class="array"/>'
		+ '<div class="argbtn">'
		+ '<button class="up">up</button>'
		+ '<button class="down">down</button>'
		+ '<button class="remove">remove</button>'
		+ '</div>'
		+ '</div>';
		
	var schemas = [];
	var types = [];
	
	$("#setof").change(function(){
		var $this = $(this);
		var $resRows = $("#result_rows");
		if($this.is(":checked")){
			$this.next().val("SETOF");
			$resRows.prop('readonly', false).css('background', '#fff');
		}else{
			$this.next().val("");
			$resRows.prop('readonly', true).css('background', '#ccc');
		}
	});
	$("#array").change(function(){
		var $this = $(this);
		if($this.is(':checked')){
			$this.next().val("[]");
		}else{
			$this.next().val("");
		}
	});
	
	function row2append(argInd){
		console.log("row2append")
		var $li = $("<li>").appendTo($row2Ul);
		
		$li.append(argmode+argname+argtype);
		schemaAppend(argInd);
	}
	
	function schemaAppend(argInd){
		var $schema = $(".schema").eq(0);
		if(argInd == 0 && $schema.find('option').length ==2){
			for(var i = 0 ; i < schemas.length ; i++){
				$schema.append('<option value = "'+schemas[i]+'">'+schemas[i]+'</option>');
			}	
		}
		if(argInd > 0  && $(".schema").eq(argInd).find('option').length ==2){
			for(var j = 2 ; j < $schema.find('option').length ; j++){
				$(".schema").eq(argInd).append("<option value = '"+$schema.find('option').eq(j).val()+"'>"+$schema.find('option').eq(j).val()+"</option>");
			}			
		}

	}
	
	socket.once('schemas', function(schema){
		if(schemas.length ==0){
			for(var i = 0 ; i < schema.length ; i++){
				schemas[i] = schema[i];
			}
		}
		schemaAppend(0);
		row2append(1);
	});	
	
	
	var $sqlBtn = $("#langBox").find(".language").eq(0);
	var $internalBtn = $("#langBox").find(".language").eq(1);
	var $cBtn = $("#langBox").find(".language").eq(2);
	
	$sqlBtn.prop('checked', 'checked');
	
	
	var prevOpt = 0;
	var prevSch = -1;
	
	$functionForm.on("click", ".schema", function(){
		var $this = $(this);
		var schInd = $(".schema").index($this);
		console.log("schInd: "+schInd);
		var $option = $this.find("option:selected");
		var optionInd = $option.index();
		var $type = $this.next();
		$type.empty();

		if(optionInd !== 0 || schInd !== prevSch){
			prevOpt = optionInd;
			prevSch = schInd;
			socket.emit('schema', $option.text());
			socket.once('types', function(type){
					for(var i = 0 ; i < type.length ; i++){
						$type.append('<option value = "'+type[i]+'">'+type[i]+'</option>');
					}					
			});					
		}
	});

	var $row4 = $functionForm.find("#row4");
	var $lang = $row1_3.find("#language");
	var $row2 = $functionForm.find("#row2");
	var $row1 = $functionForm.find("#row1");
	
	$sqlBtn.click(function(){
		if(!$row4.hasClass("def")){
			$row4.addClass("def").empty().append(def);
		}
		if(!$lang.hasClass("sql")){
			$lang.empty().removeClass("internal c").addClass("sql").append(sql);
		}
	});
	$internalBtn.click(function(){//link symbol
		$row2.children("ul").children("li").remove();
		row2append(1);
		$row4.removeClass("def").empty().append('<label>Link Symbol</label><input type="text" name="link_symbol" id="linkSymbol">').find("#linkSymbol").width("100%");//definition
		$lang.empty().removeClass("sql c").addClass("internal").append('<div><span>internal</span><input type="hidden" name="language" value="internal"/></div>');
		
	});
	$cBtn.click(function(){//object file, link symbol
		$row2.children("ul").children("li").remove();
		row2append(1);
		$row4.removeClass("def").empty().append('<div id="objectFile"><label>Object File</label><input type="text" name="object_file"></div><div id="objectFile"><label>Link Symbol</label><input type="text" name="link_symbol" id="linkSymbol"></div>').find('div').css({"width": "50%", "display":"inline-block"}).children("input").width("100%");//definition
		$lang.empty().removeClass("sql internal").addClass("c").append('<div><span>c</span><input type ="hidden" name="language" value="c" /></div>');
	});
	
	$(".language").click(function(){
		$(".language").not($(this)).prop('checked', false);
	});
	
	var $add = $("#add");
	
	$add.click(function(e){
		e.preventDefault();
		var argInd = $(".argmode").length + 1; //second argument
		row2append(argInd);
	});
	
	var $down = $(".down");//below index exchange
	var $remove = $(".remove");
	
	$functionForm.on("click", ".up", function(e){// above index exchange
		e.preventDefault();
		var argInd = $(".up").index($(this));	//Arguments row index
		var $li = $row2Ul.find('li');
		
		if(argInd == 0){
			alert("It is is the 1st row.");
		}else{
			$li.eq(argInd - 1).insertAfter($li.eq(argInd));
		}
	});
	$functionForm.on("click", ".down", function(e){// below index exchange
		e.preventDefault();
		var argInd = $(".down").index($(this));	//Arguments row index
		var lastInd = $(".down").length - 1;
		
		var $li = $row2Ul.find('li');
		
		if(argInd == lastInd){
			alert("It is is the last row.");
		}else{
			$li.eq(argInd + 1).after($li.eq(argInd));
		}
	});
	$functionForm.on("click", ".remove", function(e){
		e.preventDefault();
		var argInd = $(".remove").index($(this));

		if(argInd == 0){
			alert("It is the 1st row.")
		}else{
			$row2Ul.find('li').eq(argInd).remove();
		}
	});
	
	$("#createBtn").click(function(e){
		e.preventDefault();
		//console.log($("#functionForm").serializeArray());
		socket.emit("function_form", $("#functionForm").serializeArray());
		socket.once('function_success', function(error){
			if(error == null){
				alert("Function created.");
			}else{
				alert(error);
			}
		});
	});
	
