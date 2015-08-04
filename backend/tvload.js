/*#############################################################################################
#	1. 프로그램명 : client의 main.jade의 sidebar의 object-browser의 tree-view를 로딩하는 기능
#   2. 파일명     : tvload.js
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
#             5.1 최초 개발 : 2015-07-29
#
###############################################################################################*/

var pg = require('pg');
var util = require('util');
var eq = require('./executeQuery');

exports.tvload = function(socket, data){
	//TO-DO DB 조회
	//TO-DO cookie 에서 받은 유저네임/비번으로 접속->보안 인증 정책 세우고 고치기, database를 dbURL이 포함하는데 object browser에서 DB들부터 레벨1으로 두어서 할 필요가 있을까?

	//TO-DO data에 날아온 DB 유저 정보를 바탕으로 아래 연결정보를 설정한다. 정책에 다라 decryption, dehex 필요...
	//JSON -> object
	var connInfo = JSON.parse(data);
	//연결정보 설정. dbname은 postgres로 하여 uid에 따른 모든 DB 목록을 가져온다.
	var username = connInfo.uid;
	var password = connInfo.upw;
	var hostname = connInfo.connHost;
	var dbname = connInfo.connDB;
	var dbURL = util.format("postgres://%s:%s@%s/%s", username, password, hostname, dbname);

	makeTVData(dbURL, socket, username);
}

function makeTVData (dbURL, socket, username) {
	//make schema list
	var tvload_data = [];
	var queryString = 'SELECT nspname AS scname ' +
    					'FROM pg_namespace ' +
    				   'WHERE nspname NOT LIKE \'pg_%\' '  +
    				     'AND nspname <> \'information_schema\';';

	eq.executeQuery(dbURL, queryString, function (err, result) {
		if (err) {
			stderr(err);
			return;
		}

		if(result.rowCount != 0) {
			tvload_data.push({'text' : 'SCHEMA'});
			tvload_data[0].tags = [];
			tvload_data[0].tags[0] = ''+ result.rowCount + '';
			tvload_data[0].nodes = [];
		}

		for (var i = 0; i < result.rows.length; i++) {
			tvload_data[0].nodes.push({'text' : result.rows[i].scname});
		}

		makeTableList(dbURL, socket, tvload_data, username);
	
	});
}

function makeTableList (dbURL, socket, tvload_data, username) {
	//append table list to tvload_data

	var queryString = 'SELECT A.tablename AS tblname, B.nspname AS scname ' +
					    'FROM pg_tables A JOIN pg_namespace B ' +
					      'ON A.schemaname = B.nspname ' +
					   'WHERE B.nspname NOT LIKE \'pg_%\' ' + 
					     'AND B.nspname <> \'information_schema\' ' + 
					     'AND A.tableowner = \'' + username + '\''

	eq.executeQuery(dbURL, queryString, function (err, result) {
		if (err) {
			stderr(err);
			return;
		}
//console.log(tvload_data[0].nodes[0].text); //public
//console.log(tvload_data[0].nodes[1].text); //schema1
		if (result.rowCount != 0) {
			var endIndex = tvload_data[0].nodes.length;
			for (var i = 0; i < endIndex; i++) {
				tvload_data[0].nodes[i].nodes = [];
				tvload_data[0].nodes[i].nodes.push({'text' : 'TABLE'});
				tvload_data[0].nodes[i].nodes[0].tags = []; // TABLE의 위치는 0
				tvload_data[0].nodes[i].nodes[0].nodes = [];
			}
		}

		for (var i = 0; i < tvload_data[0].nodes.length; i++) {
			var tagsNumber = 0;
			for (var j = 0; j < result.rows.length; j++) {
				if (result.rows[j].scname == tvload_data[0].nodes[i].text ) {
					tvload_data[0].nodes[i].nodes[0].tags[0] = '' + ++tagsNumber +'';
					tvload_data[0].nodes[i].nodes[0].nodes.push({'text' : result.rows[j].tblname});
				}
			}
		}

		makeViewList(dbURL, socket, tvload_data, username);
	
	});

}

function makeViewList (dbURL, socket, tvload_data, username) {
	//append view list to tvload_data
	var queryString = 'SELECT A.viewname AS viewname, B.nspname AS scname ' + 
						'FROM pg_views A JOIN pg_namespace B ' + 
						  'ON A.schemaname = B.nspname ' + 
					   'WHERE B.nspname NOT LIKE \'pg_%\' ' + 
					     'AND B.nspname <> \'information_schema\' ' + 
					     'AND A.viewowner = \'' + username + '\'';
	eq.executeQuery(dbURL, queryString, function (err, result) {

		if (err) {
			stedrr(err);
			return;
		}

		if (result.rowCount != 0) {
			var endIndex = tvload_data[0].nodes.length;
			for(var i = 0; i < endIndex; i++) {
				tvload_data[0].nodes[i].nodes.push({'text' : 'VIEW'});
				tvload_data[0].nodes[i].nodes[1].tags = [];	// VIEW의 위치는 1
				tvload_data[0].nodes[i].nodes[1].nodes = [];
			}
		}

		for (var i = 0; i < tvload_data[0].nodes.length; i++) {
			var tagsNumber = 0;
			for (var j = 0; j < result.rows.length; j++) {
				if (result.rows[j].scname == tvload_data[0].nodes[i].text ) {
					tvload_data[0].nodes[i].nodes[1].tags[0] = '' + ++tagsNumber +'';
					tvload_data[0].nodes[i].nodes[1].nodes.push({'text' : result.rows[j].viewname});
				}
			}
		}

		makeFuncList(dbURL, socket, tvload_data, username);
	
	});

}

function makeFuncList (dbURL, socket, tvload_data, username) {
	//append function list to tvload_data
	var queryString = 'SELECT A.proname AS funcname, B.nspname AS scname ' + 
						'FROM pg_proc A JOIN pg_namespace B ' + 
						  'ON A.pronamespace = B.oid ' +
									   'JOIN pg_user C ' +
						  'ON A.proowner = C.usesysid ' + 
					   'WHERE B.nspname NOT LIKE \'pg_%\' ' + 
					     'AND B.nspname <> \'information_schema\' ' + 
					     'AND C.usename = \'' + username + '\'';
	eq.executeQuery(dbURL, queryString, function (err, result) {

		if (err) {
			stedrr(err);
			return;
		}

		if (result.rowCount != 0) {
			var endIndex = tvload_data[0].nodes.length;
			for(var i = 0; i < endIndex; i++) {
				tvload_data[0].nodes[i].nodes.push({'text' : 'FUNCTION'});
				tvload_data[0].nodes[i].nodes[2].tags = [];	// FUNCTION의 위치는 2
				tvload_data[0].nodes[i].nodes[2].nodes = [];
			}
		}

		for (var i = 0; i < tvload_data[0].nodes.length; i++) {
			var tagsNumber = 0;
			for (var j = 0; j < result.rows.length; j++) {
				if (result.rows[j].scname == tvload_data[0].nodes[i].text ) {
					tvload_data[0].nodes[i].nodes[2].tags[0] = '' + ++tagsNumber +'';
					tvload_data[0].nodes[i].nodes[2].nodes.push({'text' : result.rows[j].funcname});
				}
			}
		}

		emitTV(socket, tvload_data);
	
	});

}

function emitTV (socket, tvload_data) {
	//emit the tvload_data
	var JTvload_data = JSON.stringify(tvload_data);
	socket.emit('tvload_res', JTvload_data);
}