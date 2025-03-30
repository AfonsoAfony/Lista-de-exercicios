/*100) Melhore o exercício 96, criando além da função Media() uma outra função 
chamada Situacao(), que vai retornar para o programa principal se o aluno está 
APROVADO, em RECUPERAÇÃO ou REPROVADO. Essa nova função, vai receber como 
parâmetro o resultado retornado pela função Media(). 
*/


function Media(nota1,nota2){
    return (nota1+nota2)/2
    }
    
    
    
    function Resultado(result){
    let estado = (result>=7 && result <10) ? "RECUPERAÇÃO" : ((result<7) ? "REPROVADO" : "APROVADO")
    return estado
    }
    console.log(` A média do aluno é: ${Media(5,5)} \n O aluno está ${Resultado(Media(5,5))}`)
    // ((result<7) ? "APROVADO " : "REPROVADO")