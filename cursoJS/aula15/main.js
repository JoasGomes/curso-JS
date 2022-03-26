//filter, map, reduce

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const pares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((ac,valor) => ac + valor);
 console.log(pares)


//function callBackFilter(valor, indice, array){
//    return valor > 10;
//--------------------------------------//
    //    if (valor > 10) {
//        return true;
//    }else {
//        return false;
//    }
//}
//const numerosFiltrados = numeros.filter(valor => valor >10);
//console.log(numerosFiltrados)

const pessoas = [
    { nome: 'luiz',idade: 62},
    { nome: 'maria',idade: 22},
    { nome: 'eduardo',idade: 82},
    { nome: 'leticia',idade: 72},
    { nome: 'rosana',idade: 42},
    { nome: 'wallace',idade: 32},
];

const nomes = pessoas.map(nome=> nome.nome)
//console.log(nomes)
const semNomes = pessoas.map(function(obj){
    delete obj.nome
    return obj
})
//console.log(semNomes)

// metodo mais demorado

//const novoObj = function(nome){
//    if(nome.nome.length > 5){
//        return true
//    } else{
//        return false
//    }
//}
//const pessoasVelhas = function(idade){
//    if(idade.idade >50){
//        return true 
//    } else {
//        return false
//    }
//}
//const pessoasVeias = pessoas.filter(pessoasVelhas)
//const pessoas2 = pessoas.filter(novoObj)
//console.log(pessoas2)
//console.log(pessoasVeias)

// metodo facil e rapido arrow function

//const pessoasComA = pessoas.filter(letra => letra.nome.toLowerCase().endsWith('a'))
//const pessoasVeias = pessoas.filter(idade => idade.idade >50);
//const pessoas2 = pessoas.filter(nome => nome.nome.length > 5)
//console.log(pessoas2)
//console.log(pessoasVeias)
//console.log(pessoasComA)