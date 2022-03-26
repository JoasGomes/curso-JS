// factory function (funçao fabrica)
function criaPessoa(nome,sobrenome, a, p){
    return{
        nome,
        sobrenome,
        fala: function(assunto){
            return `${this.nome} ${sobrenome} está ${assunto}.`;
        },
        altura: a,
        peso: p,
        //getter
        get imc(){
            const indice = this.peso/(this.altura**2);
            return indice.toFixed(2)
        }
    };
}

const p1 = criaPessoa ('luiz','otavio',1.8,80);
console.log(p1.imc);
console.log(p1.fala('falando sobre js'))
const p2 = criaPessoa ('maria','joaquina',1.6,60);
console.log(p2.imc);
console.log(p2.fala('falando sobre js'))