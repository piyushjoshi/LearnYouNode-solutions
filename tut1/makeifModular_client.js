"use strict";
(function(){
	var mymodule = require("./makeitModular_module.js"),
		i = 0;
	
	mymodule(process.argv[2], process.argv[3], function(err, list){
		if(!err){
			for( ; i < list.length; i++ ){
				console.log(list[i]);
			}
		} else{
			console.log("ERROR: "+err);
		}
	});
})();
