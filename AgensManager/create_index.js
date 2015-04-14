exports.create_index = function(socket, client){
	socket.once('index_form', function(formdata){
		//index_name, access_method, unique, concurrently
		//database, schema, table, desc
		//order, first, last, operator_class
		
		//CREATE [UNIQUE] INDEX [CONCURRENTLY] [index_name] ON table [USING accessmethod] (column [ops] [DESC/ASC] NULLS FIRST/LAST)
		//[ALTER TABLE table CLUSTER ON column]
		var form = formdata.form;
		
		var accessMethod;
		var desc;
		var order;
		var operator_class;
		
		var query = "CREATE INDEX";
		
		if(form[2].value==1) query = "CREATE UNIQUE INDEX";
		if(form[3].value==1) query += " CONCURRENTLY";
		if(form[0].value.length !== 0) query += " "+form[0].value;
		query += " ON "+form[6].value;
		if(form[1].value.length !== 0) query += " USING "+form[1].value;
		query += " (";
		var columns = formdata.column;
		for(var i = 0 ; i < columns.length ; i ++){
			query +=columns[i];
			if(i==columns.length-1){
				query += ");";
			}else{
				query += ", ";
			}
		}
		console.log(query);
		client.query(query, function(err, rs){
			if(err){
				error = err.toString();
			}else{
				console.log("Index created.");
			}
			socket.emit('index_success', error);
		});
		
	});

}