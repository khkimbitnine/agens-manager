				var head_template=
					'<ul>'
					+ '<li id="row1">'
					+ '<label>NAME</label>'
					+ '<div id="name">'
					+ '<input type="text" name="name" />'
					+ '</div>'
					+ '<label>RETURNS : </label>'
					+ '<div id="returns">'
					+ '<label for="name">Set of</label>'
					+ '<img class="checkbox" id="setof" src="/static/images/chkbox_default.png" />'
					+ '<input type="hidden" name="setof" value="0"/>'
					+ '<div id="typeBox">'
					+ '<select name="schema" class="schema"><option value=""></option></select>'
					+ '<select name="type" class="type"><option value=""></option></select>'
					+ '<span>Array</span>'
					+ '<img class="checkbox" id="array" src="/static/images/chkbox_default.png"/>'
					+ '<input type="hidden" name="array" value="0"/>'
					+ '</div>'
					+ '</div>'
					+ '<label>PROGRAMMING LANGUAGE : </label>'
					+ '</li>';
				+ '</ul>';
				
				var sql_template = 
					'<ul class="temp">'
					+ '<li id="row2"><span>ARGUMENTS:</span>'
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
					+ '<label for="comment">COMMENT</label>'
					+ '<textarea name="comment" id="comment" ></textarea>'
					+ '</li>'
					+ '<li id="row6" >'
					+ '<span>FUNCTION COSTING:</span>'
					+ '<ul>'
					+ '<li>'
					+ '<label for="execution_cost">Execution Cost</label>'
					+ '<input type="text" name="execution_cost" id="execution_cost" />'
					+ '</li>'
					+ '<li>'
					+ '<label for="result_rows">Result Rows</label>'
					+ '<input type="text" name="result_rows" id="result_rows" readonly style="background: #ccc"/>'
					+ '</li>'
					+ '</ul>'
					+ '</li>'
					+ '<li id="row7" >'
					+ '<span>PROPERTIES:</span>'
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
				
				$functionForm
				.children('div')
				.append(head_template);
				
				$functionForm.append(sql_template);
				
				var def = '<label>DEFINITION</label><textarea name="definition" id="definition" ></textarea>';
				
				$(".def").append(def);
				
				var $row1 = $("#row1");
				
				var sql = '<div id="language" class="sql">'+
										'<select name="language">'+
											'<option value="sql">sql</option>'+
											'<option value="plpgsql">plpgsql</option>'+
										'</select>'+
									'</div>';
				
				$row1.append(sql);
				
				$row1.find("#language").css({
																		 "display":"inline-block", 
																		 "width": "100px"
																		});
				
				
				var $row2Ul = $("#row2>ul");
				
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
					+ '<select name="argschema" class="schema"><option></option></select>'
					+ '<select name="argtype" class="type"><option></option></select>'
					+ '<label for="array">Array</label>'
					+ '<img class="checkbox array" id="setof" src="/static/images/chkbox_default.png" />'
					+ '<input type="hidden" name="array" value="0"/>'
					+ '<div class="argbtn">'
					+ '<button class="up">up</button>'
					+ '<button class="down">down</button>'
					+ '<button class="remove">remove</button>'
					+ '</div>'
					+ '</div>';
				
				var schemas = [];
				var types = [];
				
				$("#setof").click(function(){
				
					var $this = $(this);
				
					var $resRows = $("#result_rows");
				
					if(!$this.hasClass('on')){
				
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
				
				$("#dbList").append('<option>Select Database</option>');
				
				for(var i = 0 ; i < $(".db").length ; i++){
				
					$("#dbList").append("<option value='"+$(".db").eq(i).text()+"'>"+ $(".db").eq(i).text()+ "</option>");
				
				}
				
				$("#dbList").change(function(){
				
					$(".schema, .type").empty().append('<option>');
				
					if($(this).find('option:selected').index()){
				
						socket.emit('set_dbname', $(this).find('option:selected').val());
				
						socket.once('schemas', function(schema){
				
							$(".schema").append('<option value="0">Basic datatype</option>');
				
							for(var i = 0 ; i < schema.length ; i++){
				
								$(".schema").append('<option value = "'+schema[i]+'">'+schema[i]+'</option>');
				
							}
				
						});
				
					}
				})
				
				function row2append(){
				
					var $li = $("<li>").appendTo($row2Ul);
				
					$li.append(argmode+argname+argtype);
				
				}
				
				function schemaAppend(argInd){
				
					for(var i = 0 ; i < schemas.length ; i++){
				
						$(".schema").eq(i).append('<option value = "'+schemas[i]+'">'+schemas[i]+'</option>');
				
					}
				
				}
				
				row2append();
				
				$functionForm.on("change", ".schema", function(){
				
					var $this = $(this);
					var schInd = $(".schema").index($this);
					var $option = $this.find("option:selected");
					var optionInd = $option.index();
					var $type = $this.next();
				
					$type.empty().append('<option>');
				
					if(optionInd){
				
						socket.emit('schema', $option.text());
				
						socket.once('types', function(type){
				
							for(var i = 0 ; i < type.length ; i++){
				
								$type.append('<option value = "'+type[i]+'">'+type[i]+'</option>');
				
							}					
						});
				
					}
				});
				
				var $row4 = $functionForm.find("#row4");
				var $row2 = $functionForm.find("#row2");
				var $lang = $row1.find("#language");
				
				var $sqlBtn = $("#langBox").find(".language").eq(0);
				var $internalBtn = $("#langBox").find(".language").eq(1);
				var $cBtn = $("#langBox").find(".language").eq(2);
				
				$sqlBtn.prop('checked', 'checked');
				
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
					
					row2append();
					
					$row4.removeClass("def")
					.empty()
					.append('<label>LINK SYMBOL</label><input type="text" name="link_symbol" id="linkSymbol">')
					.find('input')
					.width('970px');
					
					$lang.empty()
					.removeClass("sql c")
					.addClass("internal")
					.append('<div>'+
										'<span>internal</span>'+
										'<input type="hidden" name="language" value="internal"/>'+
									'</div>');
				
				});
				
				$cBtn.click(function(){//object file, link symbol
				
					$row2
					.children("ul")
					.children("li")
					.remove();
					
					row2append();
					
					$row4
					.removeClass("def")
					.empty()
					.append('<div class="objectFile">'+
										'<label>OBJECT FILE</label>'+
										'<input type="text" name="object_file" id="objectFile">'+
									'</div>'+
									'<div class="objectFile">'+
										'<label>LINK SYMBOL</label>'+
										'<input type="text" name="link_symbol" id="linkSymbol">'+
									'</div>')
					.find('div')
					.css({"width": "480px", 
								"display":"inline-block"})
					.children("input")
					.width("480px");
					$lang
					.empty()
					.removeClass("sql internal")
					.addClass("c")
					.append('<div>'+
										'<span>c</span>'+
										'<input type ="hidden" name="language" value="c" />'+
									'</div>');
				
				});
				
				$(".language").click(function(){
				
					$(".language").not($(this)).prop('checked', false);
					
					$("#dbList").find('option').eq(0).prop('selected', true);
					
					$(".schema, .type").empty();
				
				});
				
				var $add = $("#add");
				
				$add.click(function(e){
					
					e.preventDefault();
				
					if(!$("#dbList").find('option:selected').index()){
				
						alert("Select databse.");
				
					}else{
				
						$("#row2>ul")
						.append("<li>"+$("#row2>ul>li:eq(0)").html()+"</li>")
						.children('li')
						.last()
						.find('.schema>option:eq(0)')
						.prop('selected', true)
						.parent()
						.next()
						.empty();
				
					}
				
				});
				
				var $down = $(".down");
				var $remove = $(".remove");
				
				var namePat = /^[a-zA-Z_][a-zA-Z_\d]+$/;
				var defPat = /^[a-zA-Z_\d\s]+$/;
				var costPat = /^[\d]+$/;
				
				function notValid(notValid) {
					
					notValid
					.css("border", "2px solid red")
					.addClass("notValid");
					
				}
				
				function validCheck(func) {
					
					$(".notValid").removeClass("notValid").css({
						"border" : "1px solid #aaa"
					});
				
					var $name = $("#name").find('input');
					var $typeBox = $("#typeBox");
					var $argName = $(".argname");
					var $argSch = $(".argtype .schema");
					var $argType = $(".argtype .type");
					var $def = $("#definition");
					var $cmt = $("#comment");
					var $exeCst = $("#execution_cost");
					var $resRow = $("#result_rows");
					
					console.log($name.size());
					
					if (!namePat.test($name.val()) || !$name.val()){
						
						notValid($name);
						
					}
				
					$argName.each(function(i){
						
						var $this = $(this);
						
						if(!namePat.test($this.val()) && $this.val()){
							
							notValid($this);
							
						}
					});
				
					$argType.each(function(i){
						
						var $this = $(this);
						
						if(!$this.find('option:selected').index() && $this.prev().find('option:selected').index()){
							
							notValid($this);
							
						}
					});
				
				
					if(!$("#dbList").find('option:selected').index()){
				
						notValid($("#dbList"));
				
					}
				
					if(!$def.val()){
				
						notValid($def);
				
					}
					
					if($("#language").hasClass('internal') || $("#language").hasClass('c')){
						
						var $link = $("#linkSymbol");
						
						if(!defPat.test($link.val()) || !$link.val()){
				
							notValid($link);
				
						}
					}
					
					if($("#language").hasClass('c')){
						
						var $obj = $("#objectFile");
						
						if(!defPat.test($obj.val()) || !$obj.val()){
							
							notValid($obj);
							
						}
					}
				
					if(!defPat.test($cmt.val()) && $cmt.val()){
				
						notValid($cmt);
				
					}
					if(!costPat.test($exeCst.val()) && $exeCst.val()){
				
						notValid($exeCst);
				
					}
				
					if(!costPat.test($resRow.val()) && $resRow.val()){
				
						notValid($resRow);
				
					}
				
					if($typeBox.find('.schema').find('option:selected').index() && !$typeBox.find('.type').find('option:selected').index()){
				
						notValid($typeBox.find('.type'));
						
					}
				
					if (!$(".notValid").size()) {
						
						console.log($("#functionForm").serializeArray());
						
						socket.emit("function_form", $("#functionForm").serializeArray());
						
						socket.once('function_success', function(error){
				
							if(error == null){
				
								alert("Function created.");
				
							}else{
				
								alert(error);
							}
						});
					}
				
				}
				
				$functionForm.on("click", ".up", function(e){
					
					e.preventDefault();
				
					var argInd = $(".up").index($(this));	//Arguments row index
					var $li = $row2Ul.find('li');
				
					if(!argInd){
				
						alert("It is is the 1st row.");
				
					}else{
				
						$li.eq(argInd - 1).insertAfter($li.eq(argInd));
					}
				});
				
				$functionForm.on("click", ".down", function(e){
					
					e.preventDefault();
				
					var argInd = $(".down").index($(this));	
					
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
				
					if(!argInd){
						
						alert("It is the 1st row.");
						
					}else{
						
						$row2Ul.find('li').eq(argInd).remove();
						
					}
				
				});
				
				
				$("#createBtn").click(function(e){
					
					e.preventDefault();
					
					validCheck($("#functionForm").serializeArray());
					
				});
				
				$("#functionForm").on("click", ".checkbox", function() {
				
					var $this = $(this);
					if ($this.hasClass('on')) {
				
						$this.removeClass('on');
						$this.next().val(0);
						$this.prop("src", "/static/images/chkbox_default.png");
				
					} else {
				
						$this.addClass('on');
						$this.next().val(1);
						$this.prop("src", "/static/images/chkbox_btn.png");
				
					}
				});
				
				
