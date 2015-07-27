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
