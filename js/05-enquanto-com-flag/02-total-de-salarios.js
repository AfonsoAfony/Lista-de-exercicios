/*
57) Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. 
No final, mostre o total de salários pagos aos homens e o total pago às 
mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não 
sempre que ler os dados de um funcionário. 
*/

let continuar

let nome
let sexo
let salario, TTsalarioF, TTsalarioM
let flag=true
while (flag){
    
     nome =prompt('Digite o nome do funcionário ')
     sexo =prompt('Digite o sexo do funcionário M ou F')
     salario =prompt('Digite o salario funcionário ')
    

    if (sexo=="F") {
        TTsalarioF+=salario;
    }
    else if(sexo=="M"){
        TTsalarioM+=salario;
    }
    alert("funcionário: ${nome} \n Sexo: ${sexo} \n Salario: ${salario} ")

    continuar =prompt('Deseja cadastrar mais: S (para sim) ou N (para não)')    
    if(continuar=="N"){
         alert(`Total Salário dado ao Homens: ${TTsalarioM} \n Total Salário dado as Mulheres: ${TTsalarioF}`)
          flag=false 
    }
   
}
