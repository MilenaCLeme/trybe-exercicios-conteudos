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
