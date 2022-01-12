const connection = require('./connection');

// inserir do banco de dados as informações;

const createUser = async (firstName, lastName, email, password) => {
  connection()
  .then((db) => db.collection('').insetOne({firstName, lastName, email, password}))
  .then(result => {
    return result;
  });
}

module.exports = {
  createUser
}