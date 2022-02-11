const connection = require('./connection');

const getNewAuthor = ({id, firstName, middleName, lastName}) => {
  return {
    id,
    firstName,
    middleName,
    lastName,
  }
}

// Buscar todos os autores do banco
const getAll = async () => {
  return connection()
    .then((db) => db.collection('authors').find().toArray())
      .then((authors) => {
        return authors
      })
}

module.exports = {
  getAll,
}