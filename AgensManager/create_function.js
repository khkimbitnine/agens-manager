exports.create_function = function(socket, client){
	var schemas = [];
	var types = [];
	client.query("select schema_name from information_schema.schemata", function(err, rs){
		if(err){
			console.log(err)
		}else{
			for(var i = 0 ; i < rs.rows.length ; i++){
				schemas.push(rs.rows[i].schema_name);
			}
		}
		socket.emit('schemas', schemas);
	});
	
	socket.once('schema', function(schema){
		var query;
		if(schema =='pg_toast'){
			query = "select typname from pg_type where typname like '%pg_toast%'"
		}else{
			query = "select typname from (select oid from (select tablename from pg_tables where schemaname = '"+schema+"') tn, pg_class p where p.relname = tn.tablename) c, pg_type where c.oid = typrelid"
		}
		
		client.query(query, function(err, rs){
			if(err){
				console.log(err)
			}else{
				for(var i = 0 ; i < rs.rows.length ; i++){
					if(rs.rows[i].typname){
						types.push(rs.rows[i].typname);
					}
				}
				socket.emit('types', types);
			}
		});
	})
}