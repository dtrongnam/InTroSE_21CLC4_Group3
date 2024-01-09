import React, { useState, useEffect } from "react";
import "./Store.css";
import StoreNav from "../Navigation/Nav";
import Footer from "../Footer/footer";
import Cookies from 'js-cookie'

const itemsPerPage = 8;

const Store = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productCart, setProductsCart] = useState([]);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = productCart.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const fetchProduct = async () =>{
    const response = await fetch('http://localhost:4000/api/product',{
      method: 'GET'}
    )
    if (response.ok){
      const data = await response.json();
      setProductsCart(data.products);
      console.log(data);
    }
  }

  const addToCart = (product) => {
    const productToAdd = productCart.find((item) => item._id === product._id);

    if (productToAdd) {
      const cartData = JSON.parse(localStorage.getItem('cart'))  || [];

      const productIndex = cartData.findIndex((item) => item._id === product._id);

      if (productIndex !== -1) {
        cartData[productIndex].quantity += 1;
      } else {
        cartData.push({ 
          _id: product._id, 
          quantity: 1,
          product_name: product.name,
          price: product.price,
          currency:  product.currency,
          thump: product.image
        });
      }

      localStorage.setItem('cart', JSON.stringify(cartData));
      
      console.log("Sản phẩm đã được thêm vào giỏ hàng:", productToAdd);
    }
  };

  useEffect(()=>{
    fetchProduct();
  }, [currentPage])

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <StoreNav />
      <div className="store-header">
        <h2>Store</h2>
        <div className="store-search-container">
          <input type="text" placeholder="search..." />
          <button type="button">search</button>
        </div>
      </div>
      <div className="product-grid">
        {currentProducts.map((productCart) => (
          <div key={productCart._id} className="product-card">
            <img src={productCart.image} alt={productCart.name} />
            <h3>{productCart.name}</h3>
            <p>
              Price: {productCart.price}
              {productCart.currency}
            </p>
            <div className="button-container">
              <button className="btnBuy" onClick={() => addToCart(productCart)}>Add</button>
              <button className="wishList">🤍</button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination-container">
        <div className="pagination">
          {Array.from({
            length: Math.ceil(productCart.length / itemsPerPage),
          }).map((_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
        <div className="navigation-buttons">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &#8592;
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(productCart.length / itemsPerPage)}
          >
            &#8594;
          </button>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Store;
