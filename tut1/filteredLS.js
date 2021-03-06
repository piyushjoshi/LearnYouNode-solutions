"use strict";

(function(){
	var fs = require("fs"),
		path = require("path"),
		i = 0,
		ext = "."+process.argv[3];
	fs.readdir(process.argv[2], function(err, list){
		if(!err){
			for( ; i<list.length; i++ ){
				if(path.extname(list[i]) === ext){
					console.log(list[i]);
				}
			}
		} else{
			console.log("ERROR:"+err);
		}
	});
})();
