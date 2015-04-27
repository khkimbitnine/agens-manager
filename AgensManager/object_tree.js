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

//selectSc function
function selectSc(rs){
		for(var j=0; j < rs.rows.length; j++){
			arrSch.push(rs.rows[j].schema_name);
		}
}

//selectTb function
function selectTb(trs){
	for(var k=0; k < trs.rows.length; k++){
		arrTab.push(trs.rows[k].table_name);
	}
}

//selectVw function
function selectVw(vrs){
	for(var k=0; k < vrs.rows.length; k++){
		arrView.push(vrs.rows[k].table_name);
	}
}

//selectFc function
function selectFc(frs){
	for(var k=0; k < frs.rows.length; k++){
		arrFunc.push(frs.rows[k].proname);
	}
}

//selectCol function
function selectCol(crs){
	for(var l=0; l < crs.rows.length; l++){
		arrCol.push(crs.rows[l].column_name);
	}
}

//selectCons function
function selectCons(consrs){
	for(var l=0; l < consrs.rows.length; l++){
		arrCons.push(consrs.rows[l].constraint_name);
	}
}
//selectInd function
function selectInd(irs){
	for(var l=0; l < irs.rows.length; l++){
		arrInd.push(irs.rows[l].relname);
	}
}

exports.subtree = function(socket, client, connectedDb, done){

	//스키마 테이블 클릭, 테이블 전송
	socket.on('set_scname_table', function (scname){
				arrTab = [];
				//get table list
				client.query('SELECT current_database()', function(err, trs){
					if(err){
						console.log("set_scname_table err: "+err)
					}else{
						console.log("current database: "+trs.rows[0].current_database);
					}
//					done();
				});
				
//				client.query('SELECT DISTINCT(table_name) FROM information_schema.tables WHERE table_schema = \''+scname+'\' AND table_type = \'BASE TABLE\' ORDER BY table_name ASC;', function(err, trs){
//					if(err){
//						console.log("set_scname_table err: "+err)
//					}else{
//						selectTb(trs);
//						socket.emit('tabname', {table: arrTab});
//					}
////					done();
//				});
	});

	//스키마 뷰 클릭, 뷰 전송
	socket.on('set_scname_view', function (scname){
				arrView = [];
				//get view list
				client.query('SELECT DISTINCT(table_name) FROM information_schema.views WHERE table_schema = \''+scname+'\' ORDER BY table_name ASC;', function(err, vrs){
					if(err){
						console.log("set_scname_view err: "+err);
					}else{
						selectVw(vrs);
						socket.emit('viewname', {view: arrView});
					}
				});
	});
	//스키마 함수 클릭, 함수 전송
	socket.on('set_scname_func', function (scname){
		arrFunc = [];
		//get function list
		client.query('select proname from pg_proc inner join pg_namespace ns on (pg_proc.pronamespace = ns.oid) where ns.nspname = \''+scname+'\' order by proname;', function(err, frs){
			if(err){
				console.log("set_scname_func err: "+err)
			}else{
				selectFc(frs);
				socket.emit('funcname', {func: arrFunc});
			}
		});
	});


	//테이블 컬럼 클릭, 컬럼 전송
	socket.on('set_tabname_col', function (data){
		arrCol = [];
		//get column list
		client.query('SELECT column_name FROM information_schema.columns WHERE table_schema=\''+data.scname+'\' and table_name =\''+data.tabname+'\' order by column_name;', function(err, crs){
			if(err){
				console.log('set_tabname_col err: '+err)
			}else{
				selectCol(crs);
				socket.emit('colname', {column: arrCol});
			}
		});
	});

	//테이블 제약키 클릭, 제약키 전송
	socket.on('set_tabname_cons', function (data){
		arrCons = [];
		//get constraint list
		client.query('select constraint_name from information_schema.constraint_column_usage where table_schema=\''+data.scname+'\' and table_name=\''+data.tabname+'\' order by constraint_name;', function(err, consrs){
			if(err){
				console.log('set_tabname_cons err: '+err)
			}else{
				selectCons(consrs);
				socket.emit('consname', {constraint: arrCons});
			}
		});
	});

	//테이블 인덱스 클릭, 인덱스 전송
	socket.on('set_tabname_ind', function (data){
		arrInd = [];
		//get index list
		client.query('select relname from pg_class c, pg_index i, (select distinct(relfilenode) from pg_class, (select oid from pg_namespace where nspname = \''+data.scname+'\') s where relname = \''+data.tabname+'\' and relnamespace=s.oid) t where c.relkind = \'i\' and i.indexrelid = c.oid and i.indrelid = t.relfilenode and c.oid NOT IN (select conindid from pg_constraint);', function(err, irs){
			if(err){
				console.log("set_tabname_ind err: "+err)
			}else{
				selectInd(irs);
				socket.emit('indname', {index: arrInd});
			}
		});
	});


}

