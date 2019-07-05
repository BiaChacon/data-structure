//PILHA COM LISTA DUPLAMENTE ENCADEADA

function Node (dado){
	this.dado = dado;
	this.anterior = null;
	this.proximo = null;
}

function ListaDuplamenteEncadeada(){

	let head = null;
	let tail = null;

	this.add = function(dado){

		let novo_no = new Node(dado);

		if(this.isEmpty()){
			head = novo_no;
			tail = novo_no;
			novo_no.anterior = null;
			novo_no.proximo = null;
		}else{
			novo_no.proximo = head;  
			novo_no.anterior = null;
			
			head.anterior = novo_no;
			head = novo_no;
		}

	}
	
	this.append = function(dado){

		let novo_no = new Node(dado);

		if(this.isEmpty()) {
			head = novo_no;
			tail = novo_no;
			novo_no.anterior = null;
			novo_no.proximo = null;
		} else{
			novo_no.proximo = null;  
			novo_no.anterior = tail;
			
			tail.proximo = novo_no;
			tail = novo_no;
		}
	}

	this.remove = function(info){

		if(!this.isEmpty()){
			current = head;
			next = head.proximo;
			last = tail;

			if(current.dado == info){
				return this.removeStart();
			}else if(last.dado == info){
				return this.removeEnd();
			}else{
				while (next != null){
					if(next.dado == info){
						aux = next.proximo;
						current.proximo = next.proximo;
						aux.anterior = current;
						return true;
					}
					//iteração
					current = next;
					next = next.proximo;
				}
			}
		}

		return false;
	}

	this.removeStart = function(){

		if(!this.isEmpty()) {
			start = head;
			next = head.proximo;

			head = next;
			if(next != null){
				head.anterior = null;
			}

			return true;
		}
		return false;
	}

	this.removeEnd = function(){

		if(!this.isEmpty()) {
			end = tail;
			previous = tail.anterior;

			tail = previous;
			tail.proximo = null;
			return true;
		}
		return false;

	}

	this.isEmpty = function(){
		return head == null;
	}

	this.toString = function(){
		let current = head;
		let texto = '';

		while (current != null){
			texto += current.dado + (current.proximo ? '->' : '');
			current = current.proximo;
		}

		return texto;
	}

	this.size = function(){
		let cont = 0;

		current = head;
		while (current != null){
			current = current.proximo;
			cont++;
		}
		return cont;
	}

	this.search = function(info){
		let current = head;

		while (current != null){
			if(current.dado == info){
				return true;
			}
			current = current.proximo;
		}
		return false;
	}

	this.asArray = function(){
		let current = head;
		let dados = [];

		while (current != null){
			dados.push(current.dado);
			current = current.proximo;
		}

		return dados;
	}

}

function Pilha(){

    let set = new ListaDuplamenteEncadeada();

	this.push = function (novoDado){
		set.add(novoDado);
	}

	this.pop = function(){
		set.removeStart();
	}


	this.printpilha = function(){
		console.log(set.toString());
	}

}

let p = new Pilha();
p.printpilha();

p.push(10);
p.push(20);
p.push(30);
p.printpilha();
p.pop();
p.printpilha();
