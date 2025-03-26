/*28) Faça um programa que leia a largura e o comprimento de um terreno 
retangular, calculando e mostrando a sua área em m². O programa também 
devemostrar a classificação desse terreno, de acordo com a lista abaixo:
- Abaixo de 100m² = TERRENO POPULAR 
- Entre 100m² e 500m² = TERRENO MASTER 
- Acima de 500m² = TERRENO VIP  */
let largura=10
let comprimento=2
let metrosQuadrados= parseFloat(largura*comprimento)

console.log("A area deste Terreno em m² é de: "+ metrosQuadrados+"m²")
if(metrosQuadrados<100){
    console.log("Este Terreno é um: TERRENO POPULAR")
}
else if(metrosQuadrados>=100 && metrosQuadrados<=500){
    console.log("Este Terreno é um: TERRENO MASTER")
 }
 else{
    console.log("Este Terreno é um: TERRENO VIP")
 }