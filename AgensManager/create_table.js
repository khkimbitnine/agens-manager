exports.create_table = function(socket, client){
	socket.once('table_form', function(formdata){//once
		var error;
		
		var interval = 12	
		//columnName, typeName, array, typeLength, constraint, not_null
		//unique, primary, foreign, default, column_comment, check
		
		var schema = formdata[0].value;
		var name = formdata[1].value;
		var comment = formdata[formdata.length-1].value;
		var column = [];
		for(var i = 2 ; i < formdata.length-1; i++){
			column[i-2] = formdata[i].value;
		}
		
		
		//create Table
		var eachColumn = [];
		createTable = "CREATE TABLE "+schema+"."+name+"(";
		var comments = ''; //col_comment, comment
		for(var i = 0 ; i < (column.length)/interval ; i++){// row index
			var columnRow = [];
			var columnName;
			var typeName;
			var array;
			var typeLength;
			var cs;
			var nn;
			var uk;
			var pk;
			var fk;
			var def;
			var cc;
			var ck;

			eachColumn[i] = "";//eachColumn 2차원 배열 생성 실패로 인한 차선책 

			for(var j = (interval*i) ; j < interval*(i+1) ; j++){// per row
				if(j+1 < interval*(i+1)){
					eachColumn[i] += column[j]+";";//token: ';'
				}else{
					eachColumn[i] += column[j];
				}
			}
			columnRow = eachColumn[i].split(";");
			
			columnName = columnRow[0];
			typeName = columnRow[1];
			array = columnRow[2];
			typeLength = columnRow[3];
			cs = columnRow[4];
			nn = columnRow[5];
			uk = columnRow[6];
			pk = columnRow[7];
			fk = columnRow[8];
			def = columnRow[9];
			cc = columnRow[10];
			ck = columnRow[11];
			
			if(typeLength.length!== 0){
				typeLength = "("+typeLength+")";
			}
			
			if(ck.length !== 0){
				ck = " CHECK ("+ck+")";
			}else{
				ck = '';
			}
			
			if(def.length !== 0 && typeName=="character"){
				def = " DEFAULT '"+def+"'";
			}
			if(def.length == 0) def = "";
			if(def.length !== 0 && typeName !== "character"){
				def = " DEFAULT "+def;
			}
			
			if(cs == 0) {
				cs = '';
			}else{
				cs = ' CONSTRAINT "'+cs+'"';
			}
			
			if(nn == 1) {
				nn = " NOT NULL";
			}else{
				nn = '';
			}
			
			if(uk == 1) {
				uk = " UNIQUE";
			}else{
				uk = '';
			}
			
			if(pk == 1) {
				pk = " PRIMARY KEY";
			}else{
				pk = '';
			}
			
			if(fk == 0){
				fk = '';
			}else{
				fk = " REFERENCES "+fk;
			}
			
//			console.log("columnName: "+columnName)
//			console.log("typeName: "+typeName)
//			console.log("typeLength: "+typeLength)
//			console.log("array: "+array)
//			console.log("cs: "+cs)
//			console.log("nn: "+nn)
//			console.log("ck: "+ck)
//			console.log("def: "+def)
//			console.log("uk: "+uk)
//			console.log("pk: "+pk)
//			console.log("fk: "+fk)
			
			createTable += columnName+" "+typeName+typeLength+array+cs+nn+ck+def+uk+pk+fk;
			if(i == ((column.length)/interval)-1){
				createTable += ");" 
			}else{
				createTable += ", " 
			}

			//if(cc.length !== 0) comments += "COMMENT ON COLUMN "+name+"."+columnName+" IS '"+cc+"';"

		}

		if(comment.length !== 0) comments += "COMMENT ON TABLE "+name+" IS '"+comment+"';"
		createTable += comments;
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
	});
	
	var search_type =
	["int", "int", "bool", "box", "bytea", "cidr",
		"circle", "date", "float", "inet", "int", "json",
		"line", "lseg", "macaddr", "money", "path", "point", "polygon",
		"float", "int", "int", "int", "text", "tsquery",
		"tsvector", "txid_snapshot", "uuid", "xml", "bit", "bit",
		"char", "char", "interval", "time",
		"timetz", "timestamp", "timestamptz",
		"numeric"];
	

	socket.on('f_check', function(data){
		var isunique=false;
		var sameType = false;
		var schema = data.schema;
		var table = data.table;
		var column = data.column;
		var typeInd = data.typeInd;
//		console.log("schema: "+schema)
//		console.log("table: "+table)
//		console.log("column: "+column)
//		console.log("typeInd: "+typeInd)
		var atttypid;
		var unique_query = "select attname, atttypid from (select indexrelid from (select rtrim(substr(relname, 10), ' index') id from (select reltoastrelid from pg_class, (select oid from pg_namespace where nspname='"+schema+"') n	where relname = '"+table+"' and relnamespace = n.oid) r, pg_class c where c.relfilenode = r.reltoastrelid) p, (select cast(indrelid as text) id, indexrelid, indisunique from pg_index) i where i.id=p.id and indisunique = true) pp, pg_attribute a where a.attrelid = pp.indexrelid";
		var type_query = "select oid from pg_type where typname like '%"+search_type[typeInd-1]+"%'";
		
		client.query(unique_query, function(err, rs){
			if(err){
				console.log(err);
			}else{
				for(var i=0; i < rs.rows.length; i++){
					//console.log("column:"+column +", rs.rows[i].attname: " +rs.rows[i].attname)
					if(column == rs.rows[i].attname) {
						isunique = true;
						atttypid = rs.rows[i].atttypid;
					}
				}
				//console.log("isunique "+isunique)
				
				if(isunique){
					dataCheck(atttypid);	
				}else{
					socket.emit('f_checked', {isunique:false, sameType:false});	
				}
			}
		});
		
		
		function dataCheck(atttypid){
				client.query(type_query, function(err, rs){
					if(err){
						console.log(err);
					}else{
						for(var i = 0 ; i < rs.rows.length ; i++){
							if(atttypid == rs.rows[i].oid){
								sameType = true;
							}
						}
						//console.log("sameType "+sameType)
						socket.emit('f_checked', {isunique:true, sameType:sameType});
					}
				});
		}
	});
}