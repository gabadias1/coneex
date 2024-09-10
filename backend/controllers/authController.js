const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  const { username, password } = req.body;

  // Verifique se o username contém um '@'
  if (!username.includes('@')) {
    return res.status(400).send('O nome de usuário deve conter um @');
  }

  try {
    const user = new User({ username, password });
    await user.save();
    res.redirect('/login');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  // Verifique se o username contém um '@'
  if (!username.includes('@')) {
    return res.status(400).send('O nome de usuário deve conter um @');
  }

  try {
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send('Credenciais inválidas');
    }
    req.session.userId = user._id;
    res.redirect('/contacts');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
};
