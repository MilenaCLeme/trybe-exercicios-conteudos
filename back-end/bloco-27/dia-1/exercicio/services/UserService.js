const userModel = require('../models/UserModels');

const validarEmail = (email) => {
  if (email === undefined || email === '') return true;
  return false;
}

const validarPassword = (password) => {
  if (password === undefined || password === ''
  || typeof password !== 'string' || password.length > 6) return true;
  return false;
}

const validarFirstName = (firstName) => {
  if (firstName === undefined || firstName === '') return true;
  return false;
}

const validarLastName = (lastName) => {
  if (lastName === undefined || lastName === '') return true;
  return false;
}


const validacaoUser = async (req, res) => {
  const {email, firstName, lastName, password} = req.body
  if (!validarEmail(email) || !validarFirstName(firstName) || !validarLastName(lastName)
  || !validarPassword(password)) throw res.status(400).json(
    { error: true,
      message: "O campo 'password' deve ter pelo menos 6 caracteres"
    }
  );

  const userModels =  await userModel.createUser(firstName, lastName, email, password);

  if (userModels === undefined) throw res.status(400).json({message: 'Erro'})

  return userModels;
}

module.exports = {
  validacaoUser,
}