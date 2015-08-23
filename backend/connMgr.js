// hashmap
var HashMap = require('hashmap');

exports.connMgr = function () {
	console.log("connMgr called");
	global.hashMap = new HashMap();
}