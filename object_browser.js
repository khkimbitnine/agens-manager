				exports.set_scname_table = function(socket, client, scname){
					
						//get table list
						client.query("SELECT DISTINCT(table_name)" +
												" FROM information_schema.tables" +
												" WHERE table_schema = '"+scname+"'"+
												" AND table_type = \'BASE TABLE\'" +
												" ORDER BY table_name ASC;", function(err, trs){
							
							if(err){
								
								console.log("set_scname_table err: "+err)
								
							}
							
							var arrTab = [];
							
							for(var k=0; k < trs.rows.length; k++){
								
								arrTab.push(trs.rows[k].table_name);
								
							}
							
							socket.emit('tabname', {table: arrTab});
							
						});
						
				}
				exports.set_scname_view = function(socket, client, scname){
					
					client.query("SELECT DISTINCT(table_name) " +
											 "FROM information_schema.views " +
											 "WHERE table_schema = '"+scname+"' " +
											 "ORDER BY table_name ASC;", function(err, vrs){
						
						if(err){
							
							console.log("set_scname_view err: "+err);
							
						}
						
							var arrView = [];
							
							for(var k=0; k < vrs.rows.length; k++){
								
								arrView.push(vrs.rows[k].table_name);
								
							}
							
							socket.emit('viewname', {view: arrView});
							
					});
					
				}
				exports.set_scname_func = function(socket, client, scname){
					
					//get function list
					client.query("SELECT proname " +
											 "FROM pg_proc INNER JOIN pg_namespace ns ON (pg_proc.pronamespace = ns.oid) " +
											 "WHERE ns.nspname = '"+scname+"' "+
											 "ORDER BY proname;", function(err, frs){
						
						if(err){
							
							console.log("set_scname_func err: "+err)
							
						}
						
							var arrFunc = [];
							
							for(var k=0; k < frs.rows.length; k++){
								
								arrFunc.push(frs.rows[k].proname);
								
							}
							
							socket.emit('funcname', {func: arrFunc});
							
					});
					
				}
				exports.set_tabname_col = function(socket, client, data){
					
					//get column list
					client.query("SELECT column_name " +
											 "FROM information_schema.columns " +
											 "WHERE table_schema='"+data.scname+"' AND table_name ='"+data.tabname+"' " +
											 "ORDER BY column_name;", function(err, crs){
						
						if(err){
							
							console.log('set_tabname_col err: '+err)
							
						}
						
						var arrCol = [];
						
						for(var l=0; l < crs.rows.length; l++){
							
							arrCol.push(crs.rows[l].column_name);
							
						}
						
						socket.emit('colname', {column: arrCol});
						
					});
					
				}
				exports.set_tabname_cons = function(socket, client, data){
					
					//get constraint list
					client.query("SELECT constraint_name " +
											 "FROM information_schema.constraint_column_usage " +
											 "WHERE table_schema='"+data.scname+"' "+
											 "AND table_name='"+data.tabname+"' " +
											 "ORDER BY constraint_name;", function(err, consrs){
						
						if(err){
							
							console.log('set_tabname_cons err: '+err)
							
						}
						
							var arrCons = [];
							
							for(var l=0; l < consrs.rows.length; l++){
								
								arrCons.push(consrs.rows[l].constraint_name);
								
							}
							
							socket.emit('consname', {constraint: arrCons});
							
					});
					
				}
				exports.set_tabname_ind = function(socket, client, data){
					
					//get index list
					client.query("SELECT relname " +
											 "FROM pg_class c, pg_index i, (SELECT distinct(relfilenode) " +
											 															 "FROM pg_class, (SELECT oid " +
											 															 								 "FROM pg_namespace " +
											 															 								 "WHERE nspname = '"+data.scname+"') s " +
																		 								 "WHERE relname = '"+data.tabname+"' "+
																		 								 "AND relnamespace = s.oid) t " +
											 "WHERE c.relkind = \'i\' " +
											 "AND i.indexrelid = c.oid " +
											 "AND i.indrelid = t.relfilenode " +
											 "AND c.oid NOT IN (SELECT conindid "+ 
											 									 "FROM pg_constraint);", function(err, irs){
						
						if(err){
							
							console.log("set_tabname_ind err: "+err)
							
						}
						
							var arrInd = [];
							
							for(var l=0; l < irs.rows.length; l++){
								
								arrInd.push(irs.rows[l].relname);
								
							}
							
							socket.emit('indname', {index: arrInd});
							
					});
					
				}
				query = "SELECT schema_name, schema_owner, description"+
							 " FROM pg_description, (SELECT oid, schema_name, schema_owner"+
																		 " FROM pg_namespace, (SELECT schema_name, schema_owner"+
																												 " FROM information_schema.schemata"+
																												 " WHERE schema_name NOT LIKE 'pg_%' " +
																												 " AND schema_name <> 'information_schema') s"+
																	   " WHERE nspname = s.schema_name) o"+
							 " WHERE objoid = o.oid";
				
				exports.set_dbname_schema = function(socket, client, data){
					
					client.query(query, function(err, rs){
						
						if(err){
							
							console.log('set_dbname_schema err: '+err)
							
						}
						
						var arrScProperty = [];
						
						for(var i = 0 ; i < rs.rows.length ; i++){
							
							arrScProperty.push(rs.rows[i]);
							
						}
						
						socket.emit('get_dbname_schema', JSON.stringify(arrScProperty));
						
					});
				}
				
				exports.set_schema_table = function(socket, client, scname){
					
					client.query("SELECT tablename AS table, tableowner AS owner, tablespace, n_live_tup AS row, obj_description(oid, tablename) AS comment"+
											" FROM pg_tables t, pg_stat_user_tables p, pg_class c"+
											" WHERE t.tablename = p.relname"+
											" AND c.relname = p.relname"+
											" AND t.schemaname = '"+scname+"'", function(err, rs){
						
						if(err){
							
							console.log("set_schema_table err: "+err);
							
						}
						
						var arr = [];
						
						for(var k=0; k < rs.rows.length; k++){
							
								arr.push(rs.rows[k]);
							
						}
						
						socket.emit('get_schema_table', JSON.stringify(arr));
						console.log(JSON.stringify(arr))
					});
			}
				
				exports.set_schema_view = function(socket, client, scname){
					
					client.query("SELECT viewname AS view, viewowner AS owner, obj_description(oid, viewname) AS comment"+
											" FROM pg_catalog.pg_views p, pg_class c"+ 
											" WHERE c.relname = p.viewname" +
											" AND schemaname='"+scname+"'", function(err, rs){
						
						if(err){
							
							console.log("set_schema_view err: "+err);
						}
						
						var arr = [];
						
						for(var i = 0 ; i < rs.rows.length ; i++){
							
							arr.push(rs.rows[i]);
						}
						
						socket.emit('get_schema_view', JSON.stringify(arr));
					
					});
					
					
				}
			