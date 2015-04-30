exports.create_view = function(socket, client, data){
	
		var query;

		var name = data[0].value;
		var query = data[1].value;
		var comment = data[2].value;
		
		query = 'CREATE VIEW '+name+' AS '+query;
		
		if(comment.length!==0){
			query += "COMMENT ON VIEW "+name+" IS '"+comment+"';";
		}
		
		console.log(query);
		
		client.query(query, function(err, rs){
			var error;
			if(err){
				error = err.toString();
			}else{
				console.log("View created.");
			}
			socket.emit('view_success', error);
		});

}