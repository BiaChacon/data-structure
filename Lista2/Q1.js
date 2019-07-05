//inverter a ordem dos elementos de uma lista simples

function Node (dado){
	this.dado = dado;
	this.proximo = null;
}

function Lista(){

	let head = new Node(null);
	this.tamanho = 0;

	this.add = function(dado){

		let novo_no = new Node(dado);

		//if (head.proximo == null){
		//	head.proximo = novo_no;
		//}else{
			novo_no.proximo = head.proximo;
			head.proximo = novo_no;
		//}

		this.tamanho++;
	}
	
	this.append = function(dado){

		let novo_no = new Node(dado);

		if (head.proximo == null){
			head.proximo = novo_no;
		}else{
			current = head.proximo;
			while(current.proximo != null) {
				current = current.proximo;
			}
			current.proximo = novo_no;
		}
	}

	this.removeStart = function(){

		current = head.proximo;
		if (current == null) {
			return;
		} else{
			head.proximo = current.proximo;
			return current.dado;
		}

	}

	this.removeEnd = function(){

		previous = head;
		current = head.proximo;

		if (current == null) {
			return;
		}

		while (current.proximo != null){
			previous = current;
			current = current.proximo;
		}
		current = null;
		previous.proximo = null;
	}

	this.isEmpty = function(){
		if (head.proximo == null)
			return true;
		return false;
	}

	this.toString = function(){
		let current = head.proximo;
		let texto = '';

		while (current != null){
			texto += current.dado + (current.proximo ? '->' : '');
			current = current.proximo;
		}

		return texto;
	}

	this.size = function(){
		let cont = 0;

		current = head.proximo;
		while (current != null){
			current = current.proximo;
			cont++;
		}
		return cont;
	}

	this.addAt = function(position, dado){

		if(position >= this.size()){
			//adicionando no final
			this.append(dado);
		}else{
			if (position <= 0){
				//adicionando no inicio
				this.add(dado);
			}else{
				let novo_no = new Node(dado);
				let i = 0;

				previous = head;
				current = head.proximo;

				while (i != position){
					//iteração
					previous = current;
					current = current.proximo;
					i++;
				}
				previous.proximo = novo_no;
				novo_no.proximo = current;
			}

		}
	}

	this.search = function(dado){

		if (head.proximo == null){
			return false;
		}else{
			current = head.proximo;
			while (current != null){
				if(current.dado == dado){
					return true;
				}
				//iteração
				current = current.proximo;
			}
			return false;
		}
	}

	this.addInOrder = function (dado){

		//NOTA: Essa função deve ser usada apenas se os elementos já existentes
		//na lista estiverem em ordem crescente.

		let novo_no = new Node(dado);

		if (head.proximo == null){
			head.proximo = novo_no;
		}else{

			previous = head;
			current = head.proximo;

			while (current != null){
				if(current.dado > dado){
					previous.proximo = novo_no;
					novo_no.proximo = current;
					return;
				}
				//iteração
				previous = current;
				current = current.proximo;
			}

			//caso o if nunca seja true
			previous.proximo = novo_no;
			novo_no.proximo = null;
			return;
		}

	}

	this.trocar = function(){
		
		let listaAux = new Lista();

    	while(!this.isEmpty()){
			listaAux.add(this.removeStart());
		}

		while(!listaAux.isEmpty()){
			this.append(listaAux.removeStart());	
		}	
			
	}

}

var lista = new Lista();

lista.append(10);
lista.append(20);
lista.append(30);
lista.append(40);
lista.append(50);
console.log("Lista:");
console.log(lista.toString());
console.log("Lista invertida:");
lista.trocar();
console.log(lista.toString());


