//Trocar topo da pilha com a base

function Pilha(){

	let dados = [];
	let topo = -1;

	this.push = function (novoDado){
		topo = topo +1;
		dados[topo] = novoDado;
	}

	this.pop = function(){
		topo = topo -1;
	}

	this.peek = function(){
		return dados[topo];
	}

	this.isEmpty = function() {
		if (topo < 0) {
			return true
		}
	}
	  
 	this.size = function(){
		return topo+1;
	}

	this.printpilha = function(){
		if (!this.isEmpty()){
			for (i = 0; i <= topo; i ++){
				console.log(dados[i]);
			}
	    }
  	}

	this.trocarTopoComBase = function (pilhaAux) {
		
		let inicio = this.peek();
		let fim = 0;

		this.pop(); 

		while(this.size() > 1){ 
			pilhaAux.push(this.peek());
			this.pop();
		}
			
		fim = this.peek();
		this.pop();

		this.push(inicio);

		while(!pilhaAux.isEmpty()){
			this.push(pilhaAux.peek());
			pilhaAux.pop();
		}

		this.push(fim);

	}  

}

let p = new Pilha();
let pAux = new Pilha();

p.printpilha();
p.push(10);
p.push(20);
p.push(30);
p.push(40);
p.push(50);
p.printpilha();

p.trocarTopoComBase(pAux);
console.log('Trocado:');
p.printpilha();
