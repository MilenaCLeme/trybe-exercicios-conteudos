//Pratique um pouco, escreva funções simples (soma, concatenação de strings etc.) e crie testes utilizando os vários métodos disponíveis no módulo assert . Se precisar, consulte a tabela neste link com os métodos do assert mais utilizados!

const assert = require('assert');

const { setUncaughtExceptionCaptureCallback } = require('process');

const sum = (num1, num2) => num1 + num2;

const expectativa = sum(5, 2)


//const dividir = (num1, num2) => num1 / num2;

const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`

const string = nomeCompleto("Milena", "Leme")

assert.strictEqual(string, 'Milena Leme', 'é diverente')
//assert.notDeepStrictEqual(string, 'Milena Leme', "É diverente? ")


assert.strictEqual(expectativa, 7, 'a soma é cinco?')
