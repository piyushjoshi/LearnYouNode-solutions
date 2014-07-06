"use strict";

(function(){
	var net = require("net"),
		zerofill = function(i){
			return (i > 9 ? i : "0" + i);
		},
		now = function(){
			var date = new Date();
			return zerofill(date.getFullYear()) + "-"
				+ zerofill(date.getMonth()+1) + "-"
				+ zerofill(date.getDate()) + " "
				+ zerofill(date.getHours()) + ":"
				+ zerofill(date.getMinutes());
		},
		server = net.createServer(function(socket){
			socket.end(now() + "\n");
		});
	
	server.listen(process.argv[2]);
})();
