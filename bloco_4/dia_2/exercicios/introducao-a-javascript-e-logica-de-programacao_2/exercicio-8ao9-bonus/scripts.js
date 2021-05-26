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
//Exercicio 1
 let numbers = [0,3,2,5,4,6,1,7];
 
 for(let index = 1; index < numbers.length; index += 1){
     for (let secondIndex = 0; secondIndex < index; secondIndex += 1){
         if(numbers[index] < numbers[secondIndex]){
             let position = numbers[index];
             numbers[index] = numbers[secondIndex];
             numbers[secondIndex] = position;
         }
     }
     console.log(position);
 }

 //Exercicio 2
 
 for(let index = 1; index < numbers.length; index += 1){
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1){
        if(numbers[index] > numbers[secondIndex]){
            let positionOrd = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = positionOrd;
        }
    }
    console.log(positionOrd);
}


