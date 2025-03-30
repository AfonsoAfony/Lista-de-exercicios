/*
68) Crie um programa que leia sexo e peso de 8 pessoas, usando a estrutura 
“para”. No final, mostre na tela: 
a) Quantas mulheres foram cadastradas 
b) Quantos homens pesam mais de 100Kg 
c) A média de peso entre as mulheres 
d) O maior peso entre os homens 
*/

let sexo
let peso=0
let TTfeminino =0
let somaPesoFeminino=0
let TTmasculinoAcima100Kg=0
let maiorPesoMasculino=0

for(let contador=0; contador<8; contador++){
sexo = prompt("digite o Sexo:\n M ou F")
peso= parseFloat(prompt("digite o Peso"))
if(sexo=="F"){
    TTfeminino+=1
     somaPesoFeminino+=peso
}
else{
if(peso>=100){
TTmasculinoAcima100Kg +=1
}
maiorPesoMasculino= (maiorPesoMasculino===0) ? peso : (maiorPesoMasculino>peso) ? maiorPesoMasculino : peso
}
}
alert(` foram cadastradas: ${TTfeminino} Mulheres \n foram cadatrado ${TTmasculinoAcima100Kg} homens com o peso a cima de 100Kg \n A média do peso das mulheres é de : ${somaPesoFeminino/TTfeminino} Kg \n O maior peso entre os homens é: ${maiorPesoMasculino} Kg`)