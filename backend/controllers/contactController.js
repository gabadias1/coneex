const Contact = require('../models/Contact');


exports.getContactById = async (id) => {
  try {
    const contact = await Contact.findById(id);
    return contact;
  } catch (err) {
    throw new Error('Erro ao buscar o contato');
  }
};


exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.render('contacts', { contacts });
  } catch (err) {
    res.status(500).send(err.message);
  }
};


exports.addContact = async (req, res) => {
  const { name, email, phone, notes, tags } = req.body;
  try {
    const contact = new Contact({
      name,
      email,
      phone,
      notes,
      tags: tags ? tags.split(',').map(tag => tag.trim()) : [] // Divide e limpa as tags
    });
    await contact.save();
    res.redirect('/contacts');
  } catch (error) {
    res.status(500).send('Erro ao adicionar contato');
  }
};


exports.updateContact = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, notes, tags } = req.body;

  try {
    const contact = await Contact.findByIdAndUpdate(
      id,
      { name, email, phone, notes, tags: tags ? tags.split(',').map(tag => tag.trim()) : [] }, // Divide e limpa as tags
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


exports.deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findByIdAndDelete(id);
    if (!contact) {
      return res.status(404).json({ message: 'Contato não encontrado' });
    }
    res.status(200).json({ message: 'Contato deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar o contato' });
  }
};


exports.getContactsByTag = async (req, res) => {
  try {
    const tag = req.query.tag;
    const contacts = await Contact.find({ tags: tag });
    res.render('contact', { contacts });
  } catch (error) {
    res.status(500).send('Erro ao buscar contatos');
  }
};
