const OrderModel = require('../models/Orders');

const getAll = async (req, res) => {
  try {
    const order = await OrderModel.findAll();
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOrderById = async (req, res) => {
  const { id } = req.params; 
  try {
      const order = await OrderModel.findByPk(id); 
      if (!order) {
          return res.status(404).json({ message: 'Pedido não encontrado!' });
      }
      res.status(200).json(order);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};


const createOrder = async (req, res) => {
  try {
    const newOrder = await OrderModel.create({ ...req.body }); 
    res.status(201).json({ message: 'Pedido criado com sucesso!', newOrder });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const updateOrder = async (req, res) => {
  const { id } = req.params; 
  try {
      const [updated] = await OrderModel.update(
          { ...req.body },  
          { where: { id } }
      );
      if (!updated) {
          return res.status(404).json({ message: 'Pedido não encontrado' });
      }
      const updatedOrder = await OrderModell.findByPk(id);
      res.status(200).json({ message: 'Pedido atualizado com sucesso!', updatedOrder });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};


const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
      const deletedOrder = await OrderModel.destroy({
          where: { id: id }
      });
      if (!deletedOrder) {
          return res.status(404).json({ message: 'Pedido não encontrado!' });
      }
      res.status(200).json({ message: 'Pedido excluído com sucesso!' });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAll,
  createOrder,
  deleteOrder,
  getOrderById,
  updateOrder,
};