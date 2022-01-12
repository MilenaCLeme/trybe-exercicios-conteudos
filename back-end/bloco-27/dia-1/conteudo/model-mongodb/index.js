const express = require('express');
const Author = require('./models/Author');

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`online da porta: ${PORT}`);
});

app.get('/Authors', async (_req, res) => {
  const authors = await Author.getAll();
  
  return res.status(200).json(authors)
});