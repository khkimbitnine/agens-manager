				exports.schema = function(socket, client, schema){
					
					var query = "";
					
					if(schema == "Basic datatype") {
						
						query = "SELECT typname as t " +
										"FROM pg_type, (SELECT oid " +
																	 "FROM pg_namespace " +
																	 "WHERE nspname = 'pg_catalog') n " +
									  "WHERE typnamespace = n.oid AND typtype <> 'c'";
						
					}else{
						
						query = "SELECT table_name as t " +
										"FROM information_schema.tables " +
										"WHERE table_schema = '"+schema+"' ORDER BY 1";
						
					}
					
					client.query(query, function(err, rs){
						
						if(err){
							
							console.log("schema error: "+err);
							
						}
							var types = [];
							
							for(var i = 0 ; i < rs.rows.length ; i++){
								
								if(rs.rows[i].t){
									
									types.push(rs.rows[i].t);
									
								}
								
							}
							socket.emit('types', types);
					});
				}
				
				exports.create_proc = function(socket, client, formdata){
					
						var error;
						
						var interval = 5; 
						//argmode, argname, argschema, argtype, argarray
						var endInd = formdata.length - 1;
						
						var scname = formdata[0].value;
						var name = formdata[1].value;
						var setof = formdata[2].value;
						
						if(setof == 0){
							
							setof = '';
							
						}else{
							
							setof = 'SET OF';
							
						}
						
						var type = '';
						var array = formdata[5].value;
						
						if(array== 1){
							
							array = '[]';
							
						}else{
							
							array = '';
							
						}
						
						if(formdata[3].value == "0"){
							
							type = " RETURNS "+setof+" "+formdata[4].value; 
							
						}
						
						if(formdata[3].value !== "0"){
							
							type = " RETURNS "+setof+" "+formdata[3].value+"."+formdata[4].value;
							
						}
						
						var language = formdata[6].value;
						
						var definition = formdata[endInd-6].value;
						var comment = formdata[endInd-5].value;
						var execution_cost = formdata[endInd-4].value;
						
						if(execution_cost){
							
							execution_cost = " COST "+execution_cost;
							
						}
						
						var result_rows = formdata[endInd-3].value;
						
						if(result_rows){
							
							result_rows = " ROWS "+result_rows;
							
						}
						
						var behavior = formdata[endInd-2].value;
						var strict = formdata[endInd-1].value;
						var security = formdata[endInd].value;
						
						
						var arg = [];
						
						for(var i = 7 ; i < endInd-6; i++){
							
							arg[i-7] = formdata[i].value;
							
							
						}
						
						var createFunction = "CREATE FUNCTION ";
						
						var functionName;
						
						if(scname){
							
							functionName = scname+"."+name+"(";
							
						}else{
							
							functionName = name+"(";
						}
						
						for(var i = 0 ; i <(arg.length)/interval ; i++){
							
							var argMode = "";
							var argName = "";
							var argType = "";
							var argArray = "";
							
							var argRow = [];
							var k = 0;
							
							for(var j = (interval*i) ; j < interval*(i+1) ; j++){
								
								argRow[k++] = arg[j];
								
							}
							
							var arg;
							
							argMode = argRow[0];
							argName = argRow[1];
							argType = argRow[3];
							argArray = argRow[4];
							if(argType.length){
								
								functionName += argMode+" ";
								
								if(argRow[2] !== '0'){//Basic datatype
									
									argType = argRow[2]+"."+argType;
									
								}
								
							}
							
							if(argArray == 1){
								
								argArray = '[]';
								
							}else{
								
								argArray = '';
								
							}
							
							if(i < (arg.length)/interval - 1){
								
								if(argName.length){
									
									functionName += argName+" "+argType+argArray+", ";
									
								}else{
									
									functionName += argType+argArray+", ";
									
								}  
								
							}else{
								
								if(argName.length){
									
									functionName += argName+" "+argType+argArray+")";
									
								}else{
									
									functionName += argType+argArray+")";
									
								}  			
							}
						}
						
						//rows not applicable when function doesn't return a set
						if(result_rows){
							result_rows = " ROWS "+result_rows;
						}
						
						createFunction += functionName;
						
						createFunction += type+array+" AS $$"+
															definition+"$$ LANGUAGE "+
															language+" "+behavior+" "+
															strict+" "+security+
															execution_cost+
															result_rows+";";
						
						createFunction += "COMMENT ON FUNCTION "+functionName+" IS '"+comment+"';"
						
						console.log("createFunction: "+createFunction);
						
						client.query(createFunction, function(err, rs){
							
							if(err){
								
								error = err.toString();
								
							}else{
								
								console.log("Function created");
								
							}
							
							socket.emit('function_success', error);
							
						});
						
				}

				exports.alter_proc = function(socket, client, formdata){
					
					var o_scname = formdata[0].value;
					var scname = formdata[1].value;
					var o_name = formdata[2].value;
					var name = formdata[3].value;
					var arg = formdata[4].value;
					var ret = formdata[5].value;
					var lang = formdata[6].value;
					var o_def = formdata[7].value;
					var def = formdata[8].value;
					var o_cmt = formdata[9].value;
					var cmt = formdata[10].value;
					var o_cost = formdata[11].value;
					var cost = formdata[12].value;
					var o_rows = formdata[13].value;
					var rows = formdata[14].value;
					var o_behav = formdata[15].value;
					var behav = formdata[16].value;
					var o_strict = formdata[17].value;
					var strict = formdata[18].value;
					var o_sec = formdata[19].value;
					var sec = formdata[19].value;
					
					var scQ = "";
					var nameQ = "";
					var defQ = "";
					var cmtQ = "";
					var costQ = "";
					var rowsQ = "";
					var behavQ = "";
					var strictQ = "";
					var secQ = "";
					
					var procName = o_scname+"."+name+"("+arg+")";
					
					if(o_name !== name){
						nameQ = "ALTER FUNCTION "+o_scname+"."+o_name+"("+arg+")"+" RENAME TO "+name+";";
					}
					
					if(o_scname !== scname){
						scQ = "ALTER FUNCTION "+procName+" SET SCHEMA "+scname+";";
					}
					
					if(o_def !== def){
						defQ = "CREATE OR REPLACE FUNCTION "+procName+" RETURNS "+ret+" LANGUAGE "+lang+" AS $$"+def+"$$;";
					}
					
					if(o_cmt !== cmt){
						cmtQ = "COMMENT ON FUNCTION "+procName+" IS '"+cmt+"';";
					}
					
					if(o_cost !== cost){
						costQ = "ALTER FUNCTION "+procName+" COST "+cost+";";
					}
					
					if(o_rows !== rows){
						rowsQ = "ALTER FUNCTION "+procName+" ROWS "+rows+";";
					}
					
					if(o_behav !== behav){
						behavQ = "ALTER FUNCTION "+procName+" "+behav+";";
					}
					
					if(o_strict !== strict){
						strictQ = "ALTER FUNCTION "+procName+" "+strict+";";
					}
					
					if(o_sec !== sec){
						secQ = "ALTER FUNCTION "+procName+" "+sec+";";
					}
					
					var query = nameQ + scQ + defQ + cmtQ + costQ + rowsQ + behavQ + strictQ + secQ;
					
					console.log(query)
					client.query(query, function(err, rs){
						
						var error;
						
						if(err){
							 
							error = err.toString();
							
						}else{
							
							console.log("Function altered.");
						}
						
						socket.emit('function_success', error);
					});
				}
				
				exports.drop_proc = function(socket, client, sctb){
					
					console.log("DROP FUNCTION \""+sctb.schema+"\"."+sctb.table+";");
					
					client.query("DROP FUNCTION \""+sctb.schema+"\"."+sctb.table+";", function(err, rs){
						
						var error;
						if(err){
							
							error = err.toString();
						}else{
							
							console.log("Table dropped.");
							
						}
						socket.emit('table_success', error);
					});
					
				}
				