				exports.create_table = function(socket, client, formdata){
				
					var interval = 10;
				
					//interval : column_name, type, length, precision, not_null
					//primary, unique, default, foreign, check
				
					var name = formdata[0].value;
				
					var schema = formdata[1].value;
				
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
						var precision = '';
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
				
						type = row[1].split('[]')[0];
				
						length = row[2];
				
						precision = row[3];
				
						nn = row[4];
				
						pk = row[5];
				
						uk = row[6];
				
						def = row[7];
				
						fk = row[8];
				
						chk = row[9];
				
						cmt = row[10];
				
						if(length && !precision){
				
							if(row[1].split('[]').length == 1){
				
								length = "("+length+")";
				
							}else{
				
								length = "("+length+")[]";
				
							}
				
						}
				
						if(precision){
				
							if(row[1].split('[]').length == 1){
				
								length = "("+length+",";
				
								precision = precision+")";
				
							}else{
				
								length = "("+length+",";
				
								precision = precision+")[]";
				
							}
				
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
				
						if(def && (type == "character" || type == "character varying" || type == '"char"')){
				
							def = " DEFAULT '"+def+"'";
				
						}
				
						if(!def) def = "";
				
						if(def && (type !== "character" || type !== "character varying" || type !== '"char"')){
							
							def = " DEFAULT "+def;
							
						}
				
						if(fk == 0){
							
							fk = '';
							
						}else{
							
							fk = " REFERENCES "+fk;
							
						}
				
						if(chk){
							
							chk = " CHECK ("+ck+")";
							
						}else{
							
							chk = '';
							
						}
				
						if(i == ((column.length)/interval)-1){
							
							createTable += colName+" "+type+length+precision+nn+chk+def+uk+pk+fk+");"
							
						}else{
							
							createTable += colName+" "+type+length+precision+nn+chk+def+uk+pk+fk+", "
							
						}
				
					}
				
					if(comment){
						
						createTable += "COMMENT ON TABLE "+name+" IS '"+comment+"';"
						
					}
				
					console.log(createTable);
				
					client.query(createTable, function(err, rs){
						
						var error;
						
						if(err){
							
							error = err.toString();
							
						}else{
							
							console.log("Table created.");
							
						}
						
						socket.emit('table_success', error);
						
					});
				}