/*
67) Faça um programa usando a estrutura “para” que leia um número inteiro 
positivo e mostre na tela uma contagem de 0 até o valor digitado: 
Ex: Digite um valor: 9 
Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM! 
*/
let limite=parseInt(prompt("digite o Limite"))
if(limite <0){
limite=parseInt(prompt("apenas de número positivo digite o Limite"))
}
else{
for(let i=0; i<=limite; i++){
console.log(i)
}
}
