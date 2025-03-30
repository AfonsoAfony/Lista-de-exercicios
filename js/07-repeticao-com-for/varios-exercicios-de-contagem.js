//For

/*64) Desenvolva um programa usando a estrutura “para” que mostre na tela a 
seguinte contagem: 
0 5 10 15 20 25 30 35 40 Acabou! 
*/

for(let i = 0; i <= 40; i+=5){
 console.log(i)
}
console.log("::::::::::::::::::::::::::::::::::::::::::::::::")
/*65) Desenvolva um programa usando a estrutura “para” que mostre na tela a 
seguinte contagem: 
100 90 80 70 60 50 40 30 20 10 0 Acabou! */
for(let i=100; i>=0; i-=5){
 console.log(i)
}

/*66) Escreva um programa que leia um número qualquer e mostre a tabuada desse 
número, usando a estrutura “para”. 
Ex: Digite um valor: 5 
5 x 1 = 5 
5 x 2 = 10 
5 x 3 = 15 ...
 */
console.log("::::::::::::::::::::::::::::::::::::::::::::::::")

let num = 6;
for(let i=1; i<=12; i++){
console.log(`${num} x ${i} = ${num*i}`)
}
