/*27) Crie um programa que leia duas notas de um aluno e calcule a sua média, 
mostrando uma mensagem no final, de acordo com a média atingida: 
- Média até 4.9: REPROVADO - Média entre 5.0 e 6.9: RECUPERAÇÃO - Média 7.0 ou superior: APROVADO 
 */

let n1=12
let n2=10
let media=parseFloat((n1+n2)/2)

if (media<=4.9) {
    console.log("A media do aluno é de "+media+" Valores. O aluno está: REPROVADO")
} 
else if (media>=5.9 && media<=6.9) {
    console.log("A media do aluno é de "+media+" Valores. O aluno vai para a: RECUPERAÇÃO")
}  
else if (media>=7) {
    console.log("A media do aluno é de "+media+" Valores. O aluno está: APROVADO")
}