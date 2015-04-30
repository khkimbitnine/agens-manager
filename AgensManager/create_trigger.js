exports.username = function(socket, client, username){
	client.query("select proname from pg_proc, (select usesysid from pg_user where usename='"+username+"') u where proowner=u.usesysid or prorettype = 2279 order by proname", function(err, rs){
		if(err){
			console.log(err);
		}
			var proname = [];
			for(var i = 0 ; i < rs.rows.length ; i++){
				proname.push(rs.rows[i].proname);
			}
			socket.emit('trigger_function', proname);
//			console.log(proname);
	});
}