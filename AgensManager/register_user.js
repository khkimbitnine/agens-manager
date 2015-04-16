exports.register_user = function(socket, client){

	socket.on('register_form', function(formdata){
		var error;
		var username = formdata[0].value;
		var passwd = formdata[1].value;
		var passwdCfrm = formdata[2].value;
		
		client.query("CREATE USER "+username+" PASSWORD '"+passwd+"'", function(err, rs){
			if(err){
				error = err.toString();
			}else{
				var query = "CREATE EXTENSION IF NOT EXISTS chkpass;"
					+"CREATE TABLE IF NOT EXISTS pg_user_passwd(usename name, usecreatedb bool, usesuper bool, usecatupd bool, userepl bool, passwd chkpass, valuntil abstime, useconfig text[]);"
					+"INSERT INTO pg_user_passwd (usename, usecreatedb, usesuper, usecatupd, userepl, valuntil, useconfig) SELECT usename, usecreatedb, usesuper, usecatupd, userepl, valuntil, useconfig FROM pg_user WHERE usename = '"+username+"';"
					+"UPDATE pg_user_passwd SET passwd ='"+passwd+"' WHERE usename='"+username+"';";
				client.query(query, function(err, rs){
					if(err){
						console.log("pg_user_passwd error: "+err);
					}
				});
			}
			socket.emit('register_success', error);
		});
	});
	
	socket.on('check', function(username){
		
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