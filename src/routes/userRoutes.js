const express = require('express');
const router = express.Router();
const User = require('../models/User');

// CREATE: Rota para adicionar um novo usuário
router.post('/users', async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const newUser = await User.sequelize.query(
      'INSERT INTO users (name, email, age) VALUES (?, ?, ?)',
      { replacements: [name, email, age], type: User.sequelize.QueryTypes.INSERT }
    );
    res.status(201).json({ message: 'Usuário criado com sucesso!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ: Rota para listar todos os usuários
router.get('/users', async (req, res) => {
  try {
    const users = await User.sequelize.query(
      'SELECT * FROM users',
      { type: User.sequelize.QueryTypes.SELECT }
    );
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ: Rota para obter um único usuário pelo ID
router.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.sequelize.query(
      'SELECT * FROM users WHERE id = ?',
      { replacements: [id], type: User.sequelize.QueryTypes.SELECT }
    );
    if (user.length === 0) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json(user[0]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// UPDATE: Rota para atualizar um usuário
router.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  try {
    await User.sequelize.query(
      'UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?',
      { replacements: [name, email, age, id], type: User.sequelize.QueryTypes.UPDATE }
    );
    res.json({ message: 'Usuário atualizado com sucesso!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE: Rota para excluir um usuário
router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await User.sequelize.query(
      'DELETE FROM users WHERE id = ?',
      { replacements: [id], type: User.sequelize.QueryTypes.DELETE }
    );
    res.json({ message: 'Usuário excluído com sucesso!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;