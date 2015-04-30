exports.create_schema = function(socket, client, data){

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
}