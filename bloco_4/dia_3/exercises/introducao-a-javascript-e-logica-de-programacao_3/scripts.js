// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n 

//Qual a variavel que precisa imprimir 
let caracteristica = ""

//repedi x vezes a coluna 
let nVezesDeRepedição = 5; 

for(let index = 0; index < nVezesDeRepedição; index += 1){
     caracteristica += "*";
}
for(let indexSegundo = 0; indexSegundo < nVezesDeRepedição; indexSegundo += 1){
    console.log(caracteristica);
}



