exports.create_table = function(socket, client, connectedDb, done){
	
	socket.on('set_dbname_table', function (dbname){
		var arrSch = [];
		if(dbname === connectedDb){
			arrSch = [];
			//스키마 쿼리
			client.query('select schema_name from information_schema.schemata where schema_name not like \'pg_%\' and schema_name <> \'information_schema\'', function(err, rs){
				if(rs){
					for(var j=0; j < rs.rows.length; j++){
						arrSch.push(rs.rows[j].schema_name);
						console.log(arrSch);
						socket.emit('scname_table', arrSch);
					}
				}				
//				done();
			}); 
		} else {//접속한 db와 dbname이 일치하지 않으면, 0을 리턴(편의상)
			socket.emit('scname_table', {schema: 0});
		}
	});
	
	socket.on('table_form', function(formdata){
		var error;
		
		var interval = 12	
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
		var createTable = "CREATE TABLE "+schema+"."+name+"(";
		var comments = ''; //col_comment, comment
		for(var i = 0 ; i < (column.length)/interval ; i++){// row index
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

			var columnRow = [];//column values per row
			var k = 0;
			for(var j = (interval*i) ; j < interval*(i+1) ; j++){// per row
					columnRow[k++] = column[j];
			}
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
			done();
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
		var array = data.array;
		
		console.log("schema: "+schema)
		console.log("table: "+table)
		console.log("column: "+column)
		console.log("typeInd: "+typeInd)
		console.log("array: "+array)
		var type_query = "";
		var atttypid;
		var attname;
		var unique_query = "select attname from (select indexrelid from (select rtrim(substr(relname, 10), ' index') id from (select reltoastrelid from pg_class, (select oid from pg_namespace where nspname='"+schema+"') n	where relname = '"+table+"' and relnamespace = n.oid) r, pg_class c where c.relfilenode = r.reltoastrelid) p, (select cast(indrelid as text) id, indexrelid, indisunique from pg_index) i where i.id=p.id and indisunique = true) pp, pg_attribute a where a.attrelid = pp.indexrelid";
		
		var equal;
		if(array){
			equal = "=";
		}else{
			equal = "<>";
		}
		type_query = "select column_name from information_schema.columns where table_schema='"+schema+"' and table_name='"+table+"' and data_type"+equal+"'ARRAY' and udt_name like '%"+search_type[typeInd -1]+"%';";
		
		client.query(unique_query, function(err, rs){
			if(err){
				console.log(err);
			}else{
				for(var i=0; i < rs.rows.length; i++){
					//console.log("column:"+column +", rs.rows[i].attname: " +rs.rows[i].attname)
					if(column == rs.rows[i].attname) {
						isunique = true;
						attname = rs.rows[i].attname;
					}
				}
				//console.log("isunique "+isunique)
				
				if(isunique){
					dataCheck(attname);	
				}else{
					socket.emit('f_checked', {isunique:false, sameType:false});	
				}
			}
			done();
		});
		
		
		function dataCheck(attname){
				client.query(type_query, function(err, rs){
					if(err){
						console.log(err);
					}else{
							for(var i = 0 ; i < rs.rows.length ; i++){
								if(attname == rs.rows[i].column_name){
									sameType = true;
								}
							}
						}
						//console.log("sameType "+sameType)
						socket.emit('f_checked', {isunique:true, sameType:sameType});
						done();
					});
		}
	});
}