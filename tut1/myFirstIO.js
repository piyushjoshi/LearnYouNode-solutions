"use strict";
(function(){
	var fs = require("fs"),
		buf;
	buf = fs.readFileSync(process.argv[2]);
	console.log(buf.toString().split("\n").length - 1);
})();
