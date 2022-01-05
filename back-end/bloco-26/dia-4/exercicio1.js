const express = require('express');

const app = express();

app.use(express.json());

app.get('/ping',(req, res) => {
  return res.status(200).json({message:'ok! ping'});
});

app.post('/user/register', (req, res) => {
  const { username, email, password } = req.body;
  const reg =  /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const test = reg.test(email);
  let validar = false

  if (username.length < 3) {
    validar = true
  } else if (test !== true) {
    validar = true
  } else if (password.length < 4 || password.length > 8) {
    validar = true
  } else {
    validar = false
  }


  if (validar) {
    return res.status(400).json({ "message": "invalid data" })
  }

  return res.status(201).json({ "message": "user created" });
})

app.listen(3000, () => console.log('rotando da porta 3000'));