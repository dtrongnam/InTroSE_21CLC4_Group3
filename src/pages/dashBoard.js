import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../components/Navigation/Nav";
import "./dashBoard.css";
import logo from "../images/shoes-logo.webp";
const { Header, Content, Sider, Footer } = Layout;

function DashBoard() {
  return (
    <Router>
      <Layout>
        <Header className="site-layout-background">
          <img src={logo} alt="Logo" />
          <Nav />
          <Switch>
            <Route path="/store"></Route>
            <Route path="/contact"></Route>
            <Route path="/about"></Route>
            <Route path="/" exact></Route>
            <Route path="*" exact>
              <div> 404 Not Found </div>
            </Route>
          </Switch>
        </Header>
      </Layout>
    </Router>
  );
}

export default DashBoard;
