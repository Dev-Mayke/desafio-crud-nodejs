const TypePayment = require("../models/TypePayment")

const createTypePayment= async (req, res) => {
    const { nome, } = req.body;
    try {
      const newTypePayment = await TypePayment.create({
        nome
      });
      res.status(201).json({ message: 'Forma de pagamento adicionada com sucesso!', newTypePayment });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  module.exports = {
    createTypePayment
  }