const Reminder = require('../models/reminder');

// Adiciona um novo lembrete
exports.addReminder = async (req, res) => {
  try {
    const { date, note } = req.body;
    const newReminder = new Reminder({ date, note });
    await newReminder.save();
    res.json(newReminder); // Retorna o lembrete como JSON
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Obtém todos os lembretes (se necessário)
exports.getReminders = async (req, res) => {
  try {
    const reminders = await Reminder.find();
    res.render('contact', { reminders });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
