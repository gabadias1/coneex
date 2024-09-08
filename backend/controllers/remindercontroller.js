const Reminder = require('../models/reminder');

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

exports.getReminders = async (req, res) => {
  try {
    const reminders = await Reminder.find();
    res.status(200).json(reminders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
