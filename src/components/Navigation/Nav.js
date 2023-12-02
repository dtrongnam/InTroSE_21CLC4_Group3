import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="topnav">
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/store">
        <div>Store </div>
      </NavLink>
      <NavLink to="/contact">
        <div>Contact </div>
      </NavLink>
      <NavLink to="/about">
        <div>About</div>
      </NavLink>
    </div>
  );
};

export default Nav;
