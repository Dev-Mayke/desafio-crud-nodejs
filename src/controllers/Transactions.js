const Transactions = require("../models/Transactions")

const createTransactions= async (req, res) => {
    const { codigo_transacao, data_hora, status_transacao, valor } = req.body;
    try {
      const newTranscations = await Transactions.create({
        codigo_transacao,
        data_hora,
        status_transacao,
        valor
      });
      res.status(201).json({ message: 'Transação realizada!', newTranscations });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  module.exports = {
    createTransactions
  }