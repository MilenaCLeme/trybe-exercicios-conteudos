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

async function main() {
  try {
    const resultado = await verificarNumero(0, 1, 4);
    console.log(resultado);
  } catch (error) {
    console.log(`erro ${error}`)
  }
}

main();