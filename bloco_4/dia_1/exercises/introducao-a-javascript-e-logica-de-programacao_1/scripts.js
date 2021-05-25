//Primeiro exercicio
let a = 30;
let b = 50;
let sinal = "+"

if (sinal === "+") {
    console.log(a + b);
} else if (sinal === "-") {
    console.log(a - b);
} else if (sinal === "*") {
    console.log(a * b);
} else if (sinal === "/") {
    console.log(a / b);
} else if (sinal === "%") {
    console.log(a % b);
} else {
    console.log("Não é uma operação matematica");
}

//Segundo exercicio
let b = 300;
let c = 300;
let sinal 

if (b > c) {
    console.log("o b é maior que c");
} else if (b < c){
    console.log("o c é maior que b");
} else {
    console.log("são iguais")
}


//exercicio 3

let a = 500;
let b = 500;
let c = 500;

if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > c){
    console.log(b);
} else if (c >a && c > b){
    console.log(c);
} else {
    console.log("nunhum é maior que outro");
}


//Exercicio quatro
let a = 0;

if (a > 0){
    console.log("positivo")
} else if (a < 0){
    console.log("negativo")
} else {
    console.log("zero")
}

//Exercicio 5
let a = 50;
let b = 50;
let c = 80;

if (a + b + c === 180) {
    console.log(true);
} else if (a + b + c < 0){
    console.log("Mensagem de erro");
} else{ 
    console.log(false);
}

//Exercicio 6
let peçaDeXadrez = "Rainha";

switch(peçaDeXadrez){
    case "Rei": 
    console.log(peçaDeXadrez + "-> se movimenta para qualquer direção, sendo uma casa for vezes" );
    break;
    case "Rainha":
    console.log(peçaDeXadrez + "-> se movimenta para qualquer direção, sendo a mais forte");
    break;
    case "Bispo":
    console.log(peçaDeXadrez + "-> se movimenta na diagonals");
    break;
    case "Torre":
    console.log(peçaDeXadrez + "-> se movimenta na horizontal e vertical");
    break;
    case "Cavalo":
    console.log(peçaDeXadrez + "-> se movimenta em formado de L");
    break;
    case "Peão":
    console.log(peçaDeXadrez + "-> se movimenta na horizontal");
    break;
}

//Exercicio 7

let nota = 101;

if(nota >= 90 && nota <= 100){
    console.log("A");
} else if(nota >= 80 && nota < 90) {
    console.log("B");
} else if(nota >= 70 && nota < 80) {
    console.log("C");
} else if(nota >= 60 && nota < 70) {
    console.log("D");
} else if(nota >= 50 && nota < 60) {
    console.log("E");
} else if(nota < 50 && nota > 0) {
    console.log("F");
} else {
    console.log("Mensagem de erro 001 - Numero invalido");
}

//Exercicio 8

function numberRandom(){
    return Math.floor(Math.random() * 60 + 1)
}

let numberUne = numberRandom();
let numberTwo = numberRandom();
let numberThree = numberRandom ();
console.log(numberUne,numberTwo,numberThree);

if (numberUne % 2 === 0 || numberTwo % 2 === 0 || numberThree % 2 === 0){
    console.log("Algum numero sortiado é par:" + true);
} else {
    console.log("Algum numero sortiado é par:" + false);
}

//Exercicio 9

if (numberUne % 2 ==! 0 || numberTwo % 2 ==! 0 || numberThree % 2 ==! 0){
    console.log("Algum numero sortiado é impar:" + true);
} else {
    console.log("Algum numero sortiado é impar:" + false);
}

// Exercicio 10 
// Valor do custo total é valor do custo mais o imposto sobre o produto
// lucro é igual o valorvenda menos o valor custo total 
// total de produtos = mil 

let imposto = 0.2; 
let totalDeProdutos = 1000;
let lucro = 0; 
let valorDoCusto = 100;
let valorDaVenda = 200; 

for(let index = 1; index < totalDeProdutos; index += 1){
    let valorDoCustoTotal = (valorDoCusto * imposto) + valorDoCusto;
    let valorDolucro = valorDaVenda - valorDoCustoTotal;
    console.log("Valor do lucro de um produto " + valorDolucro);
    let resultado = valorDolucro * index
    console.log("Valor do lucro: " + resultado + " Atraves da venda de: " + index + " Quantidade de produtos");
}

//Exercicio 11
