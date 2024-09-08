const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  note: { type: String, required: true }
});

const Reminder = mongoose.model('Reminder', reminderSchema);

module.exports = Reminder;

