import React, { useState } from "react";
// import "./Nav.scss";
import "./login.css";
import { NavLink } from "react-router-dom";
import Nav from "../Navigation/Nav";

const Login = (props) => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleExpand = () => {
    const search = document.querySelector(".search-input");
    search.classList.toggle("search-expanded");
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleLogin = () => {
    // Add your login logic here
    // You can access the entered username and password from the state
    // and use them for authentication
  };

  const products = [
    {
      id: 1,
      image: "url_to_image_1", // Thay thế bằng URL hình ảnh của sản phẩm 1
      name: "Product 1",
      description: "Description of Product 1",
    },
    {
      id: 2,
      image: "url_to_image_2", // Thay thế bằng URL hình ảnh của sản phẩm 2
      name: "Product 2",
      description: "Description of Product 2",
    },
    // Thêm nhiều sản phẩm khác nếu cần
  ];

  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const handleNextProduct = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex < products.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevProduct = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : products.length - 1
    );
  };

  return (
    <div className="topnav">
      <Nav />
      {/* ... other navigation links ... */}
      <div className="container">
        <div className="account-section">
          <h2>My account</h2>
          <div>Login</div>
          <div>
            <label htmlFor="username">Username or email address</label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username or email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="login-options">
            <button onClick={handleLogin}>Login</button>
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
          </div>
          <div className="lost-password">
            <NavLink to="/lost-password">Lost your password?</NavLink>
          </div>
        </div>
        {/* --------------------------------------------------------- */}
        <div className="product-section">
          <h2>Featured Products</h2>
          <div className="product-display">
            <div className="product-image">
              <img
                src={products[currentProductIndex].image}
                alt={products[currentProductIndex].name}
              />
            </div>
            <div className="product-info">
              <h3>{products[currentProductIndex].name}</h3>
              <p>{products[currentProductIndex].description}</p>
            </div>
          </div>
          <div className="product-navigation">
            <button className="arrow-btn" onClick={handlePrevProduct}>
              <span>&#9664;</span> {/* Left arrow */}
            </button>
            <button className="arrow-btn" onClick={handleNextProduct}>
              <span>&#9654;</span> {/* Right arrow */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
