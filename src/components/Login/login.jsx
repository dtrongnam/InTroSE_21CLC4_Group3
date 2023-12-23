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

  return (
    <div>
      {/* ... other navigation links ... */}
      {/* <NavLink to="/" exact>
        HOME
      </NavLink>
      <NavLink to="/store">
        <div>STORE </div>
      </NavLink>
      <NavLink to="/contact">
        <div>CONTACT </div>
      </NavLink>
      <NavLink to="/about">
        <div>ABOUT</div>
      </NavLink>

      <button className="search-wrapper" onClick={handleExpand}>
        <SearchOutlined />
      </button>
      <input
        className="search-input"
        type="search"
        placeholder="Search product"
        style={{
          borderBlockColor: "#f05d4a",
        }}
      /> */}
      <Nav></Nav>
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

        {/* ... other elements ... */}
      </div>
    </div>
  );
};

export default Login;
