
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

//Exercicio 5
//Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 0; index < numbers.length; index =+ 1){
    let numeroAtual = numbers[index]
    console.log(numeroAtual);
}

console.log(numeroAtual);

