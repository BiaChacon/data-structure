//Implementando Pilha com duas filas

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
		}
	}

	this.isEmpty = function(){
		if (fim == inicio){
			return true;
		}else{
			return false;	
		}	
	}

	this.front = function(){
		if(!this.isEmpty()){
			return dados[inicio];
		}
	}

	this.printF = function(){
		if (!this.isEmpty()){
			for (i = inicio; i < fim; i++){
				console.log(dados[i]);
			}
		}
	}
	
}

function Pilha(){

	var f1 = new Fila();
	var f2 = new Fila();

	let dados = [];
	let topo = -1;

	this.push = function(novoDado){
		if(f1.isEmpty()){
			f1.enqueue(novoDado);	
			while(!f2.isEmpty()){
				f1.enqueue(f2.front());
				f2.dequeue();
			}	
		}else if(f2.isEmpty()){
			f2.enqueue(novoDado);
			while(!f1.isEmpty()){
				f2.enqueue(f1.front());
				f1.dequeue();
			}
		}	   			
	}

	this.pop = function (){
		f1.dequeue();
	}

	this.isEmpty = function() {
		if (topo < 0) {
			return true
		}else{
			return false;
		}
	}

  	this.printP = function(){
		f1.printF();
		f2.printF();
  	}

}

var p = new Pilha();
p.push(1);
p.push(2);
p.push(3);
p.push(4);
p.push(5);
p.printP();
console.log('Tirando:');
p.pop();
p.printP();