const Reminder = require('../models/reminder');

// Adicionar um lembrete
exports.addReminder = async (req, res) => {
  try {
    const { date, note } = req.body;
    const newReminder = new Reminder({ date, note });
    await newReminder.save();
    res.status(201).json(newReminder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obter todos os lembretes
exports.getReminders = async (req, res) => {
  try {
    const reminders = await Reminder.find();
    const formattedReminders = reminders.map(reminder => ({
      _id: reminder._id,
      date: new Date(reminder.date).toLocaleDateString(), // Formata a data
      note: reminder.note
    }));
    res.status(200).json(formattedReminders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Deletar um lembrete
exports.deleteReminder = async (req, res) => {
  try {
    const { id } = req.params;
    await Reminder.findByIdAndDelete(id);
    res.status(200).send('Lembrete deletado com sucesso');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
