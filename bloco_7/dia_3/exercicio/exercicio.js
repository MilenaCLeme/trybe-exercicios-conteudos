//A função sum(a, b) retorna a soma do parâmetro a com o b

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

//Teste se o retorno de sum(4, 5) é 9
assert.strictEqual(sum(4, 5), 9)

//Teste se o retorno de sum(0, 0) é 0
assert.strictEqual(sum(0, 0), 0)

//Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5) 
assert.throws(sum(4,"5"))//?

//Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
sum(4, "5");

//A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
assert.deepStrictEqual(myRemove([1,2,3,4], 3), [1,2,4])

//Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemove([1,2,3,4],3), [1,2,3,4])

//Verifique se o array passado por parâmetro não sofreu alterações
let novoArray = [1,2,3,4]
assert.deepStrictEqual(myRemove(novoArray, 4), [1,2,3,4])

//Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemove([1,2,3,4],5), [1,2,3,4])

//A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
//Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
//Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4], 3), [1,2,4])

//Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemoveWithoutCopy([1,2,3,4], 3), [1,2,3,4])

//Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
let array = [1,2,3,4,5]
assert.notDeepStrictEqual(myRemoveWithoutCopy(array, 4), [1,2,3,4,5])

//Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4], 5), [1,2,3,4])

//A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número

const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
//Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz(345), 'fizzbuzz')

//Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz(12), 'fizz')

//Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz(50), 'buzz')

//Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz(2), 2)

//Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz('oi'), false)

//Compare dois objetos para verificar se são idênticos ou não

const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
//são iguais 
assert.deepStrictEqual(obj1, obj2)

//são diferentes 
assert.notDeepStrictEqual(obj2, obj3)

//Escrevendo código para testes
//Escreva a função addOne para passar nos testes já implementados.

const assert = require('assert');
// escreva a função addOne aqui

const addOne = (numero) => {
  let solo = [];
  for(let index = 0; index < numero.length; index += 1) {
    let resultado = numero[index] + 1
    solo.push(resultado)
  }
  return solo
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);


assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

//Escreva a função wordLengths para passar nos testes já implementados

const assert = require('assert');
// escreva a função sumAllNumbers aqui

const sumAllNumbers = (numeros) => {
  let soma = 0 
  for (let index = 0; index < numeros.length; index += 1) {
    soma += numeros[index];
  }
  return soma
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);

//Escreva a função findTheNeedle para passar nos testes já implementados.

const assert = require('assert');
// escreva a função findTheNeedle aqui

const findTheNeedle = (item1, item2) => {
  for (let index = 0; index < item1.length; index += 1) {
    if (item2 === item1[index]){
      return index 
    } 
  }
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

//não entendi
words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected); 

//Reescrevendo funções utilizando TDD - Parte 3
//Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const assert = require('assert');

const greetPeople = (people) => {
  let greeting = [];
  let nome = 'Hello '

  for (const person in people) {
    let resultado = nome + people[person];
    greeting.push(resultado)
  }
  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result)

//Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const assert = require('assert')

const removeVowels = (word) => {
  const results = []
  let numero = 0 

  for (let index = 0; index < word.length; index += 1) {
    if(word[index] === "a" || word[index] === "e" || word[index] === "i" || word[index] === "o" || word[index] === "u"){
      numero += 1
      results.push(numero)
    } else {
      results.push(word[index])
    }
  }

  return results.join('');
};


const parameter = 'Dayane';
const result = 'D1y2n3';

assert.deepStrictEqual(removeVowels(parameter), result)

//Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const assert = require('assert')

const greaterThanTen = (array) => {
  let results = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      results.push(array[index]);
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

assert.deepStrictEqual(greaterThanTen(parameter), result)

//Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const assert = require('assert');

function secondThirdSmallest(array) {
  let results = []
  array.sort(function (x, y) {
      return x - y;
  });
  results = [array[1], array[2]];
  return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

assert.deepStrictEqual(secondThirdSmallest(parameter), result)

//Bonus - 1

function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable;

  // escreva seu código aqui...

  return change;
}

const assert = require('assert');

let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepStrictEqual(result, expected);

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepStrictEqual(result, expected);

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepStrictEqual(result, expected);

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepStrictEqual(result, expected);

assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);

//Bonus 2

const assert = require('assert');
// escreva a função factorial aqui



const in1 = 5;
const exp1 = 120;

const in2 = 9;
const exp2 = 362880;

const in3 = 1;
const exp3 = 1;

const in4 = 0;
const exp4 = 1;

const in5 = 3;
const exp5 = 6;

const out1 = factorial(in1);
const out2 = factorial(in2);
const out3 = factorial(in3);
const out4 = factorial(in4);
const out5 = factorial(in5);

assert.strictEqual(out1, exp1);
assert.strictEqual(out2, exp2);
assert.strictEqual(out3, exp3);
assert.strictEqual(out4, exp4);
assert.strictEqual(out5, exp5);

