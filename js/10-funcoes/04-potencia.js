/*
99) Faça um programa que possua uma função chamada Potencia(), que vai receber 
dois parâmetros numéricos (base e expoente) e vai calcular o resultado da 
exponenciação. 
Ex: Potencia(5,2) vai calcular 52 = 25 
*/
function Potencia(base,expoente){

    let contador =1
    let resultado=1
    while(contador<=expoente){
    
    resultado*=base
     console.log(resultado)
    contador++
    }
    return resultado
    }
    console.log(`o resultado da potencia é de: ${Potencia(5,)}`)
   /* (5 5)=25  ****2
    (25 5)=125 ****3
    (125 5)=625 ****4
    
    */