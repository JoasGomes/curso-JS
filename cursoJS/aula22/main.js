//const video1 = new Promise ((resolve,reject)=>{
//    console.log('iniciando o video 1')
//    setTimeout(()=>{
//        resolve('video1 está pronto')
//    },2000)
//});

//const video2 = new Promise ((resolve,reject)=>{
//   resolve('video2 está pronto')
//})

//const video3 = new Promise ((resolve,reject)=>{
//    resolve('video3 está pronto')
//})

//Promise.all([video1,video2,video3]).then((results)=>{
//    console.log(results)
//})


const request = obj =>{
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true)
    xhr.send()

    xhr.addEventListener('load',()=>{
        if(xhr.status >= 200 && xhr.status < 300){
            obj.success(xhr.responseText)
        } else{
            obj.error({
                code: xhr.status,
                msg: xhr.statusText
            })
        }
    })
}

document.addEventListener('click', e=>{
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(el)
    }
})

function carregaPagina(el){
    const href = el.getAttribute('href');
    
    request({
        method: 'GET',
        url: href,
        success(response){
            carregaResultado(response)
        },
        error(errorText){
            console.log(errorText)
        }
    })
}
function carregaResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}












