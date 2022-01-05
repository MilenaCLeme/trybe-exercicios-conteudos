const readline = require('readline-sync');

const nome = readline.question('Qual seu nome?');
const altura = readline.questionFloat('Qual sua altura?');
const peso = readline.questionFloat('Qual seu peso?');

const calculandoIMC = (altura, peso) => {
  return (altura / peso * altura).toFixed(2);
};

const resultado = calculandoIMC(altura, peso);

console.log(`Seu nome é ${nome}, e sua IMC é ${resultado}`);
