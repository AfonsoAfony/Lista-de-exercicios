/*36) Um programa de vida saudável quer dar pontos atividades físicas que podem 
ser trocados por dinheiro. O sistema funciona assim: 

- Cada hora de atividade física no mês vale pontos 
- até 10h de atividade no mês: ganha 2 pontos por hora 
- de 10h até 20h de atividade no mês: ganha 5 pontos por hora 
- acima de 20h de atividade no mês: ganha 10 pontos por hora 
- A cada ponto ganho, o cliente fatura R$0,05 (5 centavos) 

Faça um programa que leia quantas horas de atividade uma pessoa teve por mês, 
calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar. */

let horas=28
let pontos
let valor

if (horas<=10) {
    pontos=2*horas;
    valor=parseFloat(5*pontos)
    console.log("As horas por mes são: "+horas+"h \n Os Pontos conseguidos são: "+pontos+"\n O valor a receber é de: "+valor+"Kz")
} 
else if (horas>10 && horas<=20) {
    pontos=5*horas;
    valor=parseFloat(5*pontos)
    console.log("As horas por mes são: "+horas+"h \n Os Pontos conseguidos são: "+pontos+"\n O valor a receber é de: "+valor+"Kz")
} 
else if (horas>20) {
    pontos=5*horas;
    valor=parseFloat(5*pontos)
    console.log("As horas por mes são: "+horas+"h \n Os Pontos conseguidos são: "+pontos+"\n O valor a receber é de: "+valor+"Kz")
} 