/*#############################################################################################
#	1. 프로그램명 : agens-manager의 전체적인 connection을 관리한다.
#   2. 파일명     : connMgr.js
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
#             5.1 최초 개발 : 2015-08-23
#
###############################################################################################*/

// hashmap import
var HashMap = require('hashmap');

exports.connMgr = function () {
	// create hashmap
	global.hashMap = new HashMap();
}