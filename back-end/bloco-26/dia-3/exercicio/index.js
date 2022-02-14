// Exercício 1 : Estruture os testes utilizando mocha e chai para um função que irá dizer se um número é "positivo", "negativo" ou "neutro":

const funcaoRetornaString = (numero) => {
  if (typeof numero !== 'number') return 'o valor deve ser um número';
  if (numero === 0) return 'neutro';
  if (numero > 0) return 'positivo';
  if (numero < 0) return 'negativo';
};

// exercicio 4

module.exports =  {
  funcaoRetornaString,
};
