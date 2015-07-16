				exports.create_view = function(socket, client, data){
					
						var query;
				
						var name = data[0].value;
						var schema = data[1].value;
						var query = data[2].value;
						var comment = data[3].value;
						
						query = 'CREATE VIEW '+schema+'.'+name+' AS '+query+";";
						
						if(comment){
							query += "COMMENT ON VIEW "+name+" IS '"+comment+"';";
						}
						
						console.log(query);
						
						client.query(query, function(err, rs){
							
							var error;
							
							if(err){
								
								error = err.toString();
								
							}else{
								
								console.log("View created.");
								
							}
							
							socket.emit('view_success', error);
							
						});
				
				}
				
				exports.alter_view = function(socket, client, formdata){
					
					// To check if input values are different, there are old values hidden
					var oldName = formdata[0].value;
					var name = formdata[1].value;
					var oldQuery = formdata[2].value;
					var query = formdata[3].value;
					var oldCmt = formdata[4].value;
					var comment = formdata[5].value;
					
					var nameQ = "";
					var queryQ = "";
					var commentQ = "";
					
					if(oldName !== name){
						nameQ = "ALTER VIEW "+oldName+" RENAME TO "+name+";"
					}
					
					if(oldQuery !== query){
						queryQ = "CREATE OR REPLACE VIEW "+name+" AS "+query+";";
					}
					
					if(oldCmt !== comment){
						commentQ = "COMMENT ON VIEW "+name+" IS '"+comment+"';";
					}
					
					var query = nameQ + queryQ + commentQ;
					
					console.log(query)
					client.query(query, function(err, rs){
						
						var error;
						
						if(err){
							
							error = err.toString();
							
						}else{
							
							console.log("View altered.");
						}
						
						socket.emit('view_success', error);
					});
				}
				
				exports.drop_view = function(socket, client, scv){
					console.log("DROP VIEW \""+scv.schema+"\"."+scv.view+";")
					client.query("DROP VIEW \""+scv.schema+"\"."+scv.view+";", function(err, rs){
						
						var error;
						if(err){
							
							error = err.toString();
						}else{
							
							console.log("View dropped.");
							
						}
						socket.emit('view_success', error);
					});
					
				}