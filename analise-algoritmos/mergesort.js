function mergesort(vetor){

	//console.log(vetor);

	if(vetor.length === 1){
		return vetor;
	}

	const mid = Math.floor(vetor.length / 2);

	const esquerda = vetor.slice(0, mid);
	const direita = vetor.slice(mid, vetor.length);

	return merge (mergesort(esquerda), mergesort(direita));
}


function merge(esquerda, direita){

	var result = [];
	var il = 0;
	var ir = 0;

	while(il < esquerda.length && ir < direita.length){
		if(esquerda[il] < direita[ir]){
			result.push(esquerda[il]);
			il++;
		}else{
			result.push(direita[ir]);
			ir++;
		}
	}

	//return result.concat(esquerda.slice(il)).concat(direita.slice(ir));

	
	while(il < esquerda.length){
		result.push(esquerda[il]);
		il++;
	}

	while(ir < direita.length){
		result.push(direita[ir]);
		ir++;
	}
	
	return result;
}


//const array = [5,4,8,1,2,6,7,3];
//console.log(mergesort(array));


for(var i=1; i<=25; i++){
	console.log('\n#Execução '+i+' de 25');

	var fs = require("fs");
	var file = fs.readFileSync("./numbers.dat", "utf-8");
	var numbers = file.split("\r\n").map(Number);

	var hrstart = process.hrtime();
	mergesort(numbers);
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