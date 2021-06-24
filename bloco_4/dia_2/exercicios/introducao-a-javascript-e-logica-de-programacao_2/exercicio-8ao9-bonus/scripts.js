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

//imagem para realizar a atividade 
 
for(let index = 1; index < numbers.length; index += 1){
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1){
        if(numbers[index] < numbers[secondIndex]){
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
            console.log(position);
        }
    }
}


//Bonus 
//Exercicio 1

let arrayNumbers = [1,5,2,3,6,7];

for(let index = 1; index < arrayNumbers.length; index += 1){
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1){
        if(arrayNumbers[index] < arrayNumbers[secondIndex]){
            let position = arrayNumbers[index];
            arrayNumbers[index] = arrayNumbers[secondIndex];
            arrayNumbers[secondIndex] = position;
        }
    }
}

console.log(arrayNumbers)

arrayNumbers.sort((a, b) => a - b);


//Exercicio 2

let arrayNumbers = [1,5,2,3,6,7];

for (let index = 1; index < arrayNumbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (arrayNumbers[index] > arrayNumbers[secondIndex]) {
        let position = arrayNumbers[index];
        arrayNumbers[index] = arrayNumbers[secondIndex];
        arrayNumbers[secondIndex] = position;
      }
    }
}

console.log(arrayNumbers);

//Exercicio 3
//Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:

let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let novoArray = []
let numero = 1

for(let index = 0; index < array.length; index += 1){
    if(numero < array.length) {
        let resultado = array[index] * array[numero];
        novoArray.push(resultado);
        numero += 1;
    } else {
        let novoNumero = array[index] * 2 
        novoArray.push(novoNumero);
    }
}

console.log(novoArray)