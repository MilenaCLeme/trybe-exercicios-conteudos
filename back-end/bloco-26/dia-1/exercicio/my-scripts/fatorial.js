// Bonus 1
const readline = require('readline-sync');

const numeroPraFatoriar = readline.questionFloat('Falei um numero para favoriar');

const fatorial = (numero) => {
  let inicio = numero;
  for(let index = numero; index === 0; index -= 1) {
    if (numero !== index) {
      inicio *= index;
    };
  };
  return inicio;
};

console.log(`${fatorial(numeroPraFatoriar)}`);
