/*#############################################################################################
#	1. 프로그램명 : 클라이언트가 특정 개체를 클릭하였을 때 dashboard에 binding할 데이터를 뽑아오고 클라이언트에 보내준다.
#   2. 파일명     : tmaction.js
#   3. 프로그램 설명 :
#            3.1  파리미터
#        
#
#            3.2 리턴값
#					-	성공시
#						    {}
#				
#   4. 프로그램 개발자 : Bitnine SA Team 이미연
#   5. 프로그램 개발 로그
#             5.1 최초 개발 : 2015-08-12
#
###############################################################################################*/

var pg = require('pg');
var qs = require('querystring');
var urls = require('url');
var util = require('util');
var eq = require('./executeQuery');

exports.tmaction = function (socket, data) {

	var socketData = JSON.parse(data);
	var schemaName = socketData.schemaName;

	var username = socketData.uid;
	var password = socketData.upw;
	var hostname = socketData.connHost;
	var dbname = socketData.connDB;

	var datas = socketData.datas;

	var dbURL = util.format("postgres://%s:%s@%s/%s", username, password, hostname, dbname);
	var queryString = null;
	switch (socketData.type) {
		case 'TB' :

			queryString ='SELECT nspname AS schema ' +
    					'FROM pg_namespace ' +
    				   'WHERE nspname NOT LIKE \'pg_%\' '  +
    				     'AND nspname <> \'information_schema\';';

			getQuerySel(dbURL, socket, schemaName, username,queryString,'tmaction_tbres');
			break;
		case 'TP' :

			queryString ='SELECT typname AS types' +
						' FROM pg_type ' +
						' WHERE  typrelid = 0 ' +
						' AND typbasetype = 0 ' + 
						' AND  typanalyze = 0 ;' ;

			getQuerySel(dbURL, socket, schemaName, username,queryString,'tmaction_tpres');
			break;

		case 'CT':
			
			var jsonData = qs.parse(datas);
			console.log(jsonData);

			for(var myKey in jsonData) {
   				console.log("key:"+myKey+", value:"+jsonData[myKey]);
			}

			/*queryString ='CREATE TABLE '+jsonData.tableTxt +
					+' ( '
					for(var i=0;)
					+	 jsonData.columnTxt +' '+ jsonData.tpSel +' ('+lengthTxt' )'
					+' ) ; ';
*/

			break;
			
			getQuerySel(dbURL, socket, schemaName, username,queryString,'tmaction_ctres');
		default :
			console.log("no types for tmaction!");
			break;
	}

}

function getQuerySel(dbURL, socket, schemaName, username, queryString, resName){

	eq.executeQuery(dbURL, queryString, function (err, result) {
			if (err) {
				stderr(err);
				return;
			}

			var jTvactionData = JSON.stringify(result.rows);
			socket.emit(resName, jTvactionData);
		
		});

}
/*
function getSchemaSummary(dbURL, socket, schemaName, username) {

	var queryString = 'SELECT nspname AS schema ' +
    					'FROM pg_namespace ' +
    				   'WHERE nspname NOT LIKE \'pg_%\' '  +
    				     'AND nspname <> \'information_schema\';';


		eq.executeQuery(dbURL, queryString, function (err, result) {
			if (err) {
				stderr(err);
				return;
			}

			var jTvactionData = JSON.stringify(result.rows);
			socket.emit('tmaction_res', jTvactionData);
		
		});

}


function getTypeInfo(dbURL, socket, schemaName, username) {

	var queryString = 'SELECT typname AS types' +
						' FROM pg_type ' +
						' WHERE  typrelid = 0 ' +
						' AND typbasetype = 0 ' + 
						' AND  typanalyze = 0 ;' ;

		eq.executeQuery(dbURL, queryString, function (err, result) {

		if (err) {
			stderr(err);
			return;
		}

			var jTvactionData = JSON.stringify(result.rows);
			socket.emit('tmaction_typeres', jTvactionData);
		});

}
*/

