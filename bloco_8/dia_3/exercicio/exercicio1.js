const assert = require('assert');
//const { sep } = require('path/posix');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
//1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
//Dica: Use a função map

const expectedResult2 = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

function formatedBookNames() {
  const arrayDeInformação = books.map((valeu) => `${valeu.name} - ${valeu.genre} - ${valeu.author.name}`);
  return arrayDeInformação;
}

//assert.deepStrictEqual(formatedBookNames(), expectedResult2);

//Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
//Dica: use as funções map , sort

const expectedResult = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

function nameAndAge() {
  const nomeEIdade = books.map((valeu) => {
    return {
      age: valeu.releaseYear - valeu.author.birthYear,
      author: valeu.author.name
    }
  })
  nomeEIdade.sort((valeu1, valeu2) => valeu1.age - valeu2.age )
  return nomeEIdade;
}

//assert.deepStrictEqual(nameAndAge(), expectedResult);

//Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
//Dica: use as função filter ;

const expectedResult3 = [
  { 
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965
  }
];

function fantasyOrScienceFiction() {
  const conteudoDeFantasiaECientifica = books.filter((valeu) => {
    if (valeu.genre === 'Ficção Científica' || valeu.genre === 'Fantasia') {
      return valeu
    }
  })
  return  conteudoDeFantasiaECientifica;
}

//assert.deepStrictEqual(fantasyOrScienceFiction(), expectedResult3);

//Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
//Dica: use as funções filter e sort

const expectedResult10 = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];

function oldBooksOrdered() {
  const livrosMaisDeSessentaAnos = books.filter((livro) => 2021 - livro.releaseYear > 60)
  return livrosMaisDeSessentaAnos.sort((livro1, livro2) => livro1.releaseYear - livro2.releaseYear)
}

//assert.deepStrictEqual(oldBooksOrdered(), expectedResult10);

//Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const expectedResult11 = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  const autoresFiccao = books.filter((livro) => livro.genre === 'Ficção Científica' || livro.genre === 'Fantasia') 
  const autores = autoresFiccao.map((autor) => `${autor.author.name}`)
  return autores.sort()
}

//assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult11);

//Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const expectedResult14 = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  // escreva seu código aqui
  const livrosAcimaDe60 = books.filter((livro) => 2021 - livro.releaseYear > 60)
  const nomeDosLivrosAcimaDe60 = livrosAcimaDe60.map((livro) => `${livro.name}`)
  return nomeDosLivrosAcimaDe60;
}

//assert.deepStrictEqual(oldBooks(), expectedResult14);

//Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
//Dica: cada inicial termina com um ponto.

const expectedResult17 = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  const nomeDoLivro = books.forEach((livro) => {
    let palavra = livro.author.name.split('');
    let soma = 0
    const frase = palavra.filter((letra) => {
      if (letra === '.') {
        soma += 1;
      }
    })
    if(soma === 3) {
      return livro.name;
    }
  })
}

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult17);