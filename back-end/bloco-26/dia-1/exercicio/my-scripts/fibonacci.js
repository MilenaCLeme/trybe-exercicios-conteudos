// Bonus - 2
const readline = require('readline-sync');

// function do corse - gabarito 
const calculaElemento = (n) => {
  let a = 1;

  let b = 1;

  for (;n >= 0; n--) {
    if (b) console.log(b);

    const temp = a;

    a = a + b;

    b = temp;
  };

  console.log(b);
  return b;
};

function realizarCalculo() {
  const n = readline.questionInt('Digite o valor de n:');

  if (n <= 0) {
    console.log('Digite um numero maior que O!');
  };

  console.log(`n: ${n}`);

  calculaElemento(n - 2);
};

realizarCalculo();
