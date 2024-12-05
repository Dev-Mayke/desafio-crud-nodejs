const express = require('express');
const authMiddleware = require("../controllers/AuthController");
const UserController = require('../controllers/userController');

const RoutesPrivates = express.Router();

RoutesPrivates.use(authMiddleware);

RoutesPrivates.get('/usuarios', UserController.getAllUsers);
RoutesPrivates.get('/usuarios/:id', UserController.getUserById);
RoutesPrivates.post("/usuarios", UserController.createUser);
RoutesPrivates.delete("/usuarios/:id", UserController.deleteUser)
RoutesPrivates.put("/usuarios/:id", UserController.updateUser)
RoutesPrivates.patch("/usuarios/:id", UserController.updatePath)

module.exports = RoutesPrivates;