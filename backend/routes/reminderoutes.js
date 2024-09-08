const express = require('express');
const router = express.Router();
const reminderController = require('../controllers/remindercontroller');

router.post('/add', reminderController.addReminder);

router.get('/', reminderController.getReminders);

module.exports = router;
