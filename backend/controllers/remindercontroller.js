const Reminder = require('../models/reminder');

// Adiciona um novo lembrete
exports.addReminder = async (req, res) => {
    try {
        const reminder = new Reminder(req.body);
        await reminder.save();
        res.status(201).json(reminder);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
