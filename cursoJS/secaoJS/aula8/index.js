//let a = 'A';
//let b = 'B';
//let c = 'C';
//const novaOrdem =  ['B', 'C', 'A'];
//[a, b, c] = novaOrdem;

//console.log(a, b, c);

//               0 1 2 3 4 5 6 7 8 
//const numeros = [1,2,3,4,5,6,7,8,9];
//const [primeiroNumero, segundoNumero,...resto] = numeros;
//console.log(primeiroNumero,segundoNumero) 
//console.log(resto)

//...rest, ...spread
//                      0          1          2
//                   0  1  2    0  1  2    0  1  2
//const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
//console.log(numeros[1][2])

const pessoa = {
    nome:'luiz',
    sobrenome: 'moraes',
    idade: 30,
    endereco:{
        rua:'av brasil',
        numero: 320
    }
}
console.log(pessoa.nome)

// atribuiçao de desestruturaçao

//const {nome, sobrenome} = pessoa;
//console.log(nome,sobrenome)