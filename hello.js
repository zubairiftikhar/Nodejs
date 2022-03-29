var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req,res){
	var q = url.parse(req.url, true);
	var fileName = "."+ q.pathname;	
	console.log(fileName);


	if (fileName == './') {fileName='./index';}

	fileName = fileName +".html"

	fs.readFile(fileName, function(err,data){
		if(err){
			res.writeHead(404,{'content-Type':'text/html'});
			return res.end("404 Not Fount");
		}
		res.writeHead(200,{'content-Type':'text/html'});
		res.write(data);
		//console.log('Requesting ...' + req.url);
		return res.end();
	})
}).listen(8020);

console.log('Server is up on 8020...');