var sio = require('socket.io');

module.exports = Sockets;

function Sockets (app, server) {
	var io = sio.listen(server);
	io.sockets.on('connection', function (socket) {
		console.log("socket connection");
	});
}