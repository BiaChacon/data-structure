function selectionsort(vetor) {
	
	for (var i = 0; i < vetor.length; i++){
		var indiceMenor = i;
		for (j = i; j < vetor.length; j++){
			if (vetor[indiceMenor] > vetor[j]) {
				indiceMenor = j;
			}
		}
		if (i != indiceMenor){
			//troca
			[vetor[i], vetor[indiceMenor]] = [vetor[indiceMenor], vetor[i]];
		}
	}
}

for(var i=1; i<=25; i++){
    //var i=1;
	console.log('\n#Execução '+i+' de 25');

	var fs = require("fs");
	var file = fs.readFileSync("./numbers.dat", "utf-8");
	var numbers = file.split("\r\n").map(Number);


	var hrstart = process.hrtime();

	selectionsort(numbers);

	var hrend = process.hrtime(hrstart);

	console.log('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);

	const used = process.memoryUsage();
	for (let key in used) {
	console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
	}

}

//var ofs = require('fs');

//var file = ofs.createWriteStream("out.dat", "utf-8");
//numbers.forEach(function(value) { file.write(value+'\r\n'); });
//file.end();