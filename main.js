var fs = require('fs');
var chalk = require('chalk');
fs.readFile(__dirname+"/wolkenkratzer.json",function(err,data){
	if(err)console.log(err);
	var jsonData = JSON.parse(data).wolkenkratzer;
	
	jsonData.forEach(function(item){
		console.log(chalk.red("Name: "+item.name));
		console.log(chalk.green("Stadt: "+item.stadt));
		console.log(chalk.blue("Höhe: "+item.hoehe));
		console.log("------------");
	});
	
});
