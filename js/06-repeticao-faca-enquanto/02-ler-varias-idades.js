/*62) Faça um programa usando a estrutura “faça enquanto” que leia a idade de 
várias pessoas. A cada laço, você deverá perguntar para o usuário se ele quer ou 
não continuar a digitar dados. No final, quando o usuário decidir parar, mostre 
na tela: 
a) Quantas idades foram digitadas 
b) Qual é a média entre as idades digitadas 
c) Quantas pessoas tem 21 anos ou mais. 
*/


let TTidade=0
let continuar
let somaIdade=0
let TT21=0

do{
let idade = parseInt(prompt("digite a idade"))

continuar = prompt("deseja parar, digite: S")
somaIdade+=idade
TTidade++

if(idade>=21){
TT21++
}
}while(continuar != 'S')

alert(`o total de idade é  ${TTidade} \n A média de todas as  idades é de: ${(somaIdade/TTidade)} \n Existem  ${TT21} maiores de ${20}`)
