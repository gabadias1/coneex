const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const methodOverride = require('method-override');

// Middleware para suportar métodos PUT e DELETE em formulários
router.use(methodOverride('_method'));

// Rotas para contatos
router.get('/', contactController.getContacts);
router.post('/add', contactController.addContact);
router.put('/:id', contactController.updateContact);
router.delete('/:id', contactController.deleteContact); // Rota para deletar contato

// Rota para exibir o formulário de edição
router.get('/edit/:id', async (req, res) => {
  try {
    const contact = await contactController.getContactById(req.params.id);
    if (!contact) {
      return res.status(404).send('Contato não encontrado');
    }
    res.render('edit', { contact });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
