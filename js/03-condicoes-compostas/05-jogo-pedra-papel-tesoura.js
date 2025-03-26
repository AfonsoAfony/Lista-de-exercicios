/*
31) [DESAFIO] Crie um jogo de JoKenPo (Pedra-Papel-Tesoura) 
*/
let jogador="papel";
let opcaoComputador
let opcao= Math.floor(Math.random() * 4)
/*
1=pedra
2=papel
3=tesoura
*/
opcao==1 ? opcaoComputador="pedra" : (opcao==2) ? opcaoComputador="papel" : opcaoComputador="tesoura";


if( (jogador=="pedra" && opcaoComputador=="tesoura") ||
    (jogador=="papel" && opcaoComputador=="pedra") ||
    (jogador=="tesoura" && opcaoComputador=="papel")){

    console.log("TU: "+jogador+" vs "+opcaoComputador+" :COMPUTADOR ")
    console.log("Ganhaste, meus Parabéns!!!")
}else if(jogador==opcaoComputador){
    console.log("TU: "+jogador+" vs "+opcaoComputador+" :COMPUTADOR ")
    console.log("Empate, tente de novo")
}
else{
    console.log("TU: "+jogador+" vs "+opcaoComputador+" :COMPUTADOR ")
    console.log("Perdeste!!!")
}