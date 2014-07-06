"use strict";
(function(){
	var i,sum = 0;
	for(i = 2; i < process.argv.length; i++){
		sum += +process.argv[i];
	}
	console.log(sum);
})();


