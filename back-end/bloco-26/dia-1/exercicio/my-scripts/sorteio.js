//exercicio 7
const readline = require('readline-sync');

const gerarNumeroAleatorio = () => {
  return Math.random() * (10 - 1) + 1;
};

const verificarResultado = (numeroPessoa) => {
  const numeroAleatorio = gerarNumeroAleatorio();
  if (numeroPessoa === numeroAleatorio) {
    return 'Parabéns, número correto!';
  } else {
    return `Opa, não foi dessa vez. O número era ${numeroAleatorio}"`
  }
}

const jogo = () => {
  const numeroPessoa = readline.questionFloat('Fale um numero de 1 a 10');

  const resultado = verificarResultado(numeroPessoa);

  console.log(`${resultado}`);

  const jogarNovamente = readline.questionFloat('Jogar Novamento ? S ou N');

  if (jogarNovamente === 'S') return jogo();
}

game();
