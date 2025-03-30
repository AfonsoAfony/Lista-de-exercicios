/*
56) Crie um programa que leia vários números pelo teclado e mostre no final o 
somatório entre eles. 
Obs: O programa será interrompido quando o número 1111 for digitado 
*/

let num=0;
let valor=0;
let flag=false

while (flag==false){
    
    num=parseInt(prompt("Acrescente + 1 número para somar "))
    
    if (num==1111) {
         alert(`O somatório de todos os números digitados é: ${valor} `)
         flag=true;
 
    }
    else{
        valor+=num;
    }
}
