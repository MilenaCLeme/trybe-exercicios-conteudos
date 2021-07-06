//Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.

function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

//modificado

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não deve ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
oddsAndEvens.sort((a, b) => a - b)

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente`); // será necessário alterar essa linha 😉

//Crie uma função que receba um número e retorne seu fatorial.

const fatorial = numero => {
  let resultado = numero
  for (let index = 1; index < numero; index += 1){
    resultado *= index
  }
  console.log(resultado)
}

fatorial(4)

//Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = frase => {
  let separar = frase.split(" ");
  let bigPalavra = ""
  for(let index = 0; index < separar.length; index += 1){
    let palavra = separar[index]
    if(palavra.length > bigPalavra.length) {
      bigPalavra = palavra
    }
  }
  console.log(bigPalavra)


longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

//Crie uma página que contenha:
//Um botão ao qual será associado um event listener ;
//Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
//Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.


const botao = document.getElementById('submit')

