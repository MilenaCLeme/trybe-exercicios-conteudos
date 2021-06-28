//Exercicios - Objetos e for/in

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
//Valor esperado no console: Bem-vinda, Margarida

console.log("Bem-vinda, " + info.personagem);

//Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

info["recorrente"] = "Sim";

console.log(info);

//Faça um for/in que mostre todas as chaves do objeto.

for(let index in info) {
    console.log(info[index]);
}

/*
Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
*/

let infoTwo = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: "Sim",
  };

  console.log(info.personagem + " " +infoTwo.personagem);
  console.log(info.origem + " " + infoTwo.origem);
  console.log(info.nota + " " +  infoTwo.nota);

  if(info["recorrente"] === infoTwo["recorrente"]) {
      console.log("Ambos recorrendes")
  } else {
      console.log(info["recorrente"] + ' ' + infoTwo["recorrente"] );
  }

  //Exercicio de Função
  //Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

  function verificaPalindromo(words) {
      if(words.split('').reverse().join('') === words) {
          console.log("É um palíndromo:" + true);
      } else {
          console.log("É um palindromo:" + false);
      }
  }

  verificaPalindromo("arara");

  //Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

  function maiorNumero(recebeArray){
      let maior = Math.max(...recebeArray)
      let repedir = 0 
      for (let index = 0; index < recebeArray.length; index += 1) {
          if(recebeArray[index] === maior){
              repedir += 1
          }
      }
      console.log(repedir);
  }

//Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function palavraFi (word, ending) {
    console.log(word.endsWith(`${ending}`))
}

palavraFi('joaofernando', 'fernan')

//Bonus 

function algorismoRomano (romano) {
    let numero = []
    for (let index = 0; index < romano.length; index += 1) {
        if (romano[index] === 'I') {
            numero.push(1)
        } else if (romano[index] === 'V') {
            numero.push(5)
        } else if (romano[index] === 'X') {
            numero.push(10)
        } else if (romano[index] === 'L') {
            numero.push(50)
        } else if (romano[index] === 'C') {
            numero.push(100)
        } else if (romano[index] === 'D') {
            numero.push(500)
        } else if (romano[index] === 'M') {
            numero.push(1000)
        }
    }
    let soma = 0
    if (soma === 0) {
        soma += numero[0]
    }
    for (let index = 1; index < numero.length; index += 1) {
        if (numero[0] >= numero[index]) {
            soma += numero[index]
        } else {
            soma -= numero[index]
        }
    }
    if (soma < 0) {
        soma = soma / -1 
    }
    console.log(soma)
}

algorismoRomano('IV')

//Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.


let novo = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vector) {
    let novoArray = []
    for (let index = 0; index < vector.length; index += 1) {
        let array = vector[index]
        for(let indexS = 0; indexS < array.length; indexS += 1) {
            if (array[indexS] % 2 === 0) {
                novoArray.push(array[index])
            }
        }
    }
    console.log(novoArray)
}

arrayOfNumbers(novo)

