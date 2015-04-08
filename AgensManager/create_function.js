exports.create_function = function(socket, client){
	var returns = [];
	client.query("select typname from pg_type where not substr(typname, 1, 3) like '%pg%' and not typname like '%seq' and (typcategory='B' or typcategory = 'C' or typcategory = 'D');", function(err, rs){
		if(err){
			console.log(err)
		}else{
			for(var i = 0 ; i < rs.rows.length ; i++){
				if(rs.rows[i].typname){
					returns.push(rs.rows[i].typname);
				}
			}
			socket.emit('returns', returns);
		}
	});
	
	socket.once('function_form', function(formdata){
		
	});
	
}