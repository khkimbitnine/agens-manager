				exports.username = function(socket, client, username){
					
					client.query("SELECT proname " +
											 "FROM pg_proc, (SELECT usesysid " +
											 								"FROM pg_user " +
											 								"WHERE usename='"+username+"') u " +
											 "WHERE proowner = u.usesysid OR prorettype = 2279 " +
											 "ORDER BY proname", function(err, rs){
						
						if(err){
							
							console.log(err);
							
						}
						
							var proname = [];
							
							for(var i = 0 ; i < rs.rows.length ; i++){
								
								proname.push(rs.rows[i].proname);
								
							}
							
							socket.emit('trigger_function', proname);
							
					});
				}
				
				exports.create_trigger = function(socket, client, formdata){
				
					var error;
					
					console.log(formdata);
					
					var name = formdata[0].value;
					var when = formdata[1].value;
					var schema = formdata[2].value;
					var table = formdata[3].value;
					var event = formdata[4].value;
					var for_each = formdata[5].value;
					var func = formdata[6].value;
					var arguments = "("+formdata[7].value+")";
					
					var createTrigger = "CREATE TRIGGER "+name+" "+when+" "+event+" ON "+schema+"."+table+" FOR EACH "+for_each+" EXECUTE PROCEDURE "+func+arguments+";";
					
					console.log(createTrigger);
					
					client.query(createTrigger, function(err, rs){
						
						if(err){
							
							error = err.toString();
							
						}else{
							
							console.log("Trigger created");
							
						}
						
						socket.emit('trigger_success', error);
						
					});
				}