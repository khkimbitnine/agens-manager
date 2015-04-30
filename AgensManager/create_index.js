exports.create_index = function(socket, client, formdata){

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
		query += ' ON "'+form[5].value+'".'+form[6].value;
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
		var error;
			if(err){
				error = err.toString();
			}
				console.log("Index created.");
			
			socket.emit('index_success', error);
		});
		
}