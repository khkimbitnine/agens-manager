exports.create_table = function(socket){
			var type = [ "bigint", "bigserial", "boolean", "box", "bytea", "cidr",
							"circle", "date", "double precision", "inet", "integer",
							"json", "line", "lseg", "macaddr", "money", "path", "point",
							"polygon", "real", "smallint", "smallserial", "serial", "text",
							"tsquery", "tsvector", "txid_snapshot", "uuid", "xml", "bit",
							"bit varying", "character", "character varying", "interval",
							"time", "time with time zone", "timestamp",
							"timestamp with time zone", "numeric" ];
			
			//add, submit누를때 보낸다.
			socket.on('array', function(data){

				var array = data.array;
				var colRowNum = data.colRowNum;

				var name_no = 0;
				var col_no = 9*colRowNum+1;
				var type_no = 9*colRowNum+2;
				var length_no = 9*colRowNum+4;
				var def_no = 9*colRowNum+8;
				var colcomment_no = 9*colRowNum+9;
				var comment_no = array.length-1;
				
				if(array[length_no].name=="length2") array[length_no].value = 'disabled';
				if(data.length2 && array[length_no].value=='') array[length_no].value = 'numeric';
				if(data.length2 && data.length2!=='') {
					array[length_no].value += ",";
					array[length_no].value += data.length2;
				}
				socket.emit('validCheck', {name: array[name_no].value, col: array[col_no].value, length: array[length_no].value, def: array[def_no].value, colcomment: array[colcomment_no].value, comment: array[comment_no].value});
			});
			
			socket.once('table_form', function(formdata){//once
				var name = formdata[0].value;
				var comment = formdata[formdata.length-1].value;
				var column = [];
				for(var i = 1 ; i < formdata.length-1; i++){
					column[i-1] = formdata[i].value;
				}
				
				//create Table
					var eachColumn = [];
					createTable = "CREATE TABLE "+name+"(";
					var comments = '';
					for(var i = 0 ; i < (column.length)/9 ; i++){
						var columnProp;
						var columnName;
						var typeName;
						var array;
						var typeLength;
						var def;
						var nn;
						var uk;
						var pk;
						var cc;
						var c;
						
						eachColumn[i] = "";//(eachColumn[i] = []를 썼었는데, 2차원 배열 앞에서부터 9개씩 공백이 누적되는데 뭔지 모르겠음)
						
						for(var j = (9*i) ; j < 9*(i+1) ; j++){
							if(j+1 < 9*(i+1)){
								eachColumn[i] += column[j]+";";//token: ';'
							}else{
								eachColumn[i] += column[j];
							}
						}
						columnProp = eachColumn[i].split(";");
						
						columnName = columnProp[0];
						typeName = columnProp[1];
						array = columnProp[2];
						typeLength = columnProp[3];
						nn = columnProp[4];
						uk = columnProp[5];
						pk = columnProp[6];
						def = columnProp[7];
						columnComment = columnProp[8];
						if(typeLength!=='') typeLength = "("+typeLength+")"; 
						typeTokens = typeName.split(" ");
						if(typeTokens.length>0){
							typeName = typeTokens[0];
							for(var k = 1 ; k < typeTokens.length ; k++){
								typeLength += " "+typeTokens[k];
							}
						}
						
						if(def!=='') def = " DEFAULT '"+def+"'";
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
						createTable += columnName+" "+typeName+typeLength+array+nn+def+uk+pk;
						//console.log(createTable);
						if(i == ((column.length)/9)-1){
							createTable += ");" 
						}else{
							createTable += ", " 
						}
						
						if(columnComment !=='') comments += "COMMENT ON COLUMN "+name+"."+columnName+" IS '"+columnComment+"';"
							
					}
					
					if(comment!=='') comments += "COMMENT ON TABLE "+name+" IS '"+comment+"';"
					createTable += comments;
					console.log(createTable);
					//======= create Table end
					
				client.query(createTable, function(err, rs){
					if(err){
						console.log(err);
					}else{
						console.log("Table created.");
					}
						//socket.removeListener('form');
						//events.js:215
					    //	throw TypeError('listener must be a function');
					
				});

			});
}