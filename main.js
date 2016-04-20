var fs = require('fs');
fs.readFile(__dirname+"/wolkenkratzer.json",function(err,data){
	if(err)console.log(err);
	var jsonData = JSON.parse(data).wolkenkratzer;
	
	jsonData.forEach(function(item){
		console.log("Name: "+item.name);
		console.log("Stadt: "+item.stadt);
		console.log("Höhe: "+item.hoehe);
		console.log("------------");
	});
	
});
