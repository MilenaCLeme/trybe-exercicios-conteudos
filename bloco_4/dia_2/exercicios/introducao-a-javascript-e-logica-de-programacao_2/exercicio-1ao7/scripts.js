
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Exercicio 1 
for (let i = 0; i < numbers.length; ++i) {
    console.log(numbers[i]);
}

// Exercicio 2
let resultadoTwo = 0;

for(let i = 0; i < numbers.length; ++i) {
    resultadoTwo = resultadoTwo + numbers[i]
}

console.log(resultadoTwo);

//Exercicio 3
let resultadoThree = 0; 

for (let i = 0; i < numbers.length; ++i) {
    resultadoThree = resultadoThree + numbers[i]
}

console.log(resultadoThree / numbers.length);

//Exercicio 4

let resultadoFinal = resultadoThree / numbers.length;

if (resultadoFinal > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}

//Exercicio 5 - Ajuda slack 
let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroMax = 0;

for(let index = 0; index < numeros.length; index =+ 1){
    let numeroTwo = numeros[index];
    console.log(numeroTwo);
    if(numeroTwo > numeroMax) {
        numeroMax = numeroTwo;
    } else {

    }
}

console.log(numeroMax);
// outra forma de executar o arquivo 5

// Exercicio 6

let arraynumbrs = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numero = 0;
let hitNumerosDeImpar = 0;


for(let index = 0; index < arraynumbrs.length; index += 1){
    let numero = arraynumbrs[index];
    if(numero % 2 ==! 0) {
      hitNumerosDeImpar += 1;
    } else {
        false;
    }
}

if (hitNumerosDeImpar === 0) {
    console.log("nenhum valor ímpar encontrado");
    break;
} 

console.log(hitNumerosDeImpar);

//exercicio 7

let numerosExercicios = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroMini = 0;

for(let index = 0; index < numerosExercicios.length; index =+ 1){
    let numeroResultado = numerosExercicios[index];
    if(numeroResultado < numeroMini) {
        numeroMini = numeroResultado;
    } else {

    }
}

console.log(numeroMini);

