const assert = require('assert');

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

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
//Dica: use a função find .

function authorBornIn1947() {
  const autoraNascidaAno = books.find((valeu) => valeu.author.birthYear === 1947)
  let separar = autoraNascidaAno.author.name
  return separar
}

//assert.strictEqual(authorBornIn1947(), 'Stephen King');

//2 - Retorne o nome do livro de menor nome.
//Dica: use a função forEach .

function smallerName() {
  let nameBook = ''
  // escreva aqui o seu código
  books.forEach(element => {
    if(nameBook === '') {
      nameBook = element.name 
    }
    if(element.name.length < nameBook.length) {
      nameBook = element.name
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

//assert.strictEqual(smallerName(), 'Duna');

// Encontre o primeiro livro cujo nome possui 26 caracteres

const expectedResult3 = [{
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
}];

function getNamedBook() {
  const primeiroLivro = books.find((valeu) => valeu.name.length === 26)
  let arrayDoPrimeiroLivro = [];
  arrayDoPrimeiroLivro.push(primeiroLivro)
  return arrayDoPrimeiroLivro;
}

//assert.deepStrictEqual(getNamedBook(), expectedResult3);

//Ordene os livros por data de lançamento em ordem decrescente.

const expectedResult7 = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  const livroOrdenados = books 
  livroOrdenados.sort((livro1, livro2) => livro2.releaseYear - livro1.releaseYear)
  return livroOrdenados;
}

//console.log(booksOrderedByReleaseYearDesc())

assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult7);



