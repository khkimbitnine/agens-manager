exports.create_table = function(socket, client, formdata){
	
		var error;
		
		var interval = 9	
		//columnName, typeName, array, typeLength, constraint, not_null
		//unique, primary, foreign, default, column_comment, check
		
		var schema = formdata[0].value;
		var name = formdata[1].value;
		var comment = formdata[formdata.length-1].value;
		var column = [];//all column values
		for(var i = 2 ; i < formdata.length-1; i++){
			column[i-2] = formdata[i].value;
		}
		//create Table
		var createTable = 'CREATE TABLE "'+schema+'".'+name+'(';
		for(var i = 0 ; i < (column.length)/interval ; i++){// row index
			var colName = '';
			var type = '';
			var length = '';
			var nn = '';
			var pk = '';
			var uk = '';
			var def = '';
			var fk = '';
			var chk = '';
			

			var row = [];//column values per row
			var k = 0;
			for(var j = (interval*i) ; j < interval*(i+1) ; j++){// per row
					row[k++] = column[j];
			}
			colName = row[0];
			type = row[1];
			length = row[2];
			nn = row[3];
			pk = row[4];
			uk = row[5];
			def = row[6];
			fk = row[7];
			chk = row[8];
			cmt = row[9];
			
			if(length.length!== 0){
				length = "("+length+")";
			}
			
			if(nn == 1) {
				nn = " NOT NULL";
			}else{
				nn = '';
			}
			
			if(pk == 1) {
				pk = " PRIMARY KEY";
			}else{
				pk = '';
			}
			
			if(uk == 1) {
				uk = " UNIQUE";
			}else{
				uk = '';
			}
			
			if(def.length !== 0 && typeName=="character"){
				def = " DEFAULT '"+def+"'";
			}
			if(def.length == 0) def = "";
			
			if(def.length !== 0 && typeName !== "character"){
				def = " DEFAULT "+def;
			}
			
			if(fk == 0){
				fk = '';
			}else{
				fk = " REFERENCES "+fk;
			}
			
			if(chk.length !== 0){
				chk = " CHECK ("+ck+")";
			}else{
				chk = '';
			}
			
			if(i == ((column.length)/interval)-1){
				createTable += colName+" "+type+length+nn+chk+def+uk+pk+fk+");" 
			}else{
				createTable += colName+" "+type+length+nn+chk+def+uk+pk+fk+", " 
			}

		}

		if(comment.length !== 0) createTable += "COMMENT ON TABLE "+name+" IS '"+comment+"';"
		
		console.log(createTable);
		//======= create Table end

		client.query(createTable, function(err, rs){
			if(err){
				error = err.toString();
			}else{
				console.log("Table created.");
			}
			socket.emit('table_success', error);
		});
}