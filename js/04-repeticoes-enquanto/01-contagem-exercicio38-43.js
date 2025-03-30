/*
38) Escreva um programa que mostre na tela a seguinte contagem: 
6 7 8 9 10 11 Acabou! 
*/
let num=6
while(num<=11){
    console.log(num)
    num+=1
}
/*39) Faça um algoritmo que mostre na tela a seguinte contagem: 
10 9 8 7 6 5 4 3 Acabou! */
console.log("_________________")
let num2=10
while(num2>=3){
    console.log(num2)
    num2-=1
}
/*
40) Crie um aplicativo que mostre na tela a seguinte contagem: 
0 3 6 9 12 15 18 Acabou! 
*/
console.log("_________________")
let num3=0
while(num3<=18){
    console.log(num3)
    num3+=3
}

/*
41) Desenvolva um programa que mostre na tela a seguinte contagem: 
100 95 90 85 80 ... 0 Acabou! */
console.log("_________________")
let num4=100
while(num4>=80){
    console.log(num4)
    num4-=5
}

/*
42) Faça um algoritmo que pergunte ao usuário um número inteiro e positivo 
qualquer e mostre uma contagem até esse valor: 
Ex: Digite um valor: 35 
Contagem: 1 2 3 4 5 6 7 ... 33 34 35 Acabou! 
*/
console.log("_________________")
let actual=1
let meta=40
while(actual<=meta){
    console.log(actual)
    actual+=1
}

/*
43) Desenvolva um algoritmo que mostre uma contagem regressiva de 30 até 1, 
marcando os números que forem divisíveis por 4, exatamente como mostrado abaixo: 
30 29 [28] 27 26 25 [24] 23 22 21 [20] 19 18 17 [16]... 
*/
console.log("_________________")
let num5=30
while(num5>=1){
    console.log(num5)
    if((num5%4)==0){
        console.log("Esté número: "+num5+" é divisivel por 4 ")
    }
    
    num5-=1
}
