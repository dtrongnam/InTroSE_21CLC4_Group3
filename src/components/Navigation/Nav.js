import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";



const Nav = (props) => {
  const handleExpand = () => {
    const search = document.querySelector(".search-input");
    search.classList.toggle("search-expanded");
  };
  return (
    <div className="topnav">
      <NavLink to="/" exact>
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

      <NavLink to="/login">
        <div>
          <FontAwesomeIcon
            icon={faUser}
            style={{
              fontSize: "21px",
              color: "#f05d4a",
              marginTop: "0px",
              marginLeft: "200px",
            }}
          />
        </div>
      </NavLink>

      <button className="search-wrapper" onClick={handleExpand}>
        <SearchOutlined />
      </button>
      <input
        className="search-input"
        type="search"
        placeholder="Search product"
      />
      <NavLink to="/cart">
        <div>
          <ShoppingCartOutlined
            style={{
              fontSize: "23px",
              color: "#f05d4a",
              marginLeft: "130px",
            }}
          />
        </div>
      </NavLink>
    </div>
  );
};

export default Nav;
