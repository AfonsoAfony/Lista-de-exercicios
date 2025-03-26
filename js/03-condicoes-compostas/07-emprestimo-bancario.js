/*
33) Escreva um programa para aprovar ou não o empréstimo bancário para a compra 
de uma casa. O programa vai perguntar o valor da casa, o salário do comprador e 
em quantos anos ele vai pagar. Calcule o valor da prestação mensal( valor a pagar mensalmente) , sabendo que 
ela não pode exceder 30% do salário ou então o empréstimo será negado. 
*/
let valorCasa=100
let salarioComprador=10
let prazoEmAnos=1
let valorPrestacaoMensal

let percentagemDoSalarioQueNaoPodeSerExcedida=(30/100) * salarioComprador
console.log("Os 30% do salário que não pode ser excedido é: "+percentagemDoSalarioQueNaoPodeSerExcedida+"KZ")

valorPrestacaoMensal= valorCasa/(prazoEmAnos * 12) //ou seja valor a pagar mensalmente

console.log("o valor da prestacao mensal é: "+valorPrestacaoMensal+"KZ")

if(valorPrestacaoMensal>percentagemDoSalarioQueNaoPodeSerExcedida){
    console.log("O Empréstimo foi negado");
}
else{
    console.log("O Empréstimo foi Concedido");
}