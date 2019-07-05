//Fila Circular

function FilaCircular(t){

  let dados = [t];
  let fim = 0;
  let inicio = 0;
  let tamanho = 0;
                                                                          
  this.enqueue = function(dado){
    if(tamanho < t){
      dados[fim] = dado;
      fim++;
      tamanho++;
      if (fim == t) {
            fim = 0;
      }
    }else{
      console.log("Fila Cheia!");
    }
  }  

  this.dequeue = function(){
    if(tamanho>0){
      let  d = dados[inicio];
      inicio++;
      tamanho--;
      if(inicio==t){
        inicio = 0;
      }
      return d;
		}else{
      console.log("Fila Vazia!");
		}
  } 

  this.isEmpty = function(){
      if (tamanho == 0){
        return true;
      } 
  }

  this.front = function(){
		if(!this.isEmpty()){
			return dados[inicio];
		}else{
			console.log("Fila Vazia!");
		}
  }
  
  this.size = function(){
		return fim-inicio;
	}

  this.print = function(){
		console.log("Printando fila...");
    if(inicio < fim){
      for(var i = inicio; i < fim; i++){
        console.log(dados[i]);
      }
    }else{
      for(var i = inicio; i<tamanho+1; i++){
        console.log(dados[i]);
      }
    }
    for(var i = 0; i<fim; i++){
      console.log(dados[i]);
    }
  } 
}

var fc = new FilaCircular(5);

fc.enqueue(10);
fc.enqueue(20);
fc.enqueue(30);
fc.enqueue(40);
fc.enqueue(50);
fc.print();

fc.dequeue();
fc.print();

fc.enqueue(60);
fc.print();

fc.dequeue();
fc.print();

fc.enqueue(70);
fc.print();

fc.dequeue();
fc.print();
