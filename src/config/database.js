// src/config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('crud_db', 'root', 'sua_senha', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;