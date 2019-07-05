//Transformando numero decimal em binario com pilha

function Pilha(){

	let dados = [];
	let topo = -1;
    let resto = 0;

	this.push = function (novoDado){
		topo = topo +1;
		dados[topo] = novoDado;
	}

	this.pop = function(){
		topo = topo -1;
		return (dados[topo]);
		
	}

	this.peek = function(){
		return dados[topo];
	}

	this.isEmpty = function() {
		if (topo < 0) {
			return true;
		} else 
			return false;
	}

	this.print = function(){
		result = '';
		while(!this.isEmpty()){
			result += this.peek() + ' ';
			this.pop();
		}
		return result;
	}

    this.transBi = function(num) {
		
		let resto;

		while(num!=0){
			resto=Math.floor(num%2);
			this.push(resto);
			num=Math.floor(num/2);
		}	

	}

}

let p = new Pilha();
let n = 10;

console.log('Número Decimal: '+ n);
p.transBi(n);
console.log('Número Binario: '  + p.print());