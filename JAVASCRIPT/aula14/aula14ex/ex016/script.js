
function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp') 
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    alert('[ERRO] faltam dados!!')
    
    } else {
        res.innerHTML = `Contando:<br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)          
        if (p <= 0) {
            res.innerHTML = `PASSO INVÁLIDO!!`
        }     
        if(i < f){
            
            // Contagem Crescente    
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c}\u{1F449}`
            }
            } else {
            // Contagem Regressiva
               for( let c = i; c >= f; c -= p){
                res.innerHTML += `${c}\u{1F449}`
            }        
    }        
        res.innerHTML += `<strong>ACABOU A CONTAGEM \u{1F62C}</strong>`
    }
}