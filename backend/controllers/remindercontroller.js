const Reminder = require('../models/reminder');

// Adicionar um lembrete
exports.addReminder = async (req, res) => {
  try {
    let { date, note } = req.body;
    // Converter a data para formato correto no backend
    const [day, month, year] = date.split('/');
    const formattedDate = new Date(`${year}-${month}-${day}`);
    
    const newReminder = new Reminder({ date: formattedDate, note });
    await newReminder.save();
    res.status(201).json(newReminder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Obter todos os lembretes
exports.getReminders = async (_req, res) => {
  try {
    const reminders = await Reminder.find();
    const formattedReminders = reminders.map(reminder => ({
      _id: reminder._id,
      // Formatar a data no formato brasileiro DD/MM/YYYY
      date: new Date(reminder.date).toLocaleDateString('pt-BR'), 
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
