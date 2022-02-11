//  exportamos algo de um módulo ou arquivo JavaScript.

// Módulos internos
// fs : Fornece uma API para interagir com o sistema de arquivos de forma geral;
// url : Provê utilitários para ler e manipular URLs;
// querystring : Disponibiliza ferramentas para leitura e manipulação de parâmetros de URLs;
// util : Oferece ferramentas e funcionalidades comumente úteis a pessoas programadoras.

// Exportando módulos
// brlValue.js
// Não muido usual 
const brl = 5.37;

module.exports = brl;

// mais comum 
// brlValue.js
const brl = 5.37;

const usdToBrl = (valueInUsd) => valueInUsd * brl;

module.exports = usdToBrl;
// para usar o modulo acima 
// index.js
const convert = require('./brlValue');

const usd = 10;
const brl = convert(usd);

console.log(brl) // 53.7
// Para exportar mais de um item 
// brlValue.js
const brl = 5.37;

const usdToBrl = (valueInUsd) => valueInUsd * brl;

module.exports = {
  brl,
  usdToBrl,
};
// Dessa forma, ao importarmos o módulo, receberemos um objeto como resposta:

// index.js
const brlValue = require('./brValue');

console.log(brlValue); // { brl: 5.37, usdToBrl: [Function: usdToBrl] }

console.log(`Valor do dólar: ${brlValue.brl}`); // Valor do dólar: 5.37
console.log(`10 dólares em reais: ${brlValue.usdToBrl(10)}`); // 10 dólares em reais: 53.7

// Importando módulos

// Módulos locais
// meuModulo/funcionalidade-1.js

module.exports = function () {
  console.log('funcionalidade1');
}
// meuModulo/funcionalidade-2.js

module.exports = function () {
  console.log('funcionalidade2');
}
// meuModulo/index.js
const funcionalidade1 = require('./funcionalidade-1');
const funcionalidade2 = require('./funcionalidade-2');

module.exports = { funcionalidade1, funcionalidade2 };

// Para importarmos e utilizarmos o módulo meuModulo , basta passar o caminho da pasta como argumento para a função require , assim:
// minha-aplicacao/index.js
const meuModulo = require('./meuModulo');1

console.log(meuModulo); // { funcionalidade1: [Function: funcionalidade1], funcionalidade2: [Function: funcionalidade2] }

meuModulo.funcionalidade1();

// Módulos internos

const fs = require('fs');

fs.readFileSync('./meuArquivo.txt');

// Módulos de terceiros


