import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav.js";
import "./header.css";
import logo from "../../images/shoes-logo.webp";

const { Header, Content, Sider, Footer } = Layout;

function headNav() {
  return (
    <>
      <Router>
        <Layout>
          <Header className="site-layout-background">
            <img src={logo} alt="Logo" width={218} height={57} />
            <Nav />
            <Switch>
              <Route path="/store"></Route>
              <Route path="/contact"></Route>
              <Route path="/about"></Route>
              <Route path="/" exact></Route>
              <Route path="/cart"></Route>
              <Route path="/search"></Route>
              <Route path="/login"></Route>

              <Route path="*" exact>
                <div> 404 Not Found </div>
              </Route>
            </Switch>
          </Header>
        </Layout>
      </Router>
    </>
  );
}

export default headNav;
