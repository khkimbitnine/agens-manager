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
				
				exports.create_function = function(socket, client, formdata){
					
						var error;
						
						var interval = 5; 
						//argmode, argname, argschema, argtype, argarray
						var endInd = formdata.length - 1;
						
						var name = formdata[0].value;
						var setof = formdata[1].value;
						
						if(setof == 0){
							
							setof = '';
							
						}else{
							
							setof = 'SET OF';
							
						}
						
						var type = '';
						var array = formdata[4].value;
						
						if(array== 1){
							
							array = '[]';
							
						}else{
							
							array = '';
							
						}
						
						if(formdata[2].value == "0"){
							
							type = " RETURNS "+setof+" "+formdata[3].value; 
							
						}
						
						if(formdata[2].value !== "0"){
							
							type = " RETURNS "+setof+" "+formdata[2].value+"."+formdata[3].value;
							
						}
						
						var language = formdata[5].value;
						
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
						
						for(var i = 6 ; i < endInd-6; i++){
							
							arg[i-6] = formdata[i].value;
							
							
						}
						
						var createFunction = "CREATE FUNCTION ";
						var functionName = name+"(";
						
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