// exercicio do 1 ao 5
const readline = require('readline-sync');

const nome = readline.question('Qual seu nome?');
const altura = readline.questionFloat('Qual sua altura?');
const peso = readline.questionFloat('Qual seu peso?');

const calculandoIMC = (altura, peso) => {
  return (altura / peso * altura).toFixed(2);
};

const resultado = calculandoIMC(altura, peso);

const classificacaoIMC = (resultado) => {
  if (resultado < 18,5) return 'Abaixo do peso (magreza)';
  if (resultado > 18,5 && resultado < 24,9) return 'Peso normal';
  if (resultado > 24,9 && resultado < 29,9) return 'Acima do peso (sobrepeso)';
  if (resultado > 29,9 && resultado < 34,9) return 'Obesidade grau I';
  if (resultado > 34,9 && resultado < 39,9) return 'Obesidade grau II';
  if (resultado > 39,9) return 'Obesidade graus III e IV';
};

const resultadoClassificacao = classificacaoIMC(resultado);

console.log(`Seu nome é ${nome}, e sua IMC é ${resultado}, sua classificacao é ${resultadoClassificacao}`);
