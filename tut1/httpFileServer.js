"use strict";

(function(){
	var http = require("http"),
		fs = require("fs"),
		server = http.createServer(function(request, response){
			response.writeHead(200, {'content-type' : 'text/plain'});
			fs.createReadStream(process.argv[3]).pipe(response);
		});
	
	server.listen(process.argv[2]);
	
})();
