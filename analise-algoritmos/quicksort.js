function particao(items, inferior, superior) {

    var pivo = items[Math.floor((inferior + superior) / 2)]; //elemento do meio como pivo

    while (inferior <= superior) {
        while (items[inferior] < pivo) {
            inferior++;
        }
        while (items[superior] > pivo) {
            superior--;
        }
        if (inferior <= superior) {
			[items[inferior], items[superior]] = [items[superior], items[inferior]]
            inferior++;
            superior--;
        }
	}
	
    return inferior;
}

function quicksort(vetor, inferior, superior) {

    if (vetor.length > 1) {
        var pivo = particao(vetor, inferior, superior);
        if (inferior < pivo - 1) { 
            quicksort(vetor, inferior, pivo - 1);
        }
        if (pivo < superior) {
            quicksort(vetor, pivo , superior);
        }
    }
    return vetor;
}
/*
const numbers = [0, 1, 2, 3, 4, 5];
sortedArray = quicksort(numbers, 0, numbers.length-1);
console.log(sortedArray);

*/

for(var i=1; i<=25; i++){
	//var i=6
    console.log('\n#Execução '+i+' de 25');
    
    var fs = require("fs");
    var file = fs.readFileSync("./numbers.dat", "utf-8");
    var numbers = file.split("\r\n").map(Number);

    //console.log("ultimo antes = " + numbers[numbers.length-1]);

    var hrstart = process.hrtime();
    sortedArray = quicksort(numbers, 0, numbers.length-1);
    var hrend = process.hrtime(hrstart);
    console.log('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);


    //console.log("ultimo depois = " + sortedArray[sortedArray.length-1]);

    const used = process.memoryUsage();
    for (let key in used) {
        console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
    }

}

//var ofs = require('fs');

//var file = ofs.createWriteStream("out.dat", "utf-8");
//numbers.forEach(function(value) { file.write(value+'\r\n'); });
//file.end();
