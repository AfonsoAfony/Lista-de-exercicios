/*
25) [DESAFIO] Crie um programa que leia o tamanho de três segmentos de reta. 
Analise seus comprimentos e diga se é possível formar um triângulo com essas 
retas. Matematicamente, 
para três segmentos formarem um triângulo, o comprimento 
de cada lado deve ser menor que a soma dos outros dois.*/

let S1=10;
let S2=10;
let S3=2;

if(S1<(S2+S3) && S2<(S1+S3) && S3<(S1+S2)){
    console.log("É possivel formar um triangulo");
}
else{
    console.log("Não é possivel formar um triangulo com esses 3 segmentos")
}