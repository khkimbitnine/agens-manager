exports.login_user = function(socket, client){
	
	socket.on('login_form', function(username){
		//console.log("username: "+username)
		var error;
		var user_exist = 0;
		client.query("select usename from pg_user", function(err, rs){
			if(err){
				console.log(err);
			}else{
				
				for(var i = 0 ; i < rs.rows.length ; i++){
					if(rs.rows[i].usename == username){
						user_exist = 1;
					}
				}
				if(user_exist == 0) {
					socket.emit('login_success', user_exist);
				}else{
					
				}
			}
			
		});
	});

}