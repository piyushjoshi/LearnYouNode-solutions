"use strict";

(function(){
	var http = require("http"),
		url = require("url"),
		server = http.createServer(function(req ,res){
			var parsedUrl = url.parse(req.url),
				date,
				dateInfo = {};
			if(parsedUrl.pathname === "/api/parsetime"){
				date = new Date(/iso=(.*)/.exec(parsedUrl.query)[1]);
				dateInfo.hour = date.getHours();
				dateInfo.minute = date.getMinutes();
				dateInfo.second = date.getSeconds();
			} else if(parsedUrl.pathname === "/api/unixtime"){
				date = new Date(/iso=(.*)/.exec(parsedUrl.query)[1]);
				dateInfo.unixtime = date.getTime();
			}
			res.writeHead(200, { "Content-Type" : "application/json" });
			res.end(JSON.stringify(dateInfo));
		});
	server.listen(process.argv[2]);
})();
