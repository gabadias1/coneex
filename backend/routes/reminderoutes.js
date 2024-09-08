const express = require('express');
const router = express.Router();
const reminderController = require('../controllers/remindercontroller');

// Rota para adicionar um lembrete
router.post('/add', reminderController.addReminder);

// Rota para obter todos os lembretes
router.get('/', reminderController.getReminders);

// Rota para deletar um lembrete
router.delete('/delete/:id', reminderController.deleteReminder);

module.exports = router;
