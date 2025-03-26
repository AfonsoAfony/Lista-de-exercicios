/*
37) Uma empresa precisa reajustar o salário dos seus funcionários, dando um 
aumento de acordo com alguns fatores. Faça um programa que leia o salário atual, 
o gênero do funcionário e há quantos anos esse funcionário trabalha na empresa. 
No final, mostre o seu novo salário, baseado na tabela a seguir: 
- Mulheres :
    - menos de 15 anos de empresa: +5% 
    - de 15 até 20 anos de empresa: +12% 
    - mais de 20 anos de empresa: +23% 
- Homens: 
    - menos de 20 anos de empresa: +3% 
    - de 20 até 30 anos de empresa: +13% 
    - mais de 30 anos de empresa: +25% 
*/
let salario=100
let genero="M"
let tempoNaEmpresa=4

if(genero="M"){
    if(tempoNaEmpresa<15){
        salario+=(5/100)*salario
        console.log("Recebera o salário + aumento de 5%, que é: "+salario)
    }
    else if(tempoNaEmpresa>=15 && tempoNaEmpresa<=20){
        salario+=(12/100)*salario
        console.log("Recebera o salário + aumento de 12%, que é: "+salario)
    }
    else if(tempoNaEmpresa>20){
        salario+=(25/100)*salario
        console.log("Recebera o salário + aumento de 25%, que é: "+salario)
    }
}
else{
    if(tempoNaEmpresa<20){
        salario+=(3/100)*salario
        console.log("Recebera o salário + aumento de 3%, que é: "+salario)
    }
    else if(tempoNaEmpresa>=20 && tempoNaEmpresa<=30){
        salario+=(13/100)*salario
        console.log("Recebera o salário + aumento de 13%, que é: "+salario)
    }
    else if(tempoNaEmpresa>30){
        salario+=(25/100)*salario
        console.log("Recebera o salário + aumento de 25%, que é: "+salario)
    }
}