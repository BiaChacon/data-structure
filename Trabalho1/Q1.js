/*Implementar funções de inserir, remover e buscar registros em uma tabela hash que utiliza strings como chave e que trata colisão com uso de Sondagem Linear*/

function Registro(key, value){
    this.key = key;
    this.value = value;
}

function Hash() {

    this.tam = 0;
    this.dados = [];

    this.converte = function(key){

        var hash = 0;

        for (var i=0; i< key.length;i++){
            hash += key.charCodeAt(i)
        }

        return hash%17;

    }

    this.inserir = function(key, elemento) {

        let registro = new Registro(key, elemento);
        let h = this.converte(key);

        if(this.dados[h] == null){
            this.dados[h] = registro;
            this.tam++;
        }else{
            let i = this.buscar(key);
            this.dados[i] = registro;
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
        console.log('\tChave\tRegistro');
        for(var i=0; i<=this.dados.length; i++){
            if(this.dados[i] == null){
                console.log(i);
            }else{
                console.log(i+'\t'+this.dados[i].key+'\t'+this.dados[i].value);
            }
        }
        console.log('\n');
    }
        
}

let h = new Hash();
h.inserir("Ana Bheatriz Chacon", "anabheatriz@gmail.com");
h.inserir("Ana", "ana@gmail.com");
h.inserir("Chacon", "chacon@gmail.com");
h.inserir("Ana Beatriz", "beatriz@gmail.com");
h.inserir("Teste", "teste@gmail.com");
h.print();
h.remover("Teste");
h.print();
