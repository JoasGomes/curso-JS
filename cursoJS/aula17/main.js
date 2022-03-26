/*
object.freeze = congela o objeto
object.keys = mostra as chaves em forma de array
object.defineProperties = define propriedades
object.defineProperty = define uma propriedade

*/


//const produto = {nome:'produto',preco: 1.8}
//const caneca = {...produto,material:'porcelana'}

//caneca.nome = 'outro nome'
//caneca.preco = 2.5
//console.log(produto)
//console.log(caneca)

// new object --> obj.prototype
//const objA = {
//    chaveA:'A'
    //__proto__:object.prototype
//};
//const objB = {
//    chaveB:'B'
//};

//Object.setPrototypeOf(objB,objA); 
// transformei o proto de objB em objA

//function Produto (nome,preco){
//    this.nome = nome;
//    this.preco = preco;
//}

//Produto.prototype.desconto = function(valor) {
//    this.preco = this.preco - (this.preco * (valor/100))
//}
//Produto.prototype.aumento = function(valor) {
//    this.preco = this.preco + (this.preco * (valor/100))
//}

//const p1 = new Produto ('camiseta',50);
//const p2 = new Produto ('camiseta',50);
//p1.desconto(10);
//p2.aumento(100);
//console.log(p1)
//console.log(p2)

//produto - aumento,desconto
//camiseta = cor,caneca= material
function Produto(nome,preco){
    this.nome=nome;
    this.preco=preco;
}
Produto.prototype.aumento = function(quantia){
    this.preco += quantia
}
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia
}