const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'trybe',
  password: 'Milena@441',
  database: 'model_example',
});

module.exports = connection;
