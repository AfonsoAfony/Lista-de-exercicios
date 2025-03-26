/*
29) Desenvolva um programa que leia o nome de um funcionário, seu salário, 
quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de 
acordo com a tabela a seguir:
 - Até 3 anos de empresa: aumento de 3% 
 - entre 3 e 10 anos: aumento de 12.5% 
 - 10 anos ou mais: aumento de 20% 
*/
let nome="Afonso Narciso da Silva"
let tempoNaEmpresa=13;
let salario=parseFloat(10);

if (tempoNaEmpresa==3) {
    salario+= (3/100) * salario
    console.log("O Funcionário receberá o aumento de 3% \n salário de: "+salario)
} 
else if (tempoNaEmpresa>3 && tempoNaEmpresa <10) {
    salario+= (12.5/100) * salario
    console.log("O Funcionário receberá o aumento de 12.5% \n salário de: "+salario)
}
else if (tempoNaEmpresa>=10 ) {
    salario+= (20/100)*salario
    console.log("O Funcionário receberá o aumento de 20% \nSalário de: "+salario)
}