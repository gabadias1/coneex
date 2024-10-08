const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');
const reminderoutes = require('./routes/reminderoutes'); 

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));
app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, '../frontend/assets')));

app.set('views', path.join(__dirname, '../frontend/views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/contact_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const authRoutes = require('./routes/authroutes');
const contactRoutes = require('./routes/contactRoutes');

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/', authRoutes);
app.use('/contacts', contactRoutes);
app.use('/contacts/reminders', reminderoutes); 

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
