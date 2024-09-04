const express = require('express');
const router = express.Router();
const reminderController = require('../controllers/remindercontroller');

// Rota para adicionar um lembrete
router.post('/', reminderController.addReminder);

module.exports = router;
