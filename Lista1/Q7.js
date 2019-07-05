//Gerenciando fila de um caixa

function Fila(){

	let dados = [];
	let fim = 0;
	let inicio = 0;

	this.enqueue = function(entrada){
		dados[fim++] = entrada;
	}

	this.dequeue = function(){
		if(!this.isEmpty()){
			return inicio++;
		}else{
			console.log("Vazia.");
		}
	}

	this.front = function(){
		if(!this.isEmpty()){
			return dados[inicio];
		}else{
			console.log("Vazia.");
		}
	}

	this.isEmpty = function(){
		if (fim == inicio){
			return true;
		}else{
			return false;	
		}	
	}

	this.size = function(){
		return fim-inicio;
	}

	this.print = function(){
		if (!this.isEmpty()){
			for (i = inicio; i < fim; i++){
				console.log(dados[i]);
			}
		}else{
			console.log("Fila vazia");
		}
		console.log("Fim fila...\n");
	}
}

var caixa = new Fila();
var receber1 = new Fila();
var receber2 = new Fila();
var receber3 = new Fila();

console.log('Fila do Caixa: ');
caixa.enqueue('pessoa1');
caixa.enqueue('pessoa2');
caixa.enqueue('pessoa3');
caixa.enqueue('pessoa4');
caixa.enqueue('pessoa5');
caixa.print();

while(!caixa.isEmpty()){
	if(receber1.size() <= receber2.size() && receber1.size() <= receber3.size()){
		receber1.enqueue(caixa.front());
		caixa.dequeue();
	}else if(receber2.size() <= receber3.size()){
		receber2.enqueue(caixa.front());
		caixa.dequeue();
	}else{
		receber3.enqueue(caixa.front());
		caixa.dequeue();
	}	
}

console.log('Fila para receber 1: ');
receber1.print();

console.log('Fila para receber 2: ');
receber2.print();

console.log('Fila para receber 3: ');
receber3.print();

console.log('Fila do Caixa: ');
caixa.print();




