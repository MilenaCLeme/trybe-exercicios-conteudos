const { expect } = require('chai');

const { funcaoRetornaString } = require('../index');

describe('Exercicio 1 - verificando as resposta', () => {
  it('Essa função irá receber um número como parâmetro e retornar uma string como resposta', () => {
    const result = funcaoRetornaString(10);

    expect(typeof result).to.be.a('string');
  });

  it('Quando o número passado for maior que 0, devera retornar "positivo"', () => {
    const result = funcaoRetornaString(10);

    expect(result).to.be.equals('positivo');
  });

  it('Quando o número passado for menor que 0, devera retornar "negativo"', () => {
    const result = funcaoRetornaString(-10);

    expect(result).to.be.equals('negativo');
  });

  it('Quando o número passado for igual a 0, devera retornar "neutro"', () => {
    const result = funcaoRetornaString(0);

    expect(result).to.be.equals('neutro');
  });

  it('Quando passamos uma informação que não seja um numero, deverá informar "error não é um numero"', () => {
    const result = funcaoRetornaString('oii');

    expect(result).to.be.equals('o valor deve ser um número');
  });
});