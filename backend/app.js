const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');
const reminderroutes = require('./routes/reminderoutes'); // Verifique se o caminho está correto

const app = express();
const PORT = 3000;

// Configurações do Express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));
app.use(methodOverride('_method'));

// Serve arquivos estáticos (como CSS, JS)
app.use(express.static(path.join(__dirname, '../frontend/assets')));

// Configuração de Views e Engine
app.set('views', path.join(__dirname, '../frontend/views'));
app.set('view engine', 'ejs');

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost/contact_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Importação de Rotas
const authRoutes = require('./routes/authroutes');
const contactRoutes = require('./routes/contactRoutes');

// Rotas
app.get('/', (req, res) => {
  res.render('index');
});

app.use('/', authRoutes);
app.use('/contacts', contactRoutes);
app.use('/contacts/reminders', reminderroutes); // Certifique-se de que o caminho está correto

// Inicia o Servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
