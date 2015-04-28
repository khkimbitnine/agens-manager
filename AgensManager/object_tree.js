exports.subtree = function(socket, client){
	//object browser
	socket.on('set_scname_table', function (scname){
		
		//get table list
		client.query('SELECT DISTINCT(table_name) FROM information_schema.tables WHERE table_schema = \''+scname+'\' AND table_type = \'BASE TABLE\' ORDER BY table_name ASC;', function(err, trs){
			if(err){
				console.log("set_scname_table err: "+err)
			}
			var arrTab = [];
			for(var k=0; k < trs.rows.length; k++){
				arrTab.push(trs.rows[k].table_name);
			}
			socket.emit('tabname', {table: arrTab});
			console.log(arrTab)
		});
	});
	
	//스키마 뷰 클릭, 뷰 전송
	socket.on('set_scname_view', function (scname){
		
		//get view list
		client.query('SELECT DISTINCT(table_name) FROM information_schema.views WHERE table_schema = \''+scname+'\' ORDER BY table_name ASC;', function(err, vrs){
			if(err){
				console.log("set_scname_view err: "+err);
			}
				var arrView = [];
				for(var k=0; k < vrs.rows.length; k++){
					arrView.push(vrs.rows[k].table_name);
				}
				socket.emit('viewname', {view: arrView});
		});
	});
	//스키마 함수 클릭, 함수 전송
	socket.on('set_scname_func', function (scname){
		
		//get function list
		client.query('select proname from pg_proc inner join pg_namespace ns on (pg_proc.pronamespace = ns.oid) where ns.nspname = \''+scname+'\' order by proname;', function(err, frs){
			if(err){
				console.log("set_scname_func err: "+err)
			}
				var arrFunc = [];
				for(var k=0; k < frs.rows.length; k++){
					arrFunc.push(frs.rows[k].proname);
				}
				socket.emit('funcname', {func: arrFunc});
		});
	});
	
	
	//테이블 컬럼 클릭, 컬럼 전송
	socket.on('set_tabname_col', function (data){
		
		//get column list
		client.query('SELECT column_name FROM information_schema.columns WHERE table_schema=\''+data.scname+'\' and table_name =\''+data.tabname+'\' order by column_name;', function(err, crs){
			if(err){
				console.log('set_tabname_col err: '+err)
			}
			var arrCol = [];
			for(var l=0; l < crs.rows.length; l++){
				arrCol.push(crs.rows[l].column_name);
			}
			console.log(arrCol);
			socket.emit('colname', {column: arrCol});
		});
	});
	
	//테이블 제약키 클릭, 제약키 전송
	socket.on('set_tabname_cons', function (data){
		
		//get constraint list
		client.query('select constraint_name from information_schema.constraint_column_usage where table_schema=\''+data.scname+'\' and table_name=\''+data.tabname+'\' order by constraint_name;', function(err, consrs){
			if(err){
				console.log('set_tabname_cons err: '+err)
			}
				var arrCons = [];
				for(var l=0; l < consrs.rows.length; l++){
					arrCons.push(consrs.rows[l].constraint_name);
				}
				socket.emit('consname', {constraint: arrCons});
		});
	});
	
	//테이블 인덱스 클릭, 인덱스 전송
	socket.on('set_tabname_ind', function (data){
		
		//get index list
		client.query('select relname from pg_class c, pg_index i, (select distinct(relfilenode) from pg_class, (select oid from pg_namespace where nspname = \''+data.scname+'\') s where relname = \''+data.tabname+'\' and relnamespace=s.oid) t where c.relkind = \'i\' and i.indexrelid = c.oid and i.indrelid = t.relfilenode and c.oid NOT IN (select conindid from pg_constraint);', function(err, irs){
			if(err){
				console.log("set_tabname_ind err: "+err)
			}	 
				var arrInd = [];
				for(var l=0; l < irs.rows.length; l++){
					arrInd.push(irs.rows[l].relname);
				}
				socket.emit('indname', {index: arrInd});
		});
	});
	
	//create function
	socket.on('schema', function(schema){
		
		var query = "";
		if(schema == "Basic datatype") {
			query = "select typname as t from pg_type, (select oid from pg_namespace where nspname = 'pg_catalog') n where typnamespace = n.oid and typtype <> 'c'";
		}else{
			query = "select table_name as t from information_schema.tables where table_schema = '"+schema+"' order by 1";
		}
		
		client.query(query, function(err, rs){
			if(err){
				console.log("schema error: "+err);
			}
				var types = [];
				for(var i = 0 ; i < rs.rows.length ; i++){
					if(rs.rows[i].t){
						types.push(rs.rows[i].t);
					}
				}
				socket.emit('types', types);
		});
	});
	
	//create trigger
	socket.on('username', function(username){
		
		client.query("select proname from pg_proc, (select usesysid from pg_user where usename='"+username+"') u where proowner=u.usesysid or prorettype = 2279 order by proname", function(err, rs){
			if(err){
				console.log(err);
			}
				var proname = [];
				for(var i = 0 ; i < rs.rows.length ; i++){
					proname.push(rs.rows[i].proname);
				}
				socket.emit('trigger_function', proname);
		});
	});
}

