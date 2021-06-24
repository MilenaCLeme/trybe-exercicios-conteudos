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


let repedir = 5 
let base = ""

for(let index = 1; index <= repedir; index += 1){
    for(let indexS = 1; indexS <= (repedir - index); indexS += 1){
        base += " ";
    }
    for(let indexSe = 1; indexSe <= index; indexSe += 1){
        base += "*"
    }
    console.log(base)
    base = ""
}


//  Depois, faça uma pirâmide com n asteriscos de base:
// base do codigo refazer ! 
let n = 5;
let symbol = '*';
let inputLine = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
};



//Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
let n = 7;
let meio = (n + 1) / 2;
let controleEsquerda = meio;
let controleDireita = meio;
let estrela = '*';

for (let linha = 1; linha <= meio; linha += 1) {
    let linhas = '';
    for (let coluna = 1; coluna <= n; coluna += 1) {
        if (coluna == controleEsquerda || coluna == controleDireita || linha == meio) { // Porque tem essa Linha ? 
            linhas += estrela;
        } else {
            linhas += ' ';
        }
    }
    controleEsquerda -= 1;
    controleDireita += 1;
    console.log(linhas)
}



//Faça um programa que diz se um número definido numa variável é primo ou não.

