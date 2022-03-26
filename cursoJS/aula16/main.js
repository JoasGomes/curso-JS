//const pessoa1 = new Object();
//pessoa1.nome = 'luiz';
//pessoa1.sobrenome = 'otavio';
//pessoa1.idade = 2;
//pessoa1.falarNome = function(){
//    return(`${this.nome} está falando seu nome.`)
//};
//pessoa1.getDataNascimento = function(){
//    const dataAtual = new Date();
//    return dataAtual.getFullYear() - this.idade;
//};

//for(let chave in pessoa1){
//    console.log(pessoa1[chave]);
//}
//console.log(pessoa1.getDataNascimento())

//--------------------------------------------------//

//defineProperty - defineProperties

function Produto (nome,preco,estoque){
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this,'estoque',{
        enumerable: true, // mostra a chave
        //value: estoque, // valor
        //Writable: false, //pode alterar o valor
        configurable: false, // configurável ou não
        get: function(){
            return estoque
        },
        set: function(valor){
            
        }
    })
}
const p1 = new Produto('camiseta',20,3)
console.log(p1)