//Implementando Fila com duas pilhas

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
		}else{
			return false;
		}
	}
	  
 	this.size = function(){
		return topo+1;
	}
    
    this.print = function(){
			if (!this.isEmpty()){
				for (i = 0; i <= topo; i ++){
					console.log(dados[i]);
				}
	    }
    }
}

function Fila(){

    var p1 = new Pilha();
    var p2 = new Pilha();

	let dados = [];

	this.enqueue = function(dado){
		p1.push(dado);
	}

	this.dequeue = function(){
		while(!p1.isEmpty()){
			p2.push(p1.peek());
			p1.pop();
		}

		p2.pop();

		while(!p2.isEmpty()){
			p1.push(p2.peek());
			p2.pop();
		}
	}
	
	this.isEmpty = function(){
		if (p1.isEmpty()){
			return true;
		}else{
			return false;	
		}	
	}
	
	this.print = function(){
		p1.print();
		p2.print();
	}

}

var f = new Fila();
f.enqueue(10);
f.enqueue(20);
f.enqueue(30);
f.enqueue(40);
f.enqueue(50);
f.print();
console.log('Tirando:');
f.dequeue();
f.print();