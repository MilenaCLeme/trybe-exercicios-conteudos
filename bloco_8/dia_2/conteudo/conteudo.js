//Array.forEach

//Use o método forEach chamando a callback showEmailList para apresentar os emails

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui

const apresentandoMensagem = (callback) => {
  emailListInData.forEach((item) => {
    callback(item)
  })
}

//apresentandoMensagem(showEmailList);

//Array.find

//Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (numero) => numero % 3 === 0 && numero % 5 === 0;

const test = numbers.find(findDivisibleBy3And5);

console.log(test);

const isEven2 = numbers.find((number) => number % 3 === 0);

console.log(isEven2);

//2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const seraparaElemento = (elemento) => elemento.length > 5;

const test1 = names.find(seraparaElemento);

console.log(test1)

//3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function localizar(elemento) {
  return elemento.id === '31031685'
}

console.log(musicas.find(localizar))

//Array.some e Array.every

//Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;

const abacaxi = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((nome) => nome === name);

console.log(hasName(abacaxi, 'Ana'))

// Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every ;

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => Object.values(arr).every((elemento4) => elemento4.age >= minimumAge )

console.log(verifyAges(people, 18));

// Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui
//people.sort((valor1, valor2) => valor1.age - valor2.age)

//console.log(people);

//2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente .

people.sort((valor1, valor2) => valor2.age - valor1.age)

console.log(people)