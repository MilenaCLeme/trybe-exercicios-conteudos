const connection = require('./connection');

//Buscar todos os livros do banco de dados 
const getAll = async () => {
  const [book] = await connection.execute(
    'SELECT id, title FROM model_example.books'
  );
  return book;
}

// Buscar todos os livros de acordo com author
const getByBookId = async (id) => {
  const [book_id] = await connection.execute(
    'SELECT id, title FROM model_example.books WHERE id = ?', [id]
  );
  if (book_id.length === 0) return null;

  return book_id;
}

//validar Dados 
const isValid = async (title, author_id) => {
  const [authorId] = await connection.execute(
    'SELECT id FROM model_example.authors WHERE id = ?', [author_id]
  )
  if (title === undefined || title === '' || title.length < 3) return false;
  if (author_id === undefined || author_id === '' || authorId.length === 0) return false;
  return true;
}

// crear dados
const crear = async (title, author_id) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)'
  [title, author_id]
);

module.exports = {
  getAll,
  getByBookId,
  isValid,
  crear,
};
