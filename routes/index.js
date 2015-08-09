/*#############################################################################################
#	1. 프로그램명 :  라우트 모듈. 페이지를 rendering, redirect 하는 등의 view의 컨트롤러 역할
#   2. 파일명     : index.js
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
#             5.1 최초 개발 : 2015-07-25
#
###############################################################################################*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Agens Manager' });
});

router.get('/main', function(req, res) {
	res.render('main');
});

module.exports = router;
