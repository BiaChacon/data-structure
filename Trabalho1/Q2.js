/*Implementar funções de inserir, remover e buscar registros em uma tabela hash que trata que trata colisão com uso de listas ligadas*/ 

function Registro(key, value){
    this.key = key;
	this.value = value;
	this.proximo = null;
}

function Hash() {

	let r = new Registro(null);
    this.tam = 0;
    this.dados = [];

    this.converte = function(key){

        var hash = key%17;
        return hash;

    }

    this.inserir = function(key, elemento) {

        if(this.dados[h] == null){
			let registro = new Registro(key, elemento);
        	let h = this.converte(key);
            this.dados[h] = registro;
            this.tam++;
        }else{
			let novo_registro = new Registro(key, elemento);
			novo_registro.proximo = r.proximo;
			r.proximo = novo_registro;
            this.tam++;
        }

    }

    this.remover = function(key) {
   
        let i = this.buscar(key);
        if(i == false){
            console.log('A chave não foi encontrada.\n');
			      return false;
        }else if(this.tam == 0){
            console.log('A tabela esta vazia.\n');
			      return false;
        }else{
            this.dados[i] = null;   
        }
   
    }

    this.buscar = function(elemento) {

        let key = this.converte(elemento);

        if(this.dados[key] == null){
            return false;
        }else{
            let i=0;
            while(this.dados[key+i] != null){
                i++;
            }
           return key; 
        }

    }

    this.print = function(){
        
        for(var i=0; i<=this.dados.length; i++){
            if(this.dados[i] == null){
                console.log(i);
            }else{
                console.log(i+'\t'+this.dados[i].key+'\t'+this.dados[i].elemento+'\t'+this.dados[i].proximo);
            }
        }
        console.log('\n');
    }
        
}

let h = new Hash();
h.inserir(10, "anabheatriz@gmail.com");
h.inserir(23, "ana@gmail.com");
h.inserir(14, "chacon@gmail.com");
h.inserir(71, "beatriz@gmail.com");
h.print();
h.remover(10);
h.print();