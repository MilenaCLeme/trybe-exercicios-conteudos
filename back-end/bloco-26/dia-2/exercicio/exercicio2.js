function verificarNumero(numbe1, numbe2, numbe3) {
  return new Promise((resolve, reject) => {
    if (typeof(numbe1) !== 'number' || typeof(numbe2) !== 'number' || typeof(numbe3) !== 'number') {
      reject(new Error('Informe apenas números'));
    }
    const resultado = (numbe1 + numbe2) * numbe3;
    if (resultado < 50) {
      reject(new Error('Valor muito baixo'));
    } else {
      resolve(resultado);
    }
  });
}

function numeroAleatorio() {
  const arry = [];
  for (let index = 0; index < 3; index += 1) {
    arry.push(Math.floor(Math.random() * 100 + 1));
  }
  return arry
}

async function main() {
  const numArr = await numeroAleatorio();
  try {
    const resultado = await verificarNumero(numArr[0], numArr[1], numArr[2]);
    console.log(resultado);
  } catch (error) {
    console.log(`erro ${error}`)
  }
}

main();

