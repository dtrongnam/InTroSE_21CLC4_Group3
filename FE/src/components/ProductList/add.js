import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { SearchOutlined } from "@ant-design/icons";

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
      />

      <NavLink to="/login">
        <div>
          <VscAccount
            style={{
              fontSize: "21px",
              color: "#f05d4a",
              marginTop: "0px",
              marginLeft: "50px",
            }}
          />
        </div>
      </NavLink>
      <NavLink to="/login">
        <div>
          <VscAccount
            style={{
              fontSize: "21px",
              color: "#f05d4a",
              marginTop: "0px",
              marginLeft: "50px",
            }}
          />
        </div>
      </NavLink>
    </div>
  );
};

export default Nav;
