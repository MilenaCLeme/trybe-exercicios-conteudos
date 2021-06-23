// FIRST-CLASS FUNCTIONS

//Atribuir funções à variáveis:

const sum = (a, b) => a + b;

//Passar funções com argumento para outras funções 

const sayHello = () => {
  console.log('hello trybers');
}

setTimeout(sayHello, 1000);

//Retornar uma função de outra função

const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

//Higher Order Functions 

//Exemplo:

const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);

//HOF é uma função que atende ao critério de receber como parâmetro e/ou retornar outra função.

//Estruturando uma HOF 

//Exemplo
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(5, console.log);

//Para Fixar 

//1 - Crie uma função que retorne a string 'Acordando!!' ;

const acorda = () => 'Acordando!!';


//Crie outra função que retorne a string 'Bora tomar café!!'

const cafe = () => 'Bora tomar café!!';

//Crie mais uma função que retorne a string 'Partiu dormir!!' 

const dormir = () => 'Partiu dormir!!';

// Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:

const doingThings = (parametro) => {
  console.log(parametro())
}

// Ao chamar a função doingThings:
doingThings(acorda);
doingThings(cafe);
doingThings(dormir);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!