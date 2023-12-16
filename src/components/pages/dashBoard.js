import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeadNav from "../components/Navigation/header";
import "./dashBoard.css";
import banner from "../images/slider-image.webp";
import { SearchOutlined } from "@ant-design/icons";
import "../components/Navigation/Nav.scss";
const { Header, Content, Sider, Footer } = Layout;

function DashBoard() {
  return (
    <>
      <div className="home">
        <HeadNav></HeadNav>
      </div>

      <div className="img">
        <img src={banner} />
      </div>
    </>
  );
}

export default DashBoard;
