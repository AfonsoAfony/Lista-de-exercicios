/*
32) [DESAFIO] Crie um jogo onde o computador vai sortear um número entre 1 e 5 o 
jogador vai tentar descobrir qual foi o valor sorteado. 
 */

let numPC= Math.floor(Math.random() * 6)
let numGamer=3;

if(numGamer===numPC){
    console.log("Acertaste!!! o número é mesmo: "+ numPC)
}
else{
    console.log("Erraste!!! o número é: "+ numPC)
}
