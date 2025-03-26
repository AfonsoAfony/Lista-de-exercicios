/*
34) O Índice de Massa Corpórea (IMC) é um valor calculado baseado na altura e no 
peso de uma pessoa. De acordo com o valor do IMC, podemos classificar o 
indivíduo dentro de certas faixas.
 - abaixo de 18.5: Abaixo do peso 
 - entre 18.5 e 25: Peso ideal 
 - entre 25 e 30: Sobrepeso 
 - entre 30 e 40: Obesidade 
 - acima de 40: Obseidade mórbida 
 
Obs: O IMC é calculado pela expressão peso/altura² (peso dividido pelo quadrado 
da altura) 
*/
let peso=80
let altura=2
let IMC=peso/(altura*altura)

console.log("O IMC é de: "+IMC)

if(IMC<18.5){
    console.log("Abaixo do Peso");
}
else if(IMC>=18.5 && IMC<25 ){
    console.log("Peso Ideal");
}
else if(IMC>=25 && IMC<30 ){
    console.log("Sobrepeso ");
}
else if(IMC>=30 && IMC<=40 ){
    console.log(" Obesidade ");
}
else if(IMC>40){
    console.log("Obseidade mórbida");
}
