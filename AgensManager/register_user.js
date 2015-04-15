exports.register_user = function(socket, client){
	
	socket.on('register_form', function(formdata){
		var error;
		var username = formdata[0].value;
		var passwd = formdata[1].value;
		var passwdCfrm = formdata[2].value;
		
		client.query("CREATE USER "+username+" PASSWORD '"+passwd+"'", function(err, rs){
			if(err){
				error = err.toString();
			}
			socket.emit('register_success', error);
		});
	});
	
	socket.on('check', function(username){
		//console.log("username: "+username)
		var error;
		var dup_user = 0;
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