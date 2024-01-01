// src/controllers/productController.js
const productService = require('./product.service.js');

const getAllProducts = (req, res) => {
  const products = productService.getAllProducts();
  res.json(products);
};

const getProductById = (req, res) => {
  const { id } = req.params;
  const product = productService.getProductById(id);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
};

const createProduct = (req, res) => {
  const newProduct = req.body;
  console.log(newProduct)
  const product = productService.createProduct(newProduct);
  res.status(201).json(product);
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const updatedProduct = req.body;
  const product = productService.updateProduct(id, updatedProduct);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  const deletedProduct = productService.deleteProduct(id);
  if (!deletedProduct) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(deletedProduct);
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
