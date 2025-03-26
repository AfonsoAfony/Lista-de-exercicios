/*23) Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos 
para todos, mas especialmente para mulheres. Faça um programa que leia nome, 
sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo 
que: 
- Homens ganham 5% de desconto - Mulheres ganham 13% de desconto*/
let nome="Afonso";
let sexo="M"
let precoDeCompras=parseFloat(100);
let precoDesconto;
if(sexo==="M"){
    precoDesconto=precoDeCompras-(5 % precoDeCompras);
    console.log("É uma homem então O valor com o desconto de 5% é de  "+precoDesconto+"KZ")
}
else{
    precoDesconto=precoDeCompras-(13 % precoDeCompras);
    console.log("É uma mulher então O valor com o desconto de 13% é de "+precoDesconto+"KZ")
}
