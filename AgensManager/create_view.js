exports.create_view = function(socket, client, done){
	var query;
	socket.on('view_form', function(data){
		var name = data[0].value;
		var query = data[1].value;
		var comment = data[2].value;
		
		query = 'CREATE VIEW '+name+' AS '+query+";";
		
		if(comment.length!==0){
			query += "COMMENT ON VIEW "+name+" IS '"+comment+"';";
		}
		client.query(query, function(err, rs){
			console.log(query);
			if(err){
				console.log(err)
			}else{
				console.log("View created.");
			}
			done();
		});
	});

}