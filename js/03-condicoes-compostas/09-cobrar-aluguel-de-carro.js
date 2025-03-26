/*
35) Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O 
aluguel de um carro custa R$90 por dia para carro popular e R$150 por dia para 
carro de luxo. Além disso, o cliente paga por Km percorrido. 
Faça um programa que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e 
quantos Km foram percorridos. No final mostre o preço a ser pago de acordo com a 
tabela a seguir: 

- Carros populares (aluguel de R$90 por dia) 
- Até 100Km percorridos: R$0,20 por Km 
- Acima de 100Km percorridos: R$0,10 por Km 
- Carros de luxo (aluguel de R$150 por dia) 
- Até 200Km percorridos: R$0,30 por Km 
- Acima de 200Km percorridos: R$0,25 por Km
*/
let tipoCarro="popular"
let diasAluguel=3
let kmPercorridos=10
let valorPeloKm
let precoTotalPagar

if(tipoCarro=="popular"){
    valorPeloKm= kmPercorridos<=100 ? (0.20*kmPercorridos) : (0.10*kmPercorridos) 
    precoTotalPagar=parseFloat((90 * diasAluguel) + valorPeloKm)

    console.log("O preco a pagar é de: "+precoTotalPagar)

}
else if(tipoCarro=="luxo"){
    valorPeloKm= kmPercorridos<=200 ? (0.30*kmPercorridos) : (0.20*kmPercorridos) 
    precoTotalPagar=parseFloat((150 * diasAluguel) + valorPeloKm)

    console.log("O preco a pagar é de: "+precoTotalPagar)
}
