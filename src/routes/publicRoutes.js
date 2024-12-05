const express = require('express');
const AuthController = require('../controllers/AuthController');
const UserController = require('../controllers/userController');
const path = require('path');

const RoutesPublics = express.Router();

RoutesPublics.get('/', (req, res) => {
    res.redirect('/login');
});

RoutesPublics.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/login.html'));
});

RoutesPublics.post('/login', AuthController.login);
RoutesPublics.post('/registrar', UserController.createUser);

module.exports = RoutesPublics;