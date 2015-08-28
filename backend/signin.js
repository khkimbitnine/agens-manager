/*#############################################################################################
#	1. 프로그램명 : index.jade에서 client가 입력한 정보를 바탕으로 PostgreSQL 로그인 및 인증 후 client auth
#   2. 파일명     : signin.js
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
#             5.1 최초 개발 : 2015-07-27
#			  5.2 인증로직 추가 개발 : 2015-08-27
#
###############################################################################################*/

var util = require('util');
var eq = require('./executeQuery');
var sha256 = require('sha256');

exports.signin = function(socket, data){
	authUser(socket, data);
}

function authUser (socket, data) {
	var socketData = JSON.parse(data);

	var username = socketData.uid;
	var password = socketData.upw;
	var hostname = socketData.connhost;
	var dbname = socketData.connDB;
	var dbURL = util.format("postgres://%s:%s@%s/%s", username, password, hostname, dbname);
	var queryString = 'SELECT 1';

	eq.executeQuery(dbURL, queryString, function (err, result) {
		if (err) {
			stderr(err);
			return;
		}
		var token = checkAndInsertToken(socketData);
		if(token != -1) {
			var JcookieData = JSON.stringify({uid: username, token: token});
			socket.emit('auth_success', JcookieData);
		} else {
			socket.emit('auth_fail', JSON.stringify({msg:'Authentication Failed. Please retry'}));
		}
		
	});
}

function checkAndInsertToken (data) {
	var token = generateToken(data);
	for(var tryCount = 0; tryCount < 5; tryCount++) {

		if(!hashMap.has(token)) {
			hashMap.set(token, data);
			return token;
		} else {
			if(tryCount == 4) {
				return -1;
			} else {
				token = generateToken(data);
			}
		}
		
	}
}

function generateToken (data) {
	
	// 배열에 data binding
	var tempArr = [];
	var i = 0;
	for (var value in data) {
		tempArr[i] = data[value];
		i++;
	}
	tempArr[i] = new Date().getTime();

	// array shuffle
	shuffle(tempArr);

	var tempToken = '';

	for(i = 0; i < tempArr.length; i++) {
		tempToken = tempToken + tempArr[i];
	}

	return sha256(tempToken, {asString: true});
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}