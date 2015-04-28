//실행 전 주의사항:  1) connectedDb 2) constring 3) app.use 경로 4) readFile 경로 바꾸기

//-------------------- app.html 불러오는 app모듈
var express = require('express');
var fs = require('fs');
var app = express();
var http = require('http');
var pg = require('pg');
var jade = require('jade');
var create_table = require('./create_table');
var object_tree = require('./object_tree');
var create_index = require('./create_index');
var create_schema = require('./create_schema');
var create_view = require('./create_view');
var create_function = require('./create_function');
var create_trigger = require('./create_trigger');
var login_user = require('./login_user');
var sessions = require("client-sessions");

//1) connectedDb
var sourcePath = "C:/Users/Johnahkim/workspace/test/public";
//var sourcePath = "C:/Users/user/git/AgensManager/agens-manager/AgensManager/public";
var fpath = "C:/Users/Johnahkim/workspace/test/";
//var fpath = "C:/Users/user/git/AgensManager/agens-manager/AgensManager/";

//2) constring (postgres://username:password@localhost/database)

var createTable;
//3) 소스 경로
app.use('/public', express.static(sourcePath));

//포트 연결
//app.set('port', 7474);
app.set('port', 3000);
//서버 연결

var server = http.createServer(app).listen(app.get('port'), function(){
	var io = require('socket.io').listen(server);
	// socket.io 선언
	console.log('server listening on 3000');
	var conString = "postgres://postgres:1111@localhost/postgres";
	
	io.on('connection', function(socket){
		
		socket.setMaxListeners(0);//Listeners Unlimited
		
		var client = new pg.Client(conString);
		client.connect(function(err){
			if(err){
				console.error('couldnt connect','err');
			}
			client.query('select datname from pg_database WHERE datistemplate=\'f\';', function(err, result){
				if(err){
					//console.log(err);
				}else{
					var arrDB = [];
					for(var i=0; i < result.rows.length; i++){
						arrDB.push(result.rows[i].datname);
					}
					socket.emit('db', arrDB);
				}
				client.end();
			});	
			
		});
		
		socket.on('set_dbname', function (dbname){
			console.log("dbname: "+dbname)
			client = new pg.Client("postgres://postgres:1111@localhost/"+dbname);
			client.connect(function(err){
				if(err){
					console.error('couldnt connect','err');
				}
				//create table, create index
				client.query('select schema_name from information_schema.schemata where schema_name not like \'pg_%\' and schema_name <> \'information_schema\'', function(err, result){
					if(err){
						console.log(err);
					}
						var arrSch = [];
						for(var i=0; i < result.rows.length; i++){
							arrSch.push(result.rows[i].schema_name);
						}
						console.log(arrSch);
						socket.emit('scname', {schema: arrSch});
				});	
				//create function
				client.query("select schema_name from information_schema.schemata order by 1", function(err, rs){
					if(err){
						console.log(err)
					}else{
						var schemas = [];
						for(var i = 0 ; i < rs.rows.length ; i++){
							schemas.push(rs.rows[i].schema_name);
						}
						socket.emit('schemas', schemas);
					}
				});
				//create schema
				client.query("select rolname from pg_authid", function(err, rs){
					if(err){
						console.log(err);
					}else{
						var roles = [];
						for(var i=0; i < rs.rows.length; i++){
							roles.push(rs.rows[i].rolname);
						}
						socket.emit("get_role", roles);
					}
				});
				
				//create table for duplicate names
				client.query('SELECT DISTINCT(table_name) FROM information_schema.tables', function(err, rs){
					if(err){
						console.log('table err: '+err)
					}
						var table = [];
						for(var i = 0 ; i < rs.rows.length ; i++){
							table[i] = rs.rows[i].table_name;
						}
						socket.emit('table', table);
				});
				
			});
		});
		
		//submit
		socket.on('table_form', function(formdata){
			create_table.create_table(socket, client, formdata);
		});
		socket.once('index_form', function(formdata){
			create_index.create_index(socket, client, formdata);
		});
		socket.on('schema_form', function(data){
			create_schema.create_schema(socket, client, data);
		});
		socket.on('view_form', function(data){
			create_view.create_view(socket, client, data);
		});
		socket.on('function_form', function(formdata){
			create_function.create_function(socket, client, formdata);
		});
		
		//object browser
		socket.on('set_scname_table', function (scname){
			arrTab = [];
			//get table list
			client.query('SELECT DISTINCT(table_name) FROM information_schema.tables WHERE table_schema = \''+scname+'\' AND table_type = \'BASE TABLE\' ORDER BY table_name ASC;', function(err, trs){
				if(err){
					console.log("set_scname_table err: "+err)
				}
				for(var k=0; k < trs.rows.length; k++){
					arrTab.push(trs.rows[k].table_name);
				}
				socket.emit('tabname', {table: arrTab});
			});
		});
		
		//스키마 뷰 클릭, 뷰 전송
		socket.on('set_scname_view', function (scname){
			arrView = [];
			//get view list
			client.query('SELECT DISTINCT(table_name) FROM information_schema.views WHERE table_schema = \''+scname+'\' ORDER BY table_name ASC;', function(err, vrs){
				if(err){
					console.log("set_scname_view err: "+err);
				}else{
					for(var k=0; k < vrs.rows.length; k++){
						arrView.push(vrs.rows[k].table_name);
					}
					socket.emit('viewname', {view: arrView});
				}
			});
		});
		//스키마 함수 클릭, 함수 전송
		socket.on('set_scname_func', function (scname){
			arrFunc = [];
			//get function list
			client.query('select proname from pg_proc inner join pg_namespace ns on (pg_proc.pronamespace = ns.oid) where ns.nspname = \''+scname+'\' order by proname;', function(err, frs){
				if(err){
					console.log("set_scname_func err: "+err)
				}else{
					for(var k=0; k < frs.rows.length; k++){
						arrFunc.push(frs.rows[k].proname);
					}
					socket.emit('funcname', {func: arrFunc});
				}
			});
		});
		
		
		//테이블 컬럼 클릭, 컬럼 전송
		socket.on('set_tabname_col', function (data){
			
			//get column list
			client.query('SELECT column_name FROM information_schema.columns WHERE table_schema=\''+data.scname+'\' and table_name =\''+data.tabname+'\' order by column_name;', function(err, crs){
				if(err){
					console.log('set_tabname_col err: '+err)
				}
				var arrCol = []
				for(var l=0; l < crs.rows.length; l++){
					arrCol.push(crs.rows[l].column_name);
				}
				console.log(arrCol);
				socket.emit('colname', {column: arrCol});
			});
		});
		
		//테이블 제약키 클릭, 제약키 전송
		socket.on('set_tabname_cons', function (data){
			arrCons = [];
			//get constraint list
			client.query('select constraint_name from information_schema.constraint_column_usage where table_schema=\''+data.scname+'\' and table_name=\''+data.tabname+'\' order by constraint_name;', function(err, consrs){
				if(err){
					console.log('set_tabname_cons err: '+err)
				}else{
					for(var l=0; l < consrs.rows.length; l++){
						arrCons.push(consrs.rows[l].constraint_name);
					}
					socket.emit('consname', {constraint: arrCons});
				}
			});
		});
		
		//테이블 인덱스 클릭, 인덱스 전송
		socket.on('set_tabname_ind', function (data){
			arrInd = [];
			//get index list
			client.query('select relname from pg_class c, pg_index i, (select distinct(relfilenode) from pg_class, (select oid from pg_namespace where nspname = \''+data.scname+'\') s where relname = \''+data.tabname+'\' and relnamespace=s.oid) t where c.relkind = \'i\' and i.indexrelid = c.oid and i.indrelid = t.relfilenode and c.oid NOT IN (select conindid from pg_constraint);', function(err, irs){
				if(err){
					console.log("set_tabname_ind err: "+err)
				}else{
					for(var l=0; l < irs.rows.length; l++){
						arrInd.push(irs.rows[l].relname);
					}
					socket.emit('indname', {index: arrInd});
				}
			});
		});
		
		//create function
		socket.on('schema', function(schema){
			types = [];
			var query = "";
			if(schema == "Basic datatype") {
				query = "select typname as t from pg_type, (select oid from pg_namespace where nspname = 'pg_catalog') n where typnamespace = n.oid and typtype <> 'c'";
			}else{
				query = "select table_name as t from information_schema.tables where table_schema = '"+schema+"' order by 1";
			}
			
			client.query(query, function(err, rs){
				if(err){
					console.log("schema error: "+err);
				}else{
					for(var i = 0 ; i < rs.rows.length ; i++){
						if(rs.rows[i].t){
							types.push(rs.rows[i].t);
						}
					}
					socket.emit('types', types);
				}
			});
		});
		
		//create trigger
		socket.on('username', function(username){
			var proname = [];
			client.query("select proname from pg_proc, (select usesysid from pg_user where usename='"+username+"') u where proowner=u.usesysid or prorettype = 2279 order by proname", function(err, rs){
				if(err){
					console.log(err);
				}else{
					for(var i = 0 ; i < rs.rows.length ; i++){
						proname.push(rs.rows[i].proname);
					}
					socket.emit('trigger_function', proname);
				}
			});
		});
	});
});


app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({
	secret:'ssshhh', cookie: {maxAge: 6000000}
}));
app.use(app.router);
var appCnt = 0;

app.post('/login', function(request, response){
	request.session.username = request.param('username');
	request.session.passwd = request.param('passwd');
	request.session.database = request.param('database');//===database postgres 넘어옴
	response.redirect('/');
});
//app.post('/db', function(request, response){
//	request.session.database = request.param('database');
//	response.redirect('/');
//});
app.get('/database', function(req, res){
	res.json(req.session.database);
});
app.post('/logout', function(request, response){
	request.session.regenerate(function(err){
		if(err){
			console.log(err);
		}else{
			console.log('session regenerated');
			response.redirect('/');
		}
	});
});

//4) readFile 경로
app.get('/', function (req, res){
	appCnt++;
	console.log(appCnt);
	//console.log(req.session);
	fs.readFile(fpath+'app.html', function(error, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);			//ja021017
	});
});


app.get('/create_table.html', function (req, res){
	fs.readFile(fpath+'create_table.html', function(error, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);			//ja021017
	});
});
app.get('/create_index.html', function (req, res){
	fs.readFile(fpath+'create_index.html', function(error, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);			
	});
});
app.get('/create_schema.html', function (req, res){
	fs.readFile(fpath+'create_schema.html', function(error, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);			
	});
});
app.get('/create_view.html', function (req, res){
	fs.readFile(fpath+'create_view.html', function(error, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);			
	});
});
app.get('/create_function.html', function (req, res){
	fs.readFile(fpath+'create_function.html', function(error, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);			
	});
});
app.get('/create_trigger.html', function (req, res){
	fs.readFile(fpath+'create_trigger.html', function(error, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);			
	});
});
app.get('/login_user.html', function (req, res){
	fs.readFile(fpath+'login_user.html', function(error, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);
	});
});

