// src/config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nome_do_banco', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'mysql', // ou 'postgres', 'sqlite', etc.
});

module.exports = sequelize;
