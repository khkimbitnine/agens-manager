//db, schema, table, view, function, column, constraint, index 배열 선언
var arrDB = [];
var arrSch = [];
var arrTab = [];
var arrView = [];
var arrFunc = [];
var arrCol = [];
var arrCons = [];
var arrInd = [];

//클라이언트에서 받은 db, schema, table, view, function, column, constraint, index 이름 담을 변수 선언
var result, rs, trs, vrs, frs, crs, consrs, irs  = null;

//배열 만드는 함수 (db, 스키마, 테이블)

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

exports.db = function(client){
	//db 쿼리
	client.query('select datname from pg_database WHERE datistemplate=\'f\';', function(err, result){
		selectDb(err, result);
	});	
}

exports.subtree = function(socket, client, connectedDb){
	
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


}

