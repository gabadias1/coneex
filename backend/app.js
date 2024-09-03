const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));

// Middleware para suportar métodos PUT e DELETE em formulários
app.use(methodOverride('_method'));

// Configura a pasta de visualizações e o mecanismo de visualização EJS
app.set('views', path.join(__dirname, '../frontend/views'));
app.set('view engine', 'ejs');

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost/contact_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Configurar rotas
const authRoutes = require('./routes/authroutes');
const contactRoutes = require('./routes/contactroutes');

// Rota para a página inicial
app.get('/', (req, res) => {
    res.render('index'); // Renderiza o arquivo views/index.ejs
});

app.use('/', authRoutes);
app.use('/contacts', contactRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
