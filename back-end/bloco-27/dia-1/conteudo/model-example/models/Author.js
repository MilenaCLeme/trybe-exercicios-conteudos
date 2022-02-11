const connection = require('./connection');

// Criar uma string com o nome completo do autor 
const getFullNameAuthor = (first_name, middle_name, last_name) => {
  // note que `Boolean` é uma função que recebe um paramentro e retorna true ou false
  const fullName = [first_name, middle_name, last_name].filter(Boolean).join(' ');

  return fullName;
}

// converte o nome dos campos de snake_case
const serialize = ({id , first_name, middle_name, last_name}) => ({
  id,
  firstName: first_name,
  middleName: middle_name,
  last_Name: last_name,
  fullName: getFullNameAuthor(first_name, middle_name, last_name),
});

// Busca todos os autores do banco
const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors'
  );
  return authors.map(serialize);
}

// Buscar um autor especifico, a partir do seu ID 
const findById = async (id) => {
  const query = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?'
  const [ authorData ] = await connection.execute(query, [id]);

  if (authorData.length === 0) return null;

  return serialize(authorData[0]);
}

// validadar dados
const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

// criar novo autor do banco de dados
const create = async (firstName, middleName, lastName) => connection.execute(
  'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
  [firstName, middleName, lastName],
);

module.exports = {
  getAll,
  findById,
  isValid,
  create,
}