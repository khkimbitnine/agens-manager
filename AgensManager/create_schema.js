exports.create_schema = function(socket, client, done){
 //select rolname from pg_authid
	var roles = [];
		client.query("select rolname from pg_authid", function(err, rs){
			if(err){
				console.log(err);
			}else{
				for(var i=0; i < rs.rows.length; i++){
					roles.push(rs.rows[i].rolname);
				}
				socket.emit("get_role", roles);
			}
		});
		
		socket.on('schema_form', function(data){
			var name = data[0].value;
			var owner = data[1].value;
			var comment = data[2].value;
			var query;
			
			query = "CREATE SCHEMA "+name+" AUTHORIZATION "+owner+";";
			
			if(comment.length!==0) query += "COMMENT ON SCHEMA "+name+" IS '"+comment+"';";
			
			client.query(query, function(err, rs){
				if(err){
					console.log(err);
				}else{
					console.log(query);
					console.log("Schema created.")
				}
			});
		});
}