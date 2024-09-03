const Contact = require('../models/Contact');

// Função para buscar um contato por ID
exports.getContactById = async (id) => {
  try {
    const contact = await Contact.findById(id);
    return contact;
  } catch (err) {
    throw new Error('Erro ao buscar o contato');
  }
};

// Função para buscar todos os contatos
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.render('contacts', { contacts });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Função para adicionar um novo contato
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

// Função para atualizar um contato existente
exports.updateContact = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, notes } = req.body;

  try {
    const contact = await Contact.findByIdAndUpdate(
      id,
      { name, email, phone, notes },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({ message: 'Contato não encontrado' });
    }

    res.redirect('/contacts');
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar o contato' });
  }
};
