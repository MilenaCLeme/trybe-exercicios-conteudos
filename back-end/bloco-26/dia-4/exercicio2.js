const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(400).json({'mensagem': 'funcionou'})
});

app.listen('3001', () => console.log('rotando da porta 3001'));