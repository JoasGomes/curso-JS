//const frutas = ['pera','maça','uva']

//for ( i=0; i < frutas.length; i++) {
//   console.log(frutas[i])
//}

// lê os indices
//for(let i in frutas){
//    console.log(i)
//}

//function ePaisagem (largura, altura) {
//    if (largura > altura); {
//        return true;
//    } return false;
//}
// console.log(ePaisagem(1920,1080))

//const ePaisagem = (largura, altura) => largura > altura;
//console.log(ePaisagem(1920,1080))

function dividindo (number){
    if(typeof number !== "number"){
        return number
    }
    if (number%5===0 && number%3===0) {
        return 'fizzbuzz';
    }
    if (number%3===0) {
        return 'fizz';
    }
    if (number%5===0) {
        return 'buzz';
    } else {
        return number;
    }
    
}
for(let i = 0; i<= 100; i++){
    console.log(i,dividindo(i))
}