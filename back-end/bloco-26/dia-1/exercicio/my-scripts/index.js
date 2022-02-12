// Exercicio 8 
const readline = require('readline-sync');

const scripts = ['imc', 'velocidade', 'sorteio', 'fibonacci', 'fatorial'];

const index = readline.keyInSelect(scripts, 'Qual script quer exercutar ?');

require(`./${scripts[index]}.js`);
