document.addEventListener('DOMContentLoaded', function (){
    let formulario = document.getElementById('formulario');
    let exibir = document.getElementById('exibir');
    
    formulario.addEventListener('keyup', (e) =>{
        const seila = e.target.value
        exibir.innerHTML = `${seila}`
    }) 
})

/*----------------------------------------------------------*/