const Contact = require('../models/Contact');

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.render('contacts', { contacts });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.addContact = async (req, res) => {
  const { name, email, phone, notes } = req.body;
  try {
    const contact = new Contact({ name, email, phone, notes });
    await contact.save();
    res.redirect('/contacts');
  } catch (err) {
    res.status(500).send(err.message);
  }
};
