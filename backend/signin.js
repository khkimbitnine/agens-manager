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
#
###############################################################################################*/

exports.signin = function(socket, data){

	var token = generateToken(data);

	//hashMap에 token값이 있는지 검사하고 없으면 hashMap에 token을 key로 해서 binding, 있으면 다시한번 generateToken 수행
	hashMap.set("1", {uid : 1, token : 'aaaaa'});

	console.log(hashMap.get("1").token);


	socket.emit('auth_success', {msg:'welcome'});
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