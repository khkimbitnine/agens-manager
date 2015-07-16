				
				var scname;
				var pattern = /^[a-zA-Z_\d]+$/;
				
				$("#last")
				.addClass('on')
				.prop("src", "/static/images/chkbox_btn.png");
				
				for(var i = 0 ; i < $(".db").length ; i++){
				
					$("#indDatabase").append("<option value='"+$(".db").eq(i).text()+"'>"+ $(".db").eq(i).text()+ "</option>")
				
				}
				
				// Select database
				$("#indDatabase").change(function(){
				
					$("#indSchema, #indTable, #indColumn, #indIndex, #output").empty();
					
					socket.emit('set_dbname', $(this).find('option:selected').val());
					
					socket.once('scname', function(data){
						
						for(var i = 0 ; i < data.schema.length ; i++){
							
							$("#indSchema")
							.append("<option value='"+data.schema[i]+"'>"+data.schema[i]+"</option>");
							
						}
					});
				
				});
				
				// Select schema
				$("#indSchema").change(function(){
				
					$("#indTable, #indColumn, #indIndex, #output").empty();
					
					socket.emit('set_scname_table', $(this).find("option:selected").val());
					
					socket.once('tabname', function(data){
						
						for(var i = 0 ; i < data.table.length ; i++){
							
							$("#indTable")
							.append("<option value='"+
									data.table[i]+"'>"+data.table[i]+"</option>");
							
						}
					});
				});
				
				// Select table
				$("#indTable").change(function(){
				
					$("#indColumn, #indIndex, #output").empty();
					
					socket.emit('set_tabname_col', {tabname: $(this).find('option:selected').val(), 
																					scname: $("#indSchema").find('option:selected').val()});
					
					socket.once('colname', function(data){
						
						for(var i = 0 ; i < data.column.length ; i++){
							
							$("#indColumn")
							.append("<option value='"+
									data.column[i]+"'>"+
									data.column[i]+
									"</option>");
							
						}
					});
				});
				
			// Adds selected column to the index list
				$("#btnBox>button").click(function(e){
				
					e.preventDefault();
					
					var column = $("#indColumn>option:selected");
					
					var col = '';
				
					if(!$(this).index() == 0){ // Add button(index:0)
						
						col = column
						.remove()
						.appendTo("#output")
						.prop('selected', false)
						.text();
				
						if($("#desc").hasClass('on')){
							
							col+=" DESC";
							
						}else{
							
							col+=" ASC";
							
						}
						
						if($("#first").hasClass('on')) {
							
							col+=" NULLS FIRST";
							
						}
						
						if($("#last").hasClass('on')) {
							
							col+=" NULLS LAST";
							
						}
				
						column.text(col).val(col);
				
					}else{ // Remove button(index:1)
						
						var $output = $("#output>option:selected");
						
						var res = $output.text().split(" ");
				
						$output
						.remove()
						.appendTo("#indColumn")
						.prop('selected', false)
						.text(res[0])
						.val(res[0]);
					}
				
				});
				
				$("#createBtn").click(function(e){
				
					e.preventDefault();
					
					var idxVal = $("#indexName").val();
					
					var test = pattern.test(idxVal);
					
					var columns = [];
					
					// if condition
					// 	1. Index name string either should exist and pass regular test OR should not exist at all.
					// 	2. There should be entries existing in the output select box. 
					if(( test || !idxVal) && $("#output").has('option').length){
						
						for(var i = 0 ; i < $("#output>option").length ; i++){
							
							columns[i] = $("#output>option").eq(i).val();
							
						}
				
						var formdata = $("#indexForm").serializeArray();
				
						socket.emit('create_index', {form: formdata, column: columns});
						
						socket.once('index_success', function(error){
							
							if(error == null){
								
								alert("Index created.");
								
							}else{
								
								alert(error);
								
							}
						})
				
					}else if(!test && idxVal){
						
						alert("Index name should be a-z or A-Z or number.");
						
					}else{
						
						alert("Index should be selected.");
						
					}
				
				});
				
				// Checkbox image change
				$("#desc, #unique, #concurrently").click(function() {
				
					var $this = $(this);
				
					if ($this.hasClass('on')) {
				
						$this
						.removeClass('on')
						.prop("src", "/static/images/chkbox_default.png");
				
					} else {
				
						$this
						.addClass('on')
						.prop("src", "/static/images/chkbox_btn.png");
				
					}
				});
				
				// Checkbox image change nulls first, nulls last 
				$(".order").click(function(){
				
					var $this = $(this);
				
					if(!$this.hasClass('on')){
						
						$this.addClass('on');
						
						$this.prop("src", "/static/images/chkbox_btn.png");
						
						$(".order.checkbox")
						.not($this)
						.removeClass('on')
						.prop("src", "/static/images/chkbox_default.png");
						
					}
				});
