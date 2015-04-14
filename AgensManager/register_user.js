exports.register_user = function(socket, client){
	
	socket.once('check', function(username){
		var error;
		var dup_user;
		client.query("select usename from pg_user", function(err, rs){
			if(err){
				console.log(err);
			}else{
				
				for(var i = 0 ; i < rs.rows.length ; i++){
					if(rs.rows[i].usename == username){
						dup_user = 1;
					}
				}
				socket.emit('dup_user', dup_user);
			}
			
		});
	});

}