const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const app = express();

// Mock de modelo de usuário e bcrypt
jest.mock('bcryptjs');
jest.mock('../models/user'); // Corrigir o caminho para 'user.js'
const User = require('../models/user');  // Importa o modelo de usuário

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

// Controlador de login
const authController = require('../controllers/authController');
app.post('/login', authController.login);

describe('POST /login', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should login successfully with correct credentials', async () => {
    const mockUser = { _id: 'user-id', username: 'user@example.com', password: 'hashed-password' };
    User.findOne = jest.fn().mockResolvedValue(mockUser);
    bcrypt.compare = jest.fn().mockResolvedValue(true);

    const response = await request(app)
      .post('/login')
      .send({ username: 'user@example.com', password: 'password123' });

    expect(response.statusCode).toBe(302); // 302 é o status para redirecionamento
    expect(response.headers.location).toBe('/contacts');
  });

  it('should return 401 for invalid credentials', async () => {
    User.findOne = jest.fn().mockResolvedValue(null);

    const response = await request(app)
      .post('/login')
      .send({ username: 'user@example.com', password: 'wrongpassword' });

    expect(response.statusCode).toBe(401);
    expect(response.text).toBe('Invalid credentials');
  });

  it('should return 401 for incorrect password', async () => {
    const mockUser = { _id: 'user-id', username: 'user@example.com', password: 'hashed-password' };
    User.findOne = jest.fn().mockResolvedValue(mockUser);
    bcrypt.compare = jest.fn().mockResolvedValue(false);

    const response = await request(app)
      .post('/login')
      .send({ username: 'user@example.com', password: 'wrongpassword' });

    expect(response.statusCode).toBe(401);
    expect(response.text).toBe('Invalid credentials');
  });

  it('should return 500 on server error', async () => {
    User.findOne = jest.fn().mockRejectedValue(new Error('Database error'));

    const response = await request(app)
      .post('/login')
      .send({ username: 'user@example.com', password: 'password123' });

    expect(response.statusCode).toBe(500);
    expect(response.text).toBe('Database error');
  });
});
/*No código que você forneceu, você criou 4 testes no total para o controlador de login. Aqui está um resumo de cada um:

Teste de Login com Credenciais Corretas:

Objetivo: Verificar se o login é bem-sucedido quando as credenciais fornecidas estão corretas.
Expectativas: O status da resposta deve ser 302 (redirecionamento) e o cabeçalho de localização deve ser /contacts.
Teste para Credenciais Inválidas:

Objetivo: Verificar se o sistema retorna um erro 401 quando o nome de usuário fornecido não existe no banco de dados.
Expectativas: O status da resposta deve ser 401 e a mensagem deve ser 'Invalid credentials'.
Teste para Senha Incorreta:

Objetivo: Verificar se o sistema retorna um erro 401 quando a senha fornecida está incorreta.
Expectativas: O status da resposta deve ser 401 e a mensagem deve ser 'Invalid credentials'.
Teste para Erro de Servidor:

Objetivo: Verificar se o sistema retorna um erro 500 quando ocorre um erro no banco de dados (por exemplo, falha ao encontrar o usuário).
Expectativas: O status da resposta deve ser 500 e a mensagem deve ser 'Database error'. */