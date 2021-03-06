"use strict";
(function(){
	var fs = require("fs"),
		path = require("path"),
		filteredList = [],
		i = 0;
	module.exports = function(dirname, extname, callback){
		try{
			fs.readdir(dirname, function(err, list){
				if(err){
					callback(err);
					return;
				} else{
					extname = "." + extname;
					for( ; i < list.length; i++){
						if(path.extname(list[i]) === extname){
							filteredList.push(list[i]);
						}
					}
					callback(null, filteredList);
					return;
				}
			});
		} catch(err){
			callback(err);
			return;
		}
	};
})();
