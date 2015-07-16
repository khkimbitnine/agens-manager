				exports.create_schema = function(socket, client, data){
				
							var name = data[0].value;
							var owner = data[1].value;
							var comment = data[2].value;
							var query;
							
							query = "CREATE SCHEMA "+name+" AUTHORIZATION "+owner+";";
							
							if(comment){
								
								query += "COMMENT ON SCHEMA "+name+" IS '"+comment+"';";
								
							}
							
							client.query(query, function(err, rs){
								
								var error;
								
								if(err){
									
									error = err.toString();
									
								}else{
									
									console.log(query);
									
									console.log("Schema created.")
									
								}
								
								socket.emit('schema_success', error);
								
							});
				}
				
				exports.alter_schema = function(socket, client, data){
					var oldName = data[0].value;
					var name = data[1].value;
					
					var oldOwner = data[2].value;
					var owner = data[3].value;
					
					var oldCmt = data[4].value;
					var comment = data[5].value;
					
					var nameQ = ""
					var ownerQ = ""
					var cmtQ = "";
					
					if(oldName !== name){
						
						nameQ = "ALTER SCHEMA "+oldName+" RENAME TO "+name+";";
					}
					
					if(oldOwner !== owner){
						
						ownerQ = "ALTER SCHEMA "+name+" OWNER TO "+owner+";";
					}
					
					if(oldCmt !== comment){
						
						cmtQ = "COMMENT ON TABLE "+name+" IS '"+comment+"';";
					}
					
					var query = nameQ + ownerQ + cmtQ;
					console.log(query);
					client.query(query, function(err, rs){
						
						var error;
						
						if(err){
							
							error = err.toString();
						}else{
							
							console.log("Schema altered.");
						}
						
						socket.emit("schema_success", error);
						
					});
					
				}
				
				exports.drop_schema = function(socket, client, schema){
					
					console.log("DROP SCHEMA "+schema+" CASCADE;")
					client.query("DROP SCHEMA "+schema+" CASCADE;", function(err, rs){
						
						var error;
						if(err){
							
							error = err.toString();
						}else{
							
							console.log("Schema dropped.");
							
						}
						socket.emit('schema_success', error);
					});
					
				}