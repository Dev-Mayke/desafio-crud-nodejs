const { DataTypes } = require('sequelize');
const Connection = require('../config/database')

const TypeUserModel = Connection.define(
    'TypeUserModel',
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'tipo_usuario',
    }
)

module.exports = TypeUserModel;