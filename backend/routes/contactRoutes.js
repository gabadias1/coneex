const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController'); 
const methodOverride = require('method-override');

router.use(methodOverride('_method'));


router.get('/', contactController.getContacts);

router.post('/add', contactController.addContact);

router.put('/:id', contactController.updateContact);

router.delete('/:id', contactController.deleteContact);

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

router.get('/search', contactController.getContactsByTag);

module.exports = router;
