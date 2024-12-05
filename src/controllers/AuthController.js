const UserModel = require('../models/UserModel');
const jwt = require('jsonwebtoken');

class AuthController {

    async login(request, response) {
        try {
            const { login, password } = request.body;

            const user = await User.findOne({
                where: {
                    email: login,
                    senha: password
                }
            });

            if(user) {
                const data = {
                    email: login,
                }

                const token = jwt.sign(data, 'teste123');
                return response.status(200).json({
                    message: 'Login realizado com sucesso',
                    token: token
                })
            }
            return response.status(500).json({
                message: 'Login ou senha incorreto'
            })
        } catch(e) {
            return response.status(500).json({ error: 'Ocorreu um erro ao listar usuários.' });
        }
    }
}

module.exports = new AuthController();