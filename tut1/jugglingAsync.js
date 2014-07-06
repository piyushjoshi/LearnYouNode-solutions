"use strict";

(function(){
	var http = require("http"),
		bl = require("bl"),
		dataContainer = [],
		counter = 0,
		collectResponse = function(response, index){
			response.pipe(bl(function(err, data){
				if(!err){
					dataContainer[index] = data.toString();
					counter++;
					if(counter === 3){
						console.log(dataContainer[0]);
						console.log(dataContainer[1]);
						console.log(dataContainer[2]);
					}
				} else{
					console.log("ERROR: " + err);
				}
			}));
		};
		
	http.get(process.argv[2], function(response){
		collectResponse(response, 0);
	});
	http.get(process.argv[3], function(response){
		collectResponse(response, 1);
	});
	http.get(process.argv[4], function(response){
		collectResponse(response, 2);
	});
})();
