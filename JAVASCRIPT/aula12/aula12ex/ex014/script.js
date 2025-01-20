function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
  
    msg.innerHTML = `Agora são ${hora} horas.<br>`
    if(hora >= 5 && hora < 12 ){
        msg.innerHTML += "Bom dia!"
        img.src = 'fotomanha.png'
        document.body.style.background = '#ffdc7e'
    }else if(hora >= 12 && hora < 18){

        msg.innerHTML += "Boa tarde!"
        img.src = 'fototarde.png'
        document.body.style.background = '#a4b5bd'

    }else if(hora >= 18 && hora <= 23.59){

        msg.innerHTML += "Boa noite"
        img.src = 'fotonoite.png'
        document.body.style.background = '#2e2e2e'
        
    }else{
        msg.innerHTML += `Boa Madrugada!`
        img.src = 'fotomadrugada.png'
        document.body.style.background = '#010204'
    }
}

