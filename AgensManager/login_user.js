exports.login_user = function(socket, client, done){
	
	socket.on('login_check', function(formdata){
		var username = formdata[0].value;
		var passwd = formdata[1].value;
		var user_exist = 0;
		
		function loginCheck(user){
			if(user == 0) {
				socket.emit('login_success', {username: false, passwd:false});
			}else{
				client.query("select passwd = '"+passwd+"' as p from pg_user_passwd where usename = '"+username+"'", function(err, rs){
					if(err){
						console.log(err);
					}
					if(rs.rows[0].p){
						socket.emit('login_success', {username: username, passwd:passwd});
					}else{
						socket.emit('login_success', {username: true, passwd:false});
					}
				});	
			}
		}
		
		client.query("select usename from pg_user", function(err, rs){
			if(err){
				console.log(err);
			}else{
				for(var i = 0 ; i < rs.rows.length ; i++){
					if(rs.rows[i].usename == username){
						user_exist = 1;
					}
				}
				loginCheck(user_exist);
			}
			
		});
	});

}