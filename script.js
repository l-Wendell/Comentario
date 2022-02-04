document.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        enviar()
    }
})

function enviar(){ 

    const input = document.querySelector('#input-coment');
    const inputTxt = input.value

    if(inputTxt === ''){

        alert('Digite algum comentario')

    } else{

        const criandoLI = document.createElement('li')
        const textoLI = document.createTextNode(inputTxt)

        criandoLI.appendChild(textoLI)
        criandoLI.classList = 'li-styles'

        lista.appendChild(criandoLI)
    }
}

function remove(){

    const lista = document.querySelector('#lista')
    const li = document.querySelector('#lista li')

    lista.removeChild(li)
}