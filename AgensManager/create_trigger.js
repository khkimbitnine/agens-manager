exports.create_trigger = function(socket, client){
socket.on('username', function(username){
	var proname = [];
	client.query("select proname from pg_proc, (select usesysid from pg_user where usename='"+username+"') u where proowner=u.usesysid", function(err, rs){
		if(err){
			console.log(err);
		}else{
			for(var i = 0 ; i < rs.rows.length ; i++){
				proname.push(rs.rows[i].proname);
			}
			socket.emit('trigger_function', proname);
			console.log(proname);
		}
	});
});
}