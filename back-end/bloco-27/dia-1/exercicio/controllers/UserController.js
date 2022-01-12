const UserSerice = require('../services/UserService');

const userCreate = async (req, res) => {
  try {
    const userCreate = await UserSerice.validacaoUser();

    return res.status.json(userCreate);

  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'Eroor' });
  }
}

module.exports = {
  userCreate,
}