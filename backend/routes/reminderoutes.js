const express = require('express');
const router = express.Router();
const ReminderController = require('../controllers/remindercontroller');

// Rota para adicionar um lembrete
router.post('/', ReminderController.addReminder);

// Rota para obter lembretes (se necessário)
router.get('/', ReminderController.getReminders);

module.exports = router;
