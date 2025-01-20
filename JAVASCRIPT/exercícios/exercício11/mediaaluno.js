function calcular(){
let nom = prompt('Qual é o nome do aluno?')
let n1 = Number(prompt(`Qual foi a primeira nota de ${nom}? `))
let n2 = Number(prompt(`Além de ${n1}, Qual foi a segunda nota de ${nom}?`))
let med = (n1 + n2)/2

let msg ;



if (med >= 8){
    msg = 'Meus parabéns!!!!';
}
else if (med < 8 && med >= 6 ){
    msg = 'Você passou se "arrastando" kkkkk'; 
}else{
    msg ='Estude um pouco mais. você está reprovado';
} 

let res = document.getElementById('res')
res.innerHTML = `<p> Calculando a média final de <mark>${nom}</mark>.</p>`
res.innerHTML += `<p>As notas obtidas foram<mark> ${n1} e ${n2} </mark>. </p>`
res.innerHTML += `<p>A média final será <mark>${med}</mark>.</p>`
res.innerHTML += `<p>A mensagem que temos é : <strong style= ' color: red;'>${msg}</strong></p>`
}









