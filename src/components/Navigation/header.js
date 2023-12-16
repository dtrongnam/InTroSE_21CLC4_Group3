import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav.js";
import "./header.css";
import logo from "../../images/shoes-logo.webp";
import { ShoppingCartOutlined } from "@ant-design/icons";

const { Header, Content, Sider, Footer } = Layout;

function headNav() {
  return (
    <>
      <Router>
        <Layout>
          <Header className="site-layout-background">
            <img src={logo} alt="Logo" width={150} height={70} />
            <Nav />
            <Switch>
              <Route path="/store"></Route>
              <Route path="/contact"></Route>
              <Route path="/about"></Route>
              <Route path="/" exact></Route>
              <Route path="/account"></Route>
              <Route path="/search"></Route>
              <Route path="/login"></Route>

              <Route path="*" exact>
                <div> 404 Not Found </div>
              </Route>
            </Switch>

            <ShoppingCartOutlined
              style={{
                fontSize: "21px",
                color: "#f05d4a",
                marginLeft: "50px",
              }}
            />
          </Header>
        </Layout>
      </Router>
    </>
  );
}

export default headNav;
