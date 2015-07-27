var signinJS = require('./signin');

exports.backend_events = function(socket) {
	socket.on('signin', function () {
		signinJS.signin();
		console.log('signin received2');
		socket.emit('auth_success', {msg:'welcome'});	
	});
}
