//Exercicio oito 
let numbers = 25;
let arrayNumbers = [];

for(let index = 1; index <= numbers; index += 1){
    arrayNumbers.push(index);
}

console.log(arrayNumbers);

//Exercicio nove 
for(let indexDivisão = 0; indexDivisão < arrayNumbers.length; indexDivisão += 1){
    let resultadoDivisão = arrayNumbers[indexDivisão] / 2;
    console.log(resultadoDivisão);
}

//Bonus 
