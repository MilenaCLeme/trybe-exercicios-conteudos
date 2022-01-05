const axios = require('axios').default;

// Armazenamos o token numa variável.
// Num ambiente real, esse valor viria do Local Storage, ou de uma variável de ambiente
const API_TOKEN = '2d635ea9b637ea0f27d58985cc161d64';

// Criamos um novo objeto de headers
const headers = { Authorization: API_TOKEN };

const body = {
  name: 'Tryber',
  email: 'tryber@betrybe.com',
  password: 'Tr1b3r',
};

// Requisicao tipo get 
axios.post('https://postman-echo.com/post?param1=teste', body, { headers })
  .then((response) => {

    return response.data
  })
  .then((data) => {
    console.log(data);
  })
  .catch((erroroRResponse) => {
    // Em caso de falha simples
    if (erroroRResponse.status) {
      return console.error(`Request failed with status ${erroroRResponse}`)
    }

    console.error(erroroRResponse);
  });