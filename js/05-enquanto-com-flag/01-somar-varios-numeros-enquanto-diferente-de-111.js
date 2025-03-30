/*
56) Crie um programa que leia vários números pelo teclado e mostre no final o 
somatório entre eles. 
Obs: O programa será interrompido quando o número 1111 for digitado 
*/
crono
let num;
let valor;
let flag=false
while (flag!=true){
    num+=parseInt(prompt("Acrescente + 1 número para somar "))

     console.log(num);
    if (num==111) {
      
         flag=true;
    }
}
