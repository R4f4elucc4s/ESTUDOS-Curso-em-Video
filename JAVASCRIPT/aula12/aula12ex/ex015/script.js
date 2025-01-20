function verificar() {
    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var fetaria = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (fsex[0].checked) {
        gênero = 'Homem'
        if (idade >= 0 && idade <= 10){
           gênero = 'Menino'//criança
           img.setAttribute('src', 'fotomenino.png')            
        }else if(idade < 18){
           fetaria = 'Rapaz' //jovem
            img.setAttribute('src', 'fotojovem-m.png')
        }else if(idade < 60){
            fetaria = 'Adulto'//adulto
            img.setAttribute('src', 'fotohomem.png')
        }else{
            fetaria = 'Idoso'//idoso
            img.setAttribute('src', 'fotosenhor.png')
        }
    } else if (fsex[1].checked) {
        gênero = 'Mulher'
        if (idade >= 0 && idade <= 10){
            gênero = 'Menina'//criança            
            img.setAttribute('src', 'fotomenina.png')
         }else if(idade < 18){
             fetaria = 'Jovem'//jovem
             img.setAttribute('src','fotojovem-m.png')
         }else if(idade < 60){
             fetaria = 'Adulta'//adulto
             img.setAttribute('src', 'fotomulher.png')
         }else{
             fetaria = 'Idosa'//idoso
             img.setAttribute('src', 'fotosenhora.png')
         }
    }
    res.getElementsByClassName.textAlign = 'center'
    res.innerHTML = `Você é um(a) ${gênero} ${fetaria} de ${idade} ano(s) de idade.<br>`
    res.appendChild(img)
    }

    
}