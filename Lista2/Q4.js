//HEAP MINIMO

function Node(data, priority){
	this.data = data;
	this.priority = priority;
}

function HeapMinimo(){

	this.tree = {};
	this.size = 0;

	this.tree[0] = new Node(0, -99999999);

	this.add = function(node){

		this.size++;
		this.tree[this.size] = node; 

		var pos_filho = this.size;
		var pos_pai = Math.trunc(pos_filho / 2);

		while((this.tree[pos_pai]).priority > node.priority){

			this.tree[pos_filho] = this.tree[pos_pai];
			pos_filho = pos_pai;
			pos_pai = Math.trunc(pos_filho / 2);
			
		}
		this.tree[pos_filho] = node;

	

	}

	this.remove = function(){
		var maior, ultimo, pos_filho, pos_pai;
    
		maior = this.tree[1];    
		ultimo = this.tree[this.size];

		this.size--;
		
		this.tree[1] = ultimo;
		
		for (pos_pai = 1; pos_pai * 2 <= this.size; pos_pai = pos_filho) {

			pos_filho = pos_pai * 2;
	
			if ((pos_filho != this.size) && (this.tree[pos_filho].priority < this.tree[pos_filho + 1].priority)) {
				pos_filho++;
			}
	
			if (ultimo.priority < this.tree[pos_filho].priority) {
				this.tree[pos_pai] = this.tree[pos_filho];
			} else {
				break;
			}
		}
		this.tree[pos_pai] = ultimo;

		return maior;
	}

	this.print = function(){
		let dados = [];

		for(i = 1; i <= this.size; i++){
			dados.push(this.tree[i].priority);
		}

		return dados;
	}

}

let h1 = new HeapMinimo();

console.log("Adicionando:");
h1.add(new Node('Taniro', 5));
console.log(h1.print());
h1.add(new Node('João', 10));
console.log(h1.print());
h1.add(new Node('Pedro', 20));
console.log(h1.print());
h1.add(new Node('Maria', 1));
console.log(h1.print());
h1.add(new Node('Chico', 70));
console.log(h1.print());
h1.add(new Node('Bob', 30));
console.log(h1.print());

console.log("Removendo:");
h1.remove();
console.log(h1.print());
h1.remove();
console.log(h1.print());
h1.remove();
console.log(h1.print());
h1.remove();
console.log(h1.print());
h1.remove();
console.log(h1.print());
h1.remove();
console.log(h1.print());
