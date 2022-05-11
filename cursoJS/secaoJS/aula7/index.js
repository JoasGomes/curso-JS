/*
operadores de comparação
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (valor) ***** não usa*****
=== igualdade estrita (valor e tipo)
!= diferente (valor) ***** não usa *****
!== diferente estrito (valor e tipo)
*/


//-------------------------------------------//


/*
operadores lógicos
&& -> and -> e = todas as expressoes precisam ser vdds
|| -> or -> ou = só retorna false se todas forem falsas
! -> not -> não = inverte o valor
*/
//console.log( true && true && true && true);
//console.log(true || true || false);


//-------------------------------------------//
// IF, ELSE IF E ELSE
/*
entre 0 - 11 - bom dia 
entre 12 - 17 - boa tarde
entre 18 - 23 - boa noite 
*/

// if pode ser udsado sozinho mas else não...
// apenas um if e um else por checagem...

const hora = 17

if (hora >= 0 && hora <= 11){
    console.log('bom dia')
} else if (hora > 11 && hora <= 17) {
    console.log('boa tarde')
} else if (hora > 17 && hora <= 23) {
    console.log('boa noite')
} else {
    console.log('sem horas')
}