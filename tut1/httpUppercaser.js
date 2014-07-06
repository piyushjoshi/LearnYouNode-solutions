"use strict";
(function(){
	var http = require("http"),
		map = require("through2-map"),
		server = http.createServer(function(req, res){
			if(req.method === 'POST'){
				req.pipe(map(function(chunk){
					return chunk.toString().toUpperCase();
				})).pipe(res);
			} else{
				res.end("GET not supported\n");
			}
		});
	server.listen(process.argv[2]);
})();
