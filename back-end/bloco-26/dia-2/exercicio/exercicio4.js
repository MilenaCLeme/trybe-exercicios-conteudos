const fs = require('fs').promises;

async function main() {
  const simpsons = await fs.readFile('./simpsons.json')
    .then((e) => JSON.parse(e));
  simpsons.forEach((e) => {
    console.log(`${e.id} - ${e.name}`);
  });
}

async function idDoPersonagemIdentificada() {
  try {
    const resultadoDoId = await  IdIdentificaPersonagem(5)
    console.log(`${resultadoDoId[0].id} - ${resultadoDoId[0].name}`);
  } catch (error) {
    console.log(error)
  }
}

async function IdIdentificaPersonagem(id) {
  const simpsons = await fs.readFile('./simpsons.json')
    .then((e) => JSON.parse(e));
  const promise = new Promise((resolve, reject) => {
    const verifica = simpsons.filter((e) => Number(e.id) === id);
    if (verifica.length !== 0) {
      resolve(verifica);
    } else {
      reject(new Error('não identificado o numero'))
    }
  });
  return promise;
}

async function update(id) {
  const simpsons = await fs.readFile('./simpsons.json')
  .then((e) => JSON.parse(e));
  const simpsonsFiltrados = simpsons.filter((e) => Number(e.id) !== id);
  const string = JSON.stringify(simpsonsFiltrados)
  await fs.writeFile('./simpsons.json', string, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('sucesso');
    }
  })
}

async function recebePedidoParaAlterar() {
  const arr = [10, 6];
  arr.forEach((e) => {
    update(e)
  });
} 

main();
idDoPersonagemIdentificada();
recebePedidoParaAlterar();