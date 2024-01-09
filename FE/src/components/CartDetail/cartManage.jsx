import React, { useEffect, useState } from "react";
import './Cart.css';
import Nav from "../Navigation/Nav";

const Cart = () => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [totalPrice, setTotalPrice] = useState(0);

  const updateCartItems = (newCartItems) => {
    localStorage.setItem('cart', JSON.stringify(newCartItems));
    setCartItems(newCartItems);
  };

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter(item => item._id !== product._id);
    updateCartItems(updatedCartItems);
  };

  const increaseQuantity = (product) => {
    const updatedCartItems = cartItems.map(item => {
      if (item._id === product._id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    updateCartItems(updatedCartItems);
  };

  const decreaseQuantity = (product) => {
    const updatedCartItems = cartItems.map(item => {
      if (item._id === product._id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    updateCartItems(updatedCartItems);
  };

  useEffect(() => {
    let newTotalPrice = 0;
    cartItems.forEach((item) => {
      newTotalPrice += (item.quantity * item.price);
    });
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  return (
    <div>
    <Nav />
    <div className="cart-container">
      <div className="cart-header">
        <h2>Cart</h2>
      </div>
      <div className="cart-items">
        <div className="cart-item cart-header">
          <div className="product">Product</div>
          <div className="quantity">Quantity</div>
          <div className="price">Price</div>
          <div className="subtotal">Subtotal</div>
        </div>
        {cartItems && cartItems.map((item) => (
            <div key={item._id} className="cart-item">
            <div className="product">
              <button className="delete-btn" 
              onClick={() => removeFromCart(item)} 
              > X </button>
              <img src={item.thump} alt={item.product_name} />
              <span>{item.product_name}</span>
            </div>
            <div className="quantity-controls">
        <button onClick={() => decreaseQuantity(item)}>-</button>
        <div className="quantity">{item.quantity}</div>
        <button onClick={() => increaseQuantity(item)}>+</button>
      </div>
            <div className="price">{item.price} {item.currency}</div>
            <div className="subtotal">{item.quantity * item.price} {item.currency}</div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="total">Total: {totalPrice} đ</div>
      </div>
      <div className="checkout-btn-container">
        <button className="checkout-btn">Check Out</button>
      </div>
    </div>
  </div>
  );
};

export default Cart;
