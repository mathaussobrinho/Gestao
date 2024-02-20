const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Configuração do banco de dados
const pool = new Pool({
  user: 'postgres',
  host: '24.144.93.104',
  database: 'gestor',
  password: 'ad62ee3689b1e142',
  port: 5432,
});

// Conexão com o banco de dados
pool.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conexão com o banco de dados estabelecida');
});

// Middleware para analisar corpos de solicitação
app.use(bodyParser.json());

// Rota para registro de usuário
app.post('/register', async (req, res) => {
  const { nome, email, senha } = req.body;
  const hashedPassword = await bcrypt.hash(senha, 10);
  const query = 'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3)';
  const values = [nome, email, hashedPassword];
  try {
    await pool.query(query, values);
    res.status(200).send('Usuário registrado com sucesso');
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).send('Erro ao registrar usuário');
  }
});

// Rota para login de usuário
app.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  const query = 'SELECT * FROM usuarios WHERE email = $1';
  const values = [email];
  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      res.status(401).send('Credenciais inválidas');
      return;
    }
    const user = result.rows[0];
    const validPassword = await bcrypt.compare(senha, user.senha);
    if (!validPassword) {
      res.status(401).send('Credenciais inválidas');
      return;
    }
    res.status(200).send('Login bem-sucedido');
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).send('Erro interno');
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
