// declaraçao de funçao (function hoisting)
falaOi();
function falaOi(){
    console.log('oie')
}
// tanto antes quanto depois vc pode chamar sua funçao

// first-class objects (objetos de primeira classe)
// function expression
//const souUmDado = function(){
//    console.log('sou um dado')
//};
//souUmDado();

// arrow function
//const funcaoArrow = () => {
//    console.log('sou uma arrow function')
//}
//funcaoArrow();

// dentro de um objeto 
//da pra fazer com (falar: function(){})
//const obj = {
//    falar(){
//        console.log('estou falando...')
//    }
//}
//obj.falar();

//function funcao (){
//    let total = 0 
//    for(let argumento of arguments){
//        total += argumento
//    }
//    console.log(total)
//}
//funcao(1,2,3,4,5,6,7,8);

function conta (operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador==='+') acumulador += numero;
        if(operador==='-') acumulador -= numero;
        if(operador==='/') acumulador /= numero;
        if(operador==='*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta ('*',1,20,30,40,50);

function criaMultiplicador(multiplicador){
    return function(n){
        return n*multiplicador
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadruplica(10));