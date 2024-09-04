const mongoose = require('mongoose');

// Definindo o esquema para Reminder
const reminderSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    note: {
        type: String,
        required: true
    }
});

// Criando o modelo com base no esquema
const Reminder = mongoose.model('Reminder', reminderSchema);

module.exports = Reminder;
