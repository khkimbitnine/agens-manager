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