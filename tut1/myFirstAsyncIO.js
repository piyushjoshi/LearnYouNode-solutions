"use strict";
(function(){
	var fs = require("fs");
	fs.readFile(process.argv[2], "utf8", function(err, buff){
		if(!err){
			console.log(buff.split("\n").length - 1);
		} else{
			console.log("ERROR: "+err);
		}
	});
})();
