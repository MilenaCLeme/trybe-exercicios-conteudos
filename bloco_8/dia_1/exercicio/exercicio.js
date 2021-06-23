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

const newEmployees = (nomeCompleto) => {
  const employees = {
  }
  employees[transformarId()] = objNomeEmail(nomeCompleto)
  return employees;
};

//Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const numeroAleatorio = () => Math.floor(Math.random() * 5);

const aposta = (numeroApostado) => {
  if (numeroAleatorio() === numeroApostado) {
    return 'Parabéns você ganhou'
  } else {
    return 'Tente novamente'
  }
}

console.log(aposta(1))
