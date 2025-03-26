/*
24) Faça um algoritmo que pergunte a distância que um passageiro deseja 
percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para 
viagens até 200Km e R$0.45 para viagens mais longas. */

let distanciaPercorrer=400;
let precoPassagem;

if(distanciaPercorrer<=200){
     precoPassagem=parseFloat(0.50 * distanciaPercorrer)
     console.log("O preco a pagar é de: "+precoPassagem+"KZ")
}
else if(distanciaPercorrer>200){
     precoPassagem=parseFloat(0.45 * distanciaPercorrer)
     console.log("O preco a pagar é de: "+precoPassagem+"KZ")
}
