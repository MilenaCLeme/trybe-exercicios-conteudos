// Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

//criar uma função que retorna um objeto nomecompleto , email 

const objNomeEmail = (nomeCompleto) => ({
  Nome: nomeCompleto,
  email: criarEmail(nomeCompleto)
});

const criarEmail = (nomeCompleto) => {
  let separar = nomeCompleto.split(' ');
  let inicio = separar[0].toString();
  for (index = 1; index < separar.length; index += 1) {
    inicio += '_' + separar[index].toString()
  }
  let final = '@trybe.com'
  let email = inicio + final
  return email.toLowerCase()
}

let soma = 1 

const transformarId = () => {
  let identificação = 'id' + soma;
  soma += 1
  return identificação
}

const newEmployees = (nomeCompleto, clakback, criandoID) => {
  const employees = {
  }
  employees[criandoID()] = clakback(nomeCompleto)
  return employees;
};

console.log(newEmployees('Milena Leme', objNomeEmail,transformarId))
console.log(newEmployees('Pedro Guerra',objNomeEmail,transformarId))
console.log(newEmployees('Luiza Drumond',objNomeEmail,transformarId))
console.log(newEmployees('Carla Paiva',objNomeEmail,transformarId))
console.log(newEmployees('Gustavo Lima',objNomeEmail,transformarId))

//Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const numeroAleatorio = () => Math.floor(Math.random() * 5);

const aposta = (numeroApostado, clakback) => {
  if (clakback === numeroApostado) {
    return 'Parabéns você ganhou'
  } else {
    return 'Tente novamente'
  }
}



//Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const pontuacaoDoEstudante = (gabarito, respostas) => {
  let pontou = 0
  for (let index = 0; index < respostas.length; index += 1) {
    if (gabarito[index] === respostas[index]){
      pontou += 1;
    } else if (respostas[index] === 'N.A'){
      pontou += 0;
    } else {
      pontou += 0.5;
    }
  }
  return pontou;
}

const pontuacaoDosEstudantes = (gabarito, respostas, clakback) => {
  console.log(clakback(gabarito, respostas))
}

//Parte I - Game Actions Simulator

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

//const battleMembers = { mage, warrior, dragon };

//Crie uma função que retorna o dano do dragão.
//O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const danoDoDragon = () => {
  return Math.floor(Math.random() * (dragon.strength - 15) + dragon.strength);
}

//Crie uma função que retorna o dano causado pelo warrior .
//O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const danoDoWarrior = () => {
  let danoMagico = warrior.strength * warrior.weaponDmg
  return Math.floor(Math.random() * (danoMagico - warrior.strength) + danoMagico)
}

//Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
//O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
//A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
const manaMenos = mage.mana
let diminuicao = 0


const danoDoMago = () => {
  let danoMagicoMax = mage.intelligence * 2; 
  const objDanoManaGasta = {
    dano: Math.floor(Math.random() * (danoMagicoMax - mage.intelligence) + danoMagicoMax),
  }
  return objDanoManaGasta
}

console.log(danoDoMago())