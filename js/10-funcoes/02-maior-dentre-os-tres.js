/*
97) Refaça o exercício 91, só que agora em forma de função Maior(), mas faça uma 
adaptação que vai receber TRÊS números como parâmetro e vai retornar qual foi o 
maior entre eles. */


function Maior(n1,n2,n3){
if(n1>n2 && n1>n3){
 alert(` o maior número  é o n1: ${n1}`)
} 
else if(n2>n1 && n2>n3){
 alert(` o maior número  é o n2: ${n2}`)
}
else if(n3>n1 && n3>n2){
 alert(` o maior número  é o n3: ${n3}`)
}
}

let n1 =parseInt(prompt("digite o n1"))
let n2 =parseInt(prompt("digite o n2"))
let n3 =parseInt(prompt("digite o n3"))

Maior(n1,n2,n3)

