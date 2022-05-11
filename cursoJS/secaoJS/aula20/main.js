//class Pessoa {
//    constructor (nome,sobrenome){
//        this.nome = nome;
//        this.sobrenome = sobrenome;
//    }

//    falar(){
//        console.log(`${this.nome} está falando.`)
//    }
//    comer(){
//        console.log(`${this.nome} está comendo.`)
//    }
//    beber(){
//        console.log(`${this.nome} está bebendo.`)
//    }
//}

//const p1 = new Pessoa('luiz','miranda');
//console.log(p1)

//class Carro {
//    constructor (nome){
//        this.nome = nome;
//        this.velocidade = 0;
//    }
//    acelerar(){
//        if(this.velocidade >= 100) return;
//        this.velocidade++;
//    }
//    freiar(){
//        if(this.velocidade <= 0) return;
//        this.velocidade--;
//    }
//}
//const c1 = new Carro('fusca');
//for(let i = 0; i<=200; i++){
//    c1.acelerar();
//}
//console.log(c1);


class DispositivoEletronico {
    constructor(nome){
        this.nome = nome 
        this.ligado = false
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + ' já ligado');
            return
        }
        this.ligado = true
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' já desligado');
            return
        }
        this.ligado = false
    }
}

//já herdou tudo que dispositivoeletronico tem...
class Smartphone extends DispositivoEletronico{
    constructor(nome,cor){
        super(nome)
        this.cor = cor
    }
}

const s1 = new Smartphone ('iphone','preto')
console.log(s1)