//★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★ 실행 전 주의사항:  1) connectedDb 2) constring 3) app.use 경로 4) readFile 경로 바꾸기!!!!!!! ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★

//-------------------- app.html 불러오는 app모듈
var express = require('express');
var fs = require('fs');
var app = express();
var http = require('http');
var pg = require('pg');
var jade = require('jade');
var bodyParser = require('body-parser');//새로운 npm
//=========================================================================================================================================== 1) connectedDb
//var connectedDb = "demo";
//var connectedDb = "procarrie";
var connectedDb = "bitnine";

//=========================================================================================================================================== 2) constring
//var conString = "postgres://postgres:bit9@localhost/"+connectedDb;
//var conString = "postgres://postgres:pro1459@localhost/"+connectedDb;
var conString = "postgres://postgres:1111@localhost/"+connectedDb;
//======== db, schema, table, view, function, column, constraint, index 배열 선언
var arrDB = [];
var arrSch = [];
var arrTab = [];
var arrView = [];
var arrFunc = [];
var arrCol = [];
var arrCons = [];
var arrInd = [];
var createTable;
//======== 클라이언트에서 받은 db, schema, table, view, function, column, constraint, index 이름 담을 변수 선언
var result, rs, trs, vrs, frs, crs, consrs, irs  = null;

//=========================================================================================================================================== 3) 소스 경로
//app.use('/public', express.static("/home/bitnine/source_code_dir/agens-manager/public"));
//app.use('/public', express.static("C:/Users/procarrie/workspace/AgensManager/public"));
app.use('/public', express.static("C:/Users/Johnahkim/workspace/test/public"));

//포트 연결
//app.set('port', 7474);
app.set('port', 3000);

//서버 연결
var server = http.createServer(app).listen(app.get('port'), function(){

// 배열 만드는 함수 (db, 스키마, 테이블)
	
	//selectDb function
	function selectDb(err, result){
		for(var i=0; i < result.rows.length; i++){
			arrDB.push(result.rows[i].datname);
		}
		console.log(arrDB);
	}

	//selectSc function
	function selectSc(err, rs){
		for(var j=0; j < rs.rows.length; j++){
			arrSch.push(rs.rows[j].schema_name);
		}
		console.log("arrSch: "+arrSch.length);
	}

	//selectTb function
	function selectTb(err, trs){
		for(var k=0; k < trs.rows.length; k++){
			arrTab.push(trs.rows[k].table_name);
		}
		console.log("arrTab: "+arrTab.length);
	}

	//selectVw function
	function selectVw(err, vrs){
		for(var k=0; k < vrs.rows.length; k++){
			arrView.push(vrs.rows[k].table_name);
		}
		console.log("arrView: "+arrView.length);
	}

	//selectFc function
	function selectFc(err, frs){
		for(var k=0; k < frs.rows.length; k++){
			arrFunc.push(frs.rows[k].proname);
		}
		console.log("arrFunc: "+arrFunc.length);
	}
	
	//selectCol function
	function selectCol(err, crs){
		for(var l=0; l < crs.rows.length; l++){
			arrCol.push(crs.rows[l].column_name);
		}
		console.log("arrCol: "+arrCol.length);
	}
	
	//selectCons function
	function selectCons(err, consrs){
		for(var l=0; l < consrs.rows.length; l++){
			arrCons.push(consrs.rows[l].constraint_name);
		}
		console.log("arrCons: "+arrCons.length);
	}
	//selectInd function
	function selectInd(err, irs){
		for(var l=0; l < irs.rows.length; l++){
			arrInd.push(irs.rows[l].relname);
		}
		console.log("arrInd: "+arrInd.length);
	}
	
	//createTable function
	function createTable(name, column, comment){
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
	}
	//========= socket.io 선언
	var io = require('socket.io').listen(server);

	console.log('server listening on 3000');

	//데이터베이스 연결
	pg.connect(conString, function(err, client, done) {
		
		//에러 핸들러
		var handleError = function(err) {
			if(!err) {
				return false;
			}
			done(client);
			return true;
		};
		
		//db 쿼리
		client.query('select datname from pg_database WHERE datistemplate=\'f\';', function(err, result){
			selectDb(err, result);
		});

		//socket 연결
		io.on('connection', function(socket){
			//db 전송
			socket.emit('db', {db: arrDB});
			
			//db 클릭, 스키마 전송
			socket.on('set_dbname', function (dbname){
				if(dbname === connectedDb){
					console.log("dbname: connected =>   "+dbname+" : "+connectedDb);
					//arrSch 비우기
					arrSch = [];
					
					//스키마 쿼리
					client.query('select schema_name from information_schema.schemata where schema_name not like \'pg_%\' and schema_name <> \'information_schema\'', function(err, rs){
						selectSc(err, rs);
						socket.emit('scname', {schema: arrSch});
					}); 
				} else {//접속한 db와 dbname이 일치하지 않으면, 0을 리턴(편의상)
					socket.emit('scname', {schema: 0});
				}
			});
 
			//스키마 테이블 클릭, 테이블 전송
			socket.on('set_scname_table', function (scname){
				for(var i = 0 ; i < arrSch.length ; i++){
					if(arrSch[i] === scname){
						arrTab = [];
						//get table list
						client.query('SELECT DISTINCT(table_name) FROM information_schema.tables WHERE table_schema = \''+scname+'\' AND table_type = \'BASE TABLE\' ORDER BY table_name ASC;', function(err, trs){
							selectTb(err, trs);
							socket.emit('tabname', {table: arrTab});
							console.log(arrTab);
						});
					}
				}
			});
			
			//스키마 뷰 클릭, 뷰 전송
			socket.on('set_scname_view', function (scname){
				for(var i = 0 ; i < arrSch.length ; i++){
					if(arrSch[i] === scname){
						arrView = [];
						//get view list
						client.query('SELECT DISTINCT(table_name) FROM information_schema.views WHERE table_schema = \''+scname+'\' ORDER BY table_name ASC;', function(err, vrs){
							selectVw(err, vrs);
							socket.emit('viewname', {view: arrView});
							console.log(arrView);
						});
					}
				}
			});
			//스키마 함수 클릭, 함수 전송
			socket.on('set_scname_func', function (scname){
						arrFunc = [];
						//get function list
						client.query('select proname from pg_proc inner join pg_namespace ns on (pg_proc.pronamespace = ns.oid) where ns.nspname = \''+scname+'\' order by proname;', function(err, frs){
							selectFc(err, frs);
							socket.emit('funcname', {func: arrFunc});
							console.log(arrFunc);
						});
			});
			

			//테이블 컬럼 클릭, 컬럼 전송
			socket.on('set_tabname_col', function (data){
						arrCol = [];
						//get column list
						client.query('SELECT column_name FROM information_schema.columns WHERE table_schema=\''+data.scname+'\' and table_name =\''+data.tabname+'\' order by column_name;', function(err, crs){
							selectCol(err, crs);
							socket.emit('colname', {column: arrCol});
							console.log(arrCol);
						});
			});
			
			//테이블 제약키 클릭, 제약키 전송
			socket.on('set_tabname_cons', function (data){
						arrCons = [];
						//get constraint list
						client.query('select constraint_name from information_schema.constraint_column_usage where table_schema=\''+data.scname+'\' and table_name=\''+data.tabname+'\' order by constraint_name;', function(err, consrs){
							selectCons(err, consrs);
							socket.emit('consname', {constraint: arrCons});
							console.log(arrCons);
						});
			});
			
			//테이블 인덱스 클릭, 인덱스 전송
			socket.on('set_tabname_ind', function (data){
						arrInd = [];
						//get index list
						client.query('select relname from pg_class c, pg_index i, (select distinct(relfilenode) from pg_class, (select oid from pg_namespace where nspname = \''+data.scname+'\') s where relname = \''+data.tabname+'\' and relnamespace=s.oid) t where c.relkind = \'i\' and i.indexrelid = c.oid and i.indrelid = t.relfilenode and c.oid NOT IN (select conindid from pg_constraint);', function(err, irs){
							selectInd(err, irs);
							socket.emit('indname', {index: arrInd});
							console.log(arrInd);
						});
			});
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

				var col_no = 9*colRowNum+1;
				var type_no = 9*colRowNum+2;
				var length_no = 9*colRowNum+4;
				var def_no = 9*colRowNum+8;
				var colcomment_no = 9*colRowNum+9;
				
				if(array[length_no].name=="length2") array[length_no].value = 'disabled';
				if(array[length_no].name=="length" && array[length_no].value=='') array[length_no].value = 'numeric';
				if(data.length2 && data.length2!=='') {
					array[length_no].value += ",";
					array[length_no].value += data.length2;
				}
				
				if(data.submit){
					var name_no = 0;
					var comment_no = array.length-1;
					socket.emit('validCheck', {name: array[name_no].value, col: array[col_no].value, length: array[length_no].value, def: array[def_no].value, colcomment: array[colcomment_no].value, comment: array[comment_no].value});
				}else{
					socket.emit('validCheck', {col: array[col_no].value, length: array[length_no].value, def: array[def_no].value, colcomment: array[colcomment_no].value});
				}
				
			});
			
			socket.on('form', function(formdata){
				var name = formdata[0].value;
				var comment = formdata[formdata.length-1].value;
				var column = [];
				for(var i = 1 ; i < formdata.length-1; i++){
					column[i-1] = formdata[i].value;
				}
				
				createTable(name, column, comment);
				client.query(createTable, function(err, rs){
					if(err){
						console.log(err);
					}else{
						console.log("Table created.");
						//socket.removeListener('form')이 안됨.(client에선 되는데)
						//events.js:215
					    //	throw TypeError('listener must be a function');
					}
				});

			});
			
		});

	});//pgconnect end
});
//======================================================================================================================================================= 4) readFile 경로
app.get('/', function (req, res){
	//fs.readFile('/home/bitnine/source_code_dir/agens-manager/app.html', function(error, data){
		fs.readFile('/Users/Johnahkim/workspace/test/app.html', function(error, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);			//ja021017
	});
	
	
//	var fn = jade.compile(fs.readFileSync('app.jade', 'utf-8'), {
//		  basedir: '/Users/Johnahkim/workspace/test'
//		});
//	
//      var html = fn({});
//		res.write(html);
//		res.end();
	
});
app.get('/create_table.html', function (req, res){
//	fs.readFile('/home/bitnine/source_code_dir/agens-manager/create_table.html', function(error, data){
		fs.readFile('/Users/Johnahkim/workspace/test/create_table.html', function(error, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);			//ja021017
	});
});



