//Operacoes com numeros complexos

function NumeroComplexo(a, b){
    
    this.x = a;
    this.y = b;

    this.soma = function(valor){
        this.x += valor.x;
        this.y += valor.y;
    }

    this.subtracao = function(valor){
        this.x -= valor.x;
        this.y -= valor.y;
    }

    this.multiplica = function(valor){
        this.x = (this.x*valor.x)-(this.y*valor.y);
        this.y = (this.x*valor.y)-(this.y*valor.x);
    }

    this.divisao = function(valor){   
        let a = this.x;
        let b = this.y;
        let c = valor.x;
        let d = valor.y;
        
        let cimaR = ((a*c)+(b*d));
        let cimaIm = ((b*c)-(a*d));
        let baixo = (c*c)+(d*d);

        console.log('\n   '+cimaR+'      '+cimaIm);
        console.log('------ + ------- i');
        console.log('   '+baixo+'      '+baixo);
    }

    this.print= function(){
        return '' +this.x + ' + '+ (this.y != 1 ? this.y : '')+'i';
    }
}

let n1 = new NumeroComplexo(2,4);
let n2 = new NumeroComplexo(2,4);
let n3 = new NumeroComplexo(2,2);
let n4 = new NumeroComplexo(2,4);

n1.soma(new NumeroComplexo(2,3));
console.log(n1.print());

n2.subtracao(new NumeroComplexo(2,3));
console.log(n2.print());

n3.multiplica(new NumeroComplexo(3,3));
console.log(n3.print());

n4.divisao(new NumeroComplexo(2,3));