				exports.create_table = function(socket, client, formdata){
				
					// interval: column properties - column_name, type, length, precision, not_null (repeatable by 5 properties)
					var interval = 10;
					// Number of non-column properties: 4 (fixed)
					// 2 + (interval)*n + 2
					
					var name = formdata[0].value;
				
					var schema = formdata[1].value;
				
					var comment = formdata[formdata.length-1].value;
					
					// column : array of all columns' properties
					var column = [];
				
					for(var i = 2 ; i < formdata.length-1; i++){
				
						column[i-2] = formdata[i].value;
				
					}
					
					var createTable = 'CREATE TABLE "'+schema+'".'+name+'(';
				
					// Divide column by interval and put each chunk in the row[i]
					for(var i = 0 ; i < (column.length)/interval ; i++){
				
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
				
						var row = [];
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
				
				exports.alter_table = function(socket, client, formdata){
					
					// To check if input values are different, there are old values hidden
					var oldName = formdata[0].value;
					var name = formdata[1].value;
					var oldSchema = formdata[2].value;
					var schema = formdata[3].value;
					var oldOwner = formdata[4].value;
					var owner = formdata[5].value;
					var oldCmt = formdata[6].value;
					var comment = formdata[7].value;
					
					var nameQ = "";
					var schemaQ = "";
					var ownerQ = "";
					var commentQ = "";
					
					if(oldName !== name){
						nameQ = "ALTER TABLE "+oldName+" RENAME TO "+name+";"
					}
					
					if(oldSchema !== schema){
						schemaQ = "ALTER TABLE "+name+" SET SCHEMA "+schema+";";
					}
					
					if(oldOwner !== owner){
						ownerQ = "ALTER TABLE "+name+" OWNER TO "+owner+";";
					}
					
					if(oldCmt !== comment){
						commentQ = "COMMENT ON TABLE "+name+" IS '"+comment+"';";
					}
					
					var query = nameQ + schemaQ + ownerQ + commentQ;
					
					console.log(query)
					client.query(query, function(err, rs){
						
						var error;
						
						if(err){
							
							error = err.toString();
							
						}else{
							
							console.log("Table altered.");
						}
						
						socket.emit('table_success', error);
					});
				}
				
				exports.drop_table = function(socket, client, sctb){
					console.log("DROP TABLE \""+sctb.schema+"\"."+sctb.table+";")
					client.query("DROP TABLE \""+sctb.schema+"\"."+sctb.table+";", function(err, rs){
						
						var error;
						if(err){
							
							error = err.toString();
						}else{
							
							console.log("Table dropped.");
							
						}
						socket.emit('table_success', error);
					});
					
				}
				
