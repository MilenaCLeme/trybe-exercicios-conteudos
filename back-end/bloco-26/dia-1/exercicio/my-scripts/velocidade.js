// exercicio 6
const readline = require('readline-sync');

const nome = readline.question('Qual seu nome?');
const tempo = readline.questionFloat('tempo utilizado para o ponto A ao ponto B');
const distancia = readline.question('distancia do ponto A ao ponto B');

const calcularVelocidadeMedia = (distancia, tempo) => {
  return distancia / tempo;
};

const resultado = calcularVelocidadeMedia(distancia, tempo);

console.log(`${nome} - velocidade media entre o ponto A e o ponto B - ${resultado}`)