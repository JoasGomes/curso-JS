//try{
    // é executada quando não há erros
//} catch{
    // é executada quando há erros
//} finally{
    // sempre vai ser executado independente
//}

function relogio (){
    function criaHoraDosSegundos(segundos){
        const data = new Date(segundos*1000);
        return data.toLocaleTimeString('pt-BR',{
            hour12: false,
            timeZone: 'UTC'
        })
    }
    console.log(criaHoraDosSegundos(10))
    
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const reiniciar = document.querySelector('.reiniciar');
    let segundos = 0;
    let timer;
    
    function iniciaRelogio(){
        timer = setInterval(function(){
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos)
        },1000)
    }
    
    iniciar.addEventListener('click', function(event){
        relogio.classList.remove('pausado')
        clearInterval(timer);
        iniciaRelogio();
    })
    pausar.addEventListener('click', function(event){
        clearInterval(timer);
        relogio.classList.add('pausado')
    })
    reiniciar.addEventListener('click', function(event){
        relogio.classList.remove('pausado')
        clearInterval(timer);
        relogio.innerHTML = '00:00:00'
        segundos = 0
    })
    
}
relogio();