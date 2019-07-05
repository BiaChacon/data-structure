function Code(texto, vetor, arvore){
    this.textoCod = texto;
    this.vetor = vetor;
    this.arvore = arvore;
}	

function Caracter(caracter, valor){
    this.tipo = caracter;
    this.quantidade = valor;
    this.binario = "";
}

function Node (key, valor){
    this.key = key;
    this.valor = valor;
    this.codigo = "";
    this.dir = null;
    this.esq = null;
}


function Compactar(dados){

    let texto = dados;
    let textoAux = texto;
    this.tabelaASCII = [];
    this.simbolos= [];
    let indice = 0;
    let arvoreArquivo = '';
    

    this.pegarFrequencia = function(){
       
        let caracter;

        for(var i=0; i<128; i++){
            this.tabelaASCII[i] = new Caracter(String.fromCharCode(i), 0);
        }

        for(var i=0; i<texto.length; i++){
            caracter = textoAux.charAt(i);
            this.tabelaASCII[caracter.charCodeAt()].quantidade++;
        }
        
    }

    this.ordenar = function(){

        this.pegarFrequencia();

        for(var i=0; i<this.tabelaASCII.length; i++){
            
            if(this.tabelaASCII[i].quantidade !=0 ){
                
                this.simbolos[indice] = this.tabelaASCII[i];
                cont = indice;
                while(cont>0){
                    if(this.simbolos[cont].quantidade > this.simbolos[cont-1].quantidade){
                        let aux = new Caracter(this.simbolos[cont].tipo, this.simbolos[cont].quantidade);
                        this.simbolos[cont] = this.simbolos[cont-1];
                        this.simbolos[cont-1] = aux;
                    }
                    cont--;
                };
                indice++;
            }
        }
            return this.simbolos; 
    }

    this.arvore = function(dados){

        let cont = 0;
        let node = [];
        let nodeAux; 

        while(cont<dados.length){
            node[cont] = new Node(dados[cont].tipo, dados[cont].quantidade);
            cont++;
        }
        
        cont = dados.length - 1;
        
        if(cont>1){
            while(cont > 0){
                let novoNode = new Node(node[cont-1].key.concat(node[cont].key), node[cont-1].valor + node[cont].valor);
                novoNode.esq = node[cont-1];
                novoNode.dir = node[cont];
                node[cont-1] = novoNode;
                node[cont] = null;
                let indice = cont-1;
                while(indice>0){
                    if(node[indice].valor > node[indice-1].valor){
                        nodeAux = node[indice];
                        node[indice] = node[indice-1];
                        node[indice-1] = nodeAux;
                        indice--;
                    }
                    else{
                        break;
                    }
                }
                
                cont--;
            }
        }
        else{
            console.log(node);
        }

        nodeAux = this.pegarArvore(node[0], '', '');
       
    }

    this.CodigoCompactado = function(){

        let codeCompactado = '';

        for(var i=0; i<texto.length; i++){
            caracter = textoAux.charAt(i);
            codeCompactado = codeCompactado.concat(this.tabelaASCII[caracter.charCodeAt()].binario);
        }
        
        return codeCompactado;

    }

    this.pegarArvore = function(node, codigo, dados){
        
        if (node === null) {
            arvoreArquivo = dados.concat('#');
        }
        else{
            node.codigo = codigo.concat(node.codigo);
            
            if(node.esq == null && node.dir == null){
                dados = dados.concat(node.key);
                dados = dados.concat(node.valor);
                dados = dados.concat('*');
                arvoreArquivo = dados;
                
                this.tabelaASCII[node.key.charCodeAt()].binario = node.codigo;
            
            }
            else{
                dados = dados.concat('N');
                dados = dados.concat(node.valor);
                dados = dados.concat('*');
                arvoreArquivo = dados;
            }
            this.pegarArvore(node.esq, node.codigo.concat('0'), arvoreArquivo);
            this.pegarArvore(node.dir, node.codigo.concat('1'), arvoreArquivo);
        }
        
        return node;

    }

    this.escreverArvore = function(file){
        file.write(arvoreArquivo);
        let code = this.CodigoCompactado();
        file.write(code);
    }

    this.escrever = function(){
        var ofs = require('fs');
        var file = ofs.createWriteStream("compactado.dat", "utf-8");
        this.escreverArvore(file);
        file.end();
    }
}

function Descompactar(dados){

    let arvore = null;
    let vetorNo = [];
    let vetor = [];
    let code = new Code('', vetor, arvore);
    let mensagemDecodificada = '';
    let arquivoCod = dados;
    let posicao = 0;
    let caracter;

    this.lerArvore = function(){

        for(var i=0; arquivoCod.charAt(i) != 'N'; i++){
            code.textoCod = code.textoCod.concat(arquivoCod.charAt(i));
            posicao = i+1;
        }

        this.separar(arquivoCod, posicao);
        this.ordenar();
        this.arvore(vetorNo);
        this.decodificar(textoCodif);
        console.log(mensagemDecodificada);

    }

    this.separar = function(codigo, posicao){

        let indice = 0;
        let codigoBinario = '';
        let cont = 0;
        var valor;
        while(posicao<codigo.length){
            while(codigo.charAt(posicao)!=='*' && codigo.charAt(posicao) !== '#' && codigo.charAt(posicao) !== undefined){
                if(cont == 0){
                    caracter = codigo.charAt(posicao);
                    cont++;
                    posicao++;
                }
                else{
                    codigoBinario = codigoBinario.concat(codigo.charAt(posicao));
                    cont++;
                    posicao++;
                }
            }
            valor = parseInt(codigoBinario);            
            cont =0;
            codigoBinario = '';
            if(codigo.charAt(posicao)=='*'){
                vetor[indice] = new Caracter(caracter, valor);
                vetorNo[indice] = new Node(caracter, valor);
                indice++;
            }
            posicao++;
        }
    }

    this.ordenar = function(){
        let vetorAux = [];
        let aux;
        let cont = 0;
        for(var i=0; i<vetorNo.length; i++){
            if(vetorNo[i].key != 'N'){
                if(cont == 0){
                    vetorAux[cont] = new Node(vetorNo[i].key, vetorNo[i].valor);
                    cont++;
                }
                else{
                    vetorAux[cont] = new Node(vetorNo[i].key, vetorNo[i].valor);
                    let indice = vetorAux.length - 1;
                    while(indice>0){
                        
                        if(vetorAux[indice].key.charCodeAt()<vetorAux[indice-1].key.charCodeAt()){
                            aux = vetorAux[indice];
                            vetorAux[indice] = vetorAux[indice - 1];
                            vetorAux[indice - 1] = aux;
                        }
                        indice--;
                    }
                    cont++;
                }

            }
        }
        indice = 0;
        let simbolos = [];

        for(var i=0; i<vetorAux.length; i++){
            if(indice == 0){
                simbolos[indice] = new Node(vetorAux[i].key, vetorAux[i].valor);
                indice++;
            }
            else{
                simbolos[indice] = vetorAux[i];
                cont = simbolos.length-1;
                while(cont>0){
                    if(simbolos[cont].valor > simbolos[cont-1].valor){
                        let aux = new Node(simbolos[cont].key, simbolos[cont].valor);
                        simbolos[cont] = simbolos[cont-1];
                        simbolos[cont-1] = aux;
                    }
                    cont--;
                };
                indice++;
            }
        }
        vetorNo = simbolos;
    }
    
    this.arvore = function(dados){

        let cont = 0;
        let node = [];
        let nodeAux; 
        while(cont<dados.length){
            node[cont] = new Node(dados[cont].key, dados[cont].valor);
            cont++;
        }
        
        cont = dados.length - 1;
        
        if(cont>1){
            while(cont > 0){
                let novoNode = new Node(node[cont-1].key.concat(node[cont].key), node[cont-1].valor + node[cont].valor);
                novoNode.esq = node[cont-1];
                novoNode.dir = node[cont];
                node[cont-1] = novoNode;
                node[cont] = null;
                let indice = cont-1;
                while(indice>0){
                    if(node[indice].valor > node[indice-1].valor){
                        nodeAux = node[indice];
                        node[indice] = node[indice-1];
                        node[indice-1] = nodeAux;
                        indice--;
                    }
                    else{
                        break;
                    }
                }
                
                cont--;
            }
        }
        else{
            console.log(node);
        }
        arvore =node[0];
    }

    this.decodificar = function(dados){
        
        let mensagem = dados.textoCod;
        let node = dados.arvore;
        let codigo = '';
        let cont = 0;

        for(var i=0; i<mensagem.length; i++){
            cont++;
            codigo = mensagem.charAt(i);
            if(codigo == '0'){
                node = node.esq;
                if(node.esq == null && node.dir == null){
                    mensagemDecodificada = mensagemDecodificada.concat(node.key);
                    node = dados.arvore;
                }
            }
            else{
                node = node.dir;
                if(node.esq == null && node.dir == null){
                    mensagemDecodificada = mensagemDecodificada.concat(node.key);
                    node = dados.arvore;
                }
            }

        }
     
    }

    this.escrever = function(){
        var ofs = require('fs');
        var file = ofs.createWriteStream("descompactado.dat", "utf-8");
        file.write(mensagemDecodificada);
        file.end();
    }

}

function ZipHuffman(){
    
    this.compactar = function(){

        var fs = require("fs");
        var texto = fs.readFileSync("C:/Users/Bia Chacon/Desktop/TADS/EstruturaDeDados/Trabalho2/texto.dat", "utf-8");

        var c = new Compactar(texto);

        let dados = c.ordenar();
        c.arvore(dados);
        c.escrever();

    }

    this.descompactar = function(){

        var fs = require("fs");
        var code = fs.readFileSync("C:/Users/Bia Chacon/Desktop/TADS/EstruturaDeDados/compactado.dat", "utf-8");
        
        var d = new Descompactar(code);
        d.lerArvore();
        d.escrever();

    }

}

var z = new ZipHuffman();
z.compactar();
//z.descompactar();