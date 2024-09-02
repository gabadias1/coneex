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

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../frontend/views'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost/contact_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Routes
const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contactRoutes');

app.use('/', authRoutes);
app.use('/contacts', contactRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
