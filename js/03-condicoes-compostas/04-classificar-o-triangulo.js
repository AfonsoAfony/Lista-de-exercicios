/*
30) [DESAFIO] Refaça o algoritmo 25, acrescentando o recurso de mostrar que tipo 
de triângulo será formado: - 
EQUILÁTERO: todos os lados iguais - 
ISÓSCELES: dois lados iguais - 
ESCALENO: todos os lados diferentes 
 */


let S1=19;
let S2=20;
let S3=15;

if(S1<(S2+S3) && S2<(S1+S3) && S3<(S1+S2)){
    console.log("É possivel formar um triangulo");
    
    if (S1===S2 && S1===S3) {
        console.log("É um: TRIÂNGULO EQUILÁTERO")
    } 
    else if((S1===S2 && S1!==S3) || (S2===S3 && S2!==S1) || (S3===S1 && S3!==S2) ){
        console.log("É um: TRIÂNGULO ISÓSCELES")
    }
    else if (S1!==S2 && S1!==S3) {
        console.log("É um: TRIÂNGULO EQUILÁTERO")
    } 
}
else{
    console.log("Não é possivel formar um triangulo com esses 3 segmentos")
}