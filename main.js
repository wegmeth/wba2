var fs = require('fs');
var chalk = require('chalk');
var jsonData;

var finishWriting = function finishWriting(err){
	if(err)console.log(err.toString());
	jsonData.forEach(function(item){
		console.log(chalk.red("Name: "+item.name));
		console.log(chalk.green("Stadt: "+item.stadt));
		console.log(chalk.blue("Höhe: "+item.hoehe));
		console.log("------------");
	});
};
var finshReading = function finishReading(err,data){
	if(err)console.log(err);
	jsonData = JSON.parse(data).wolkenkratzer;
	jsonData.sort(function (a, b) {
	  if (a.hoehe > b.hoehe) {
		 return 1;
	  }
	  if(a.hoehe < b.hoehe) {
		 return -1;
	  }
	  return 0;
	});
	fs.writeFile(__dirname+"/wolkenkratzer_sorted.json",JSON.stringify(jsonData,null,1),finishWriting);
}

fs.readFile(__dirname+"/wolkenkratzer.json",finshReading);
