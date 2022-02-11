const express = require('express');
const userCreateController = require('./controllers/UserController');

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Online da Porta: ${PORT}`)
});

// Crie o endpoint POST /user
// Seu endpoint deve receber o seguinte conteúdo no body da request:
app.post('/user', userCreateController.userCreate);