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

//2- 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

//Qual a variavel que precisa imprimir
let caract = "";

//repedir x vezes
let repedir = 5;

for(let index = 0; index < repedir; index += 1){
    caract += "*";
    console.log(caract);
}

//3 -Agora inverta o lado do triângulo. 
//valores que precisaram ser imprimidos 

let n = 5;
let n2 = n;
let line = "";
let estrela = "*";

for (let index = 0; index < n; index += 1) {
    for (let jindex = 0; jindex <= n; jindex += 1  ) {
        if (jindex < n2){
            line += " "
        } else {
            line += "*"
        }
    }
    console.log(line);
    line = "";
    n2 -= 1;
}

//  Depois, faça uma pirâmide com n asteriscos de base:



//Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

//Faça um programa que diz se um número definido numa variável é primo ou não.
