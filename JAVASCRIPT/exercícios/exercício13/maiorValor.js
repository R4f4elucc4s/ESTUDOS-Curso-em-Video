
function ini(){
let n1 = Number(prompt('Digite um número: '))
let n2 = Number(prompt('Digite outro número: '))

let res = document.getElementById('res')

if (n1 > n2){

    res.innerHTML = `<br>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n1}</strong>`

}else if (n1 < n2){

    res.innerHTML = `<br>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n2}</strong>`
}else{

    res.innerHTML = `<br>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, ambos são <strong>IGUAIS</strong>`
    }

}