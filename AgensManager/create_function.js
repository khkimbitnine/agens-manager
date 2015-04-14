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
	
	socket.on('schema', function(schema){
		types = [];
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
	});
	
	socket.on('function_form', function(formdata){
		
		var error;
		
		var interval = 4; 
		//argmode, argname, argschema, argtype
		var endInd = formdata.length - 1;
		
		
		var language = formdata[0].value;
		var name = formdata[1].value;
		var schema = formdata[2].value;
		var type = formdata[3].value;
		var lang_kind = formdata[4].value;
		
		var definition = formdata[endInd-6].value;
		var comment = formdata[endInd-5].value;
		var execution_cost = formdata[endInd-4].value;
		var result_rows = formdata[endInd-3].value;
		var behavior = formdata[endInd-2].value;
		var strict = formdata[endInd-1].value;
		var security = formdata[endInd].value;
		
		var arg = [];
		
		for(var i = 5 ; i < endInd-6; i++){
			arg[i-5] = formdata[i].value;
		}
		
		var eachArg = [];
		createFunction = "CREATE FUNCTION "+name+"(";
		
		for(var i = 0 ; i <(arg.length)/interval ; i++){
			var argRow;
			var argMode;
			var argName;
			var argSchema;
			var argType;
		}
		
		
		
	});
}