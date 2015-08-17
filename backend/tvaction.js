/*#############################################################################################
#	1. 프로그램명 : 클라이언트가 트리뷰에 있는 특정 개체를 클릭하였을 때 데시보드에 binding할 데이터를 뽑아오고 클라이언트에 보내준다.
#   2. 파일명     : tvaction.js
#   3. 프로그램 설명 :
#            3.1  파리미터
#        
#
#            3.2 리턴값
#					-	성공시
#						    {}
#				
#   4. 프로그램 개발자 : Bitnine SA Team 김경호
#   5. 프로그램 개발 로그
#             5.1 최초 개발 : 2015-08-04
#
###############################################################################################*/

var pg = require('pg');
var util = require('util');
var eq = require('./executeQuery');

exports.tvaction = function (socket, data) {

	var socketData = JSON.parse(data);
	var schemaName = socketData.schemaName;

	var username = socketData.uid;
	var password = socketData.upw;
	var hostname = socketData.connHost;
	var dbname = socketData.connDB;
	var dbURL = util.format("postgres://%s:%s@%s/%s", username, password, hostname, dbname);

	switch (socketData.type) {
		case 'SS' :
			getSchemaSummary(socket, socketData);
			break;
		case 'TS' :
			getTableSummary(dbURL, socket, schemaName, username);
			break;
		case 'VS' :
			getViewSummary(dbURL, socket, schemaName, username);
			break;
		case 'FS' :
			getFuncSummary(dbURL, socket, schemaName, username);
			break;
		case 'SD' :
			getSchemaDetail(dbURL, socket, schemaName, username);
			break;
		case 'TD' :
			var tableName = socketData.tableName;
			getTableDetail(dbURL, socket, schemaName, tableName);
			break;
		case 'TDI' :
			var tableName = socketData.tableName;
			getTableDetailIndexes(dbURL, socket, schemaName, tableName);
			break;
		case 'TDC' :
			var tableName = socketData.tableName;
			getTableDetailConstraints(dbURL, socket, schemaName, tableName);
			break;
		case 'TDD' :
			var tableName = socketData.tableName;
			getTableDetailData(dbURL, socket, schemaName, tableName);
			break;
		case 'VD' :
			var viewName = socketData.viewName;
			getViewDetail(dbURL, socket, schemaName, viewName);
			break;
		case 'FD' :
			getFuncDetail(socket, socketData);
			break;
		default :
			console.log("no types for tvaction!");
			break;
	}

}

function getSchemaSummary(socket, data) {

}

function getTableSummary(dbURL, socket, schemaName, username) {
	//getSchemaDetail과 로직 동일

	var queryString = 'SELECT oid AS schema ' + 
					    'FROM pg_namespace ' +
					   'WHERE nspname = \'' + schemaName + '\'';
	var schema;
	eq.executeQuery(dbURL, queryString, function (err, result) {
		if (err) {
			stderr(err);
			return;
		}
		
		schema = result.rows[0].schema;
//TO-DO 쿼리 검증 필요
		queryString = 'SELECT T1.tablename AS tablename, ' +
							 'T1.tableowner AS tableowner, ' +
							 'T1.tablespace AS tablespace, ' +
							 'T2.rowcounts AS rowcounts, ' +
							 'T2.description AS comment ' +
						'FROM pg_tables T1, (SELECT C.relname AS tablename, ' + 
												   'C.reltuples AS rowcounts, ' +
												   'D.description AS description ' +
                   							  'FROM pg_class C ' +
                   							   'LEFT OUTER JOIN pg_description D ON (C.oid = D.objoid AND D.objsubid = 0) ' +
                   							 'WHERE C.relkind = \'r\' ' +
                   							   'AND C.relnamespace = \'' + schema + '\' ' +
                   							   'AND C.relname NOT LIKE \'pg_%\' ' +
                   							   'AND C.relname NOT LIKE \'sql_%\') T2 ' +
					   'WHERE T1.tablename = T2.tablename ' +
						 'AND T1.tableowner = \'' + username + '\' ' +
						 'AND T1.schemaname = \'' + schemaName + '\'';

		eq.executeQuery(dbURL, queryString, function (err, result) {
			if (err) {
				stderr(err);
				return;
			}

			var jTvactionData = JSON.stringify(result.rows);
			
			socket.emit('tvaction_res', jTvactionData);
		
		});
	});
}

function getViewSummary(dbURL, socket, schemaName, username) {
	var queryString = 'SELECT oid AS schema ' +
						'FROM pg_namespace ' +
					   'WHERE nspname = \'' + schemaName + '\'';
	var schema;
	eq.executeQuery(dbURL, queryString, function (err, result) {
		if(err) {
			stderr(err);
			return;
		}

		schema = result.rows[0].schema;

		queryString = 'SELECT T1.viewname AS viewname, ' +
							 'T1.viewowner AS viewowner, ' + 
							 'T2.description AS comment ' +
						'FROM pg_views T1, (SELECT C.relname AS viewname, ' +
												  'D.description AS description ' +
					 						 'FROM pg_class C ' + 
					 						  'LEFT OUTER JOIN pg_description D ON C.oid = D.objoid AND D.objsubid = 0 ' +
											'WHERE C.relnamespace = \'' + schema + '\' ' +
					  						  'AND C.relkind IN (\'v\', \'m\')) T2 ' +
					   'WHERE T1.viewname = T2.viewname ' +
  						 'AND T1.viewowner = \'' + username +'\'' +
  						 'AND T1.schemaname = \'' + schemaName + '\'';
  		eq.executeQuery(dbURL, queryString, function (err, result) {
  			if (err) {
  				stderr(err);
  				return;
  			}

  			var jTvactionData = JSON.stringify(result.rows);

  			socket.emit('tvaction_res', jTvactionData);

  		});

	});

}

function getFuncSummary(dbURL, socket, schemaName, username) {
	//TO-DO 쿼리 검증 필요
	var queryString = 'SELECT T1.proname AS functionname, ' +
							 'T.typname AS returntype, ' +
							 'U.usename AS ownername, ' + 
							 'L.lanname AS language, ' + 
							 'T1.description AS comment ' +
						'FROM (SELECT * ' +
								'FROM pg_proc P ' + 
								 'LEFT OUTER JOIN pg_description D ON P.oid = D.objoid) T1, ' +
	    							 'pg_namespace N, pg_user U, pg_language L, pg_type T ' +
					   'WHERE T1.pronamespace = N.oid ' +
  						 'AND T1.proowner = U.usesysid ' +
  						 'AND T1.prolang = L.oid ' +
  						 'AND T1.prorettype = T.oid ' +
  						 'AND N.nspname not like \'pg_%\' ' +
  						 'AND N.nspname <> \'information_schema\' ' +
  						 'AND N.nspname = \'' + schemaName + '\' ' +
  						 'AND U.usename = \'' + username + '\' ';
  	eq.executeQuery(dbURL, queryString, function (err, result) {
  		if (err) {
  			stderr(err);
  			return;
  		}

  		var jTvactionData = JSON.stringify(result.rows);

  		socket.emit('tvaction_res', jTvactionData);
  	});

}

function getSchemaDetail(dbURL, socket, schemaName, username) {
	//TO-DO getTableSummary와 로직 동일. 추후 무언가 추가하기 위해 일단 함수 분리함

	var queryString = 'SELECT oid AS schema ' + 
					    'FROM pg_namespace ' +
					   'WHERE nspname = \'' + schemaName + '\'';
	var schema;
	eq.executeQuery(dbURL, queryString, function (err, result) {
		if (err) {
			stderr(err);
			return;
		}
		
		schema = result.rows[0].schema;
//TO-DO 쿼리 검증 필요
		queryString = 'SELECT T1.tablename AS tablename, ' +
							 'T1.tableowner AS tableowner, ' + 
							 'T1.tablespace AS tablespace, ' + 
							 'T2.rowcounts AS rowcounts, ' + 
							 'T2.description AS comment ' +
						'FROM pg_tables T1, (SELECT C.relname AS tablename, ' + 
												   'C.reltuples AS rowcounts, ' + 
												   'D.description AS description ' +
                   							  'FROM pg_class C LEFT OUTER JOIN pg_description D ON (C.oid = D.objoid AND D.objsubid = 0) ' +
                   							 'WHERE C.relkind = \'r\' ' +
                   							   'AND C.relnamespace = \'' + schema + '\' ' +
                   							   'AND C.relname NOT LIKE \'pg_%\' ' +
                   							   'AND C.relname NOT LIKE \'sql_%\') T2 ' +
					   'WHERE T1.tablename = T2.tablename ' +
						 'AND T1.tableowner = \'' + username + '\' ' +
						 'AND T1.schemaname = \'' + schemaName + '\'';

		eq.executeQuery(dbURL, queryString, function (err, result) {
			if (err) {
				stderr(err);
				return;
			}

			var jTvactionData = JSON.stringify(result.rows);
			
			socket.emit('tvaction_res', jTvactionData);
		
		});
	});
}

function getTableDetail(dbURL, socket, schemaName, tableName) {
	var queryString = 'SELECT A.attname AS columnname, ' +
	   						 'pg_catalog.format_type(A.atttypid, A.atttypmod) AS type, ' +
	   						 'A.attlen AS length, ' +
	   						 'EXISTS (SELECT 1 ' +
	   	         					   'FROM (SELECT unnest(conkey) AS attnum ' +
	   	         	     					   'FROM pg_constraint ' +
	   	         	    					  'WHERE conrelid = A.attrelid AND contype = \'p\') C ' +
	   	        					  'WHERE C.attnum = A.attnum) AS pk, ' +
	   						 'A.attnotnull AS notnull, ' +
	   						 'AD.adsrc AS defaultvalue ' +
						'FROM pg_attribute A ' + 
						 'LEFT OUTER JOIN pg_attrdef AD ON A.attnum = AD.adnum ' +
					   'WHERE A.attrelid = (SELECT C.oid AS tableid ' +
	                  						 'FROM pg_class C, pg_namespace N ' +
	                 						'WHERE C.relnamespace = N.oid ' +
	                   						  'AND C.relname = \'' + tableName + '\' ' +
	                   						  'AND N.nspname = \'' + schemaName +'\') ' +
						 'AND A.attnum > 0 ' +
						 'AND NOT A.attisdropped ' +
					'ORDER BY A.attnum';
	eq.executeQuery(dbURL, queryString, function (err, result) {
		if(err) {
			stderr(err);
			return;
		}

		var jTvactionData = JSON.stringify(result.rows);

		socket.emit('tvaction_res', jTvactionData);

	});

}

function getTableDetailIndexes(dbURL, socket, schemaName, tableName) {
	var queryString = 'SELECT CI.relname AS indexname, ' +
       						 'AM.amname AS accessmethod, ' +
       						 'I.indisprimary AS pk, ' +
       						 'I.indisunique AS unique, ' +
       						 '(I.indpred IS NOT NULL) AS partial ' +
						'FROM pg_index I, pg_class CT, pg_roles RI, pg_class CI, pg_am AM ' +
					   'WHERE I.indexrelid = CI.oid ' +
  						 'AND I.indrelid = CT.oid ' +
  						 'AND CI.relowner = RI.oid ' +
  						 'AND CI.relam = AM.oid ' +
  						 'AND CT.oid = (SELECT C.oid ' +
  	              						 'FROM pg_class C, pg_namespace N ' +
  	             						'WHERE C.relnamespace = N.oid ' +
  	               						  'AND C.relkind = \'r\' ' +
  	               						  'AND C.relname = \'' + tableName + '\' ' +
  	               						  'AND N.nspname = \'' + schemaName + '\')';
	
	eq.executeQuery(dbURL, queryString, function (err, result) {
		if(err) {
			stderr(err);
			return;
		}

		var jTvactionData = JSON.stringify(result.rows);

		socket.emit('tvaction_res', jTvactionData);

	});

}

function getTableDetailConstraints(dbURL, socket, schemaName, tableName) {
	var queryString = 'SELECT DISTINCT CN.conname AS constraintname, ' +
									  'CN.contype AS type, ' +
									  'CI.relname as indexname, ' +
									  'CN.condeferrable AS deferrable, ' +
									  'CN.condeferred AS deferred, ' +
									  'CN.confupdtype AS updateaction, ' +
									  'CN.confdeltype AS deleteaction ' +
						'FROM pg_class CT, pg_constraint CN ' +
 						 'LEFT OUTER JOIN pg_depend D ON (CN.oid = D.refobjid) ' +
 						 'LEFT OUTER JOIN pg_class CI ON (D.objid = CI.oid) ' +
 						 'LEFT OUTER JOIN pg_roles RI ON (CI.relowner = RI.oid) ' +
					   'WHERE CT.oid = CN.conrelid AND CT.oid = (SELECT C.oid ' +
										   						  'FROM pg_class C, pg_namespace N ' +
										  						 'WHERE C.relnamespace = N.oid ' +
										    					   'AND C.relkind = \'r\' ' +
										    					   'AND C.relname = \'' + tableName + '\' ' +
										    					   'AND N.nspname = \'' + schemaName + '\')';

	eq.executeQuery(dbURL, queryString, function (err, result) {
		if(err) {
			stderr(err);
			return;
		}
		
		var jTvactionData = JSON.stringify(result.rows);

		socket.emit('tvaction_res', jTvactionData);

	});
}

function getTableDetailData(dbURL, socket, schemaName, tableName) {
	var queryString = 'SELECT * FROM ' + schemaName + '.' + tableName;

	eq.executeQuery(dbURL, queryString, function (err, result) {
		if(err) {
			stderr(err);
			return;
		}

		var jTvactionData = JSON.stringify(result.rows);
		socket.emit('tvaction_res', jTvactionData);

	});
}


function getViewDetail(dbURL, socket, schemaName, viewName) {
	var queryString = 'SELECT A.attname AS columnname, ' +
	 						 'pg_catalog.format_type(A.atttypid, A.atttypmod) AS type, ' +
	 						 'A.attlen AS length ' +
						'FROM pg_attribute A ' +
						 'LEFT OUTER JOIN pg_attrdef AD ON A.attnum = AD.adnum ' +
					   'WHERE A.attrelid = (SELECT C.oid AS viewid ' +
											 'FROM pg_class C, pg_namespace N ' +
											'WHERE C.relnamespace = N.oid ' +
					 						  'AND C.relname = \'' + viewName + '\' ' +
					 						  'AND N.nspname = \'' + schemaName + '\') ' +
						 'AND A.attnum > 0 ' +
						 'AND NOT A.attisdropped ' +
					'ORDER BY A.attnum';
	eq.executeQuery(dbURL, queryString, function (err, result) {
		if(err) {
			stderr(err);
			return;
		}

		var jTvactionData = JSON.stringify(result.rows);

		socket.emit('tvaction_res', jTvactionData);

	});
}

function getFuncDetail(socket, data) {

}