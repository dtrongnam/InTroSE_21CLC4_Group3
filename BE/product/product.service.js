// service
const product_cart = require('./data.js');

const getAllProducts = () => {
    return product_cart;
  };
  
  const getProductById = (id) => {
    return product_cart.find((product) => product.id === parseInt(id));
  };
  
  const createProduct = (newProduct) => {
    const id = product_cart.length + 1;
    const product = { id, ...newProduct };
    product_cart.push(product);
    return product;
  };
  
  const updateProduct = (id, updatedProduct) => {
    const index = product_cart.findIndex((product) => product.id === parseInt(id));
    if (index !== -1) {
      product_cart[index] = { ...product_cart[index], ...updatedProduct };
      return product_cart[index];
    }
    return null;
  };
  
  const deleteProduct = (id) => {
    const index = product_cart.findIndex((product) => product.id === parseInt(id));
    if (index !== -1) {
      return product_cart.splice(index, 1)[0];
    }
    return null;
  };
  
  module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
  };