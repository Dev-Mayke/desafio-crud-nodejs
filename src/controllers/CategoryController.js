const Category = require('../models/Category');
const CategoryModel = require('../models/Category');

const getAll = async (req, res) => {
  try {
    const category = await CategoryModel.findAll();
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCategoryById = async (req, res) => {
  const { id } = req.params; 
  try {
      const category = await CategoryModel.findByPk(id); 
      if (!category) {
          return res.status(404).json({ message: 'Categoria não encontrada!' });
      }
      res.status(200).json(category);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};


const createCategory = async (req, res) => {
  try {
    const newCategory = await CategoryModel.create({ ...req.body }); 
    res.status(201).json({ message: 'Categoria criada com sucesso!', newCategory });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const updateCategory = async (req, res) => {
  const { id } = req.params; 
  try {
      const [updated] = await CategoryModel.update(
          { ...req.body },  
          { where: { id } }
      );
      if (!updated) {
          return res.status(404).json({ message: 'Categoria não encontrada' });
      }
      const updatedCategory = await CategoryModel.findByPk(id);
      res.status(200).json({ message: 'Categoria atualizada com sucesso!', updatedCategory });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};


const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
      const deletedCategory = await CategoryModel.destroy({
          where: { id: id }
      });
      if (!deletedCategory) {
          return res.status(404).json({ message: 'Categoria não encontrada!' });
      }
      res.status(200).json({ message: 'Categoria excluída com sucesso!' });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAll,
  createCategory,
  deleteCategory,
  getCategoryById,
  updateCategory,
};