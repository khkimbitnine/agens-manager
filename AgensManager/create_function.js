exports.create_function = function(socket, client, done){
	var schemas = [];
	var types = [];
	client.query("select schema_name from information_schema.schemata order by 1", function(err, rs){
		if(err){
			console.log(err)
		}else{
			for(var i = 0 ; i < rs.rows.length ; i++){
				schemas.push(rs.rows[i].schema_name);
			}
		}
		socket.emit('schemas', schemas);
//		done();
	});
	
	socket.on('schema', function(schema){
		types = [];
		var query = "";
		if(schema.length == 0) {
			query = "select typname as t from pg_type, (select oid from pg_namespace where nspname = 'pg_catalog') n where typnamespace = n.oid and typtype <> 'c'";
		}else{
			query = "select table_name as t from information_schema.tables where table_schema = '"+schema+"' order by 1";
		}
		
		client.query(query, function(err, rs){
			if(err){
				console.log(err)
			}else{
				for(var i = 0 ; i < rs.rows.length ; i++){
					if(rs.rows[i].t){
						types.push(rs.rows[i].t);
					}
				}
			}
			socket.emit('types', types);
//			done();
		});
	});
	
	socket.on('function_form', function(formdata){
		//console.log(formdata);
		var error;
		
		var interval = 4; 
		//argmode, argname, argschema, argtype
		var endInd = formdata.length - 1;
		
		var name = formdata[0].value;
		var setof = formdata[1].value;
		var type;
		if(formdata[2].value.length == 0){
			type = formdata[3].value; 
		}else{
			type = formdata[2].value+"."+formdata[3].value;
		}
		var array = formdata[4].value;
		var language = formdata[5].value;
		
		var definition = formdata[endInd-6].value;
		var comment = formdata[endInd-5].value;
		var execution_cost = formdata[endInd-4].value;
		var result_rows = formdata[endInd-3].value;
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
			var argSchema = "";
			var argType = "";
			
			var argRow = [];
			var k = 0;
			for(var j = (interval*i) ; j < interval*(i+1) ; j++){
				argRow[k++] = arg[j];
			}
			argMode = argRow[0];
			argName = argRow[1];
			argSchema = argRow[2];
			argType = argRow[3];
			
			if(i < (arg.length)/interval - 1){
				functionName += argMode+" "+argName+" "+argSchema+"."+argType+", "
			}else{
				functionName += argMode+" "+argName+" "+argSchema+"."+argType+")"
			}
		}
		//rows not applicable when function doesn't return a set
		if(result_rows.length !== 0){
			result_rows = " ROWS "+result_rows;
		}
		
		createFunction += functionName;
		createFunction += " RETURNS "+setof+" "+type+array
		+" AS $$"+definition+"$$ LANGUAGE "+language+" "+behavior+" "+strict+" "+security+" COST "+execution_cost+result_rows+";"
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
		
	});
}