const fs = require('fs').promises;

async function main(id) {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
  const returno = JSON.parse(simpsons);
  returno.forEach((e) => {
    console.log(`${e.id} - ${e.name}`);
  });
  const promise = new Promise((resolve, reject) => {
    const idVerificado = returno.filter((e) => Number(e.id) === id);
    if (idVerificado.length !== 0) {
      resolve(idVerificado)
    } else {
      reject(new Error('id não encontrado'));
    }
  });
  return promise;
}

async function procurarId() {
  try {
    const resultado = await main(19);
    console.log(`${resultado[0].id} - ${resultado[0].name}`)
  } catch (error) {
    console.log(`erro: ${error}`)
  }
}

function alterandoDoc(id, doc) {
  const simpsonsFiltrados = doc.filter((e) => e.id !== id);
  fs.writeFile('./simpsons.json', simpsonsFiltrados);
}

async function update(id) {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8')
    .then((date) => JSON.parse(date));
  id.forEach((e) => {
    await alterandoDoc(e, simpsons);
  });
}


procurarId();
