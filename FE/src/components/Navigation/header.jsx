import React from "react";
import { Layout } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./header.css";
import logo from "../../images/shoes-logo.webp";
import Login from "../Login/login.jsx";
import DashBoard from "../pages/dashBoard.jsx";
import Nav from "./Nav";
import NotFound from "../../routes/NotFound";
const { Header } = Layout;

function headNav() {
  return (
    <>
      <Layout>
        <Header className="site-layout-background">
          <img src={logo} alt="Logo" width={218} height={57} />
          <React.StrictMode>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Nav />}>
                  <Route index element={<DashBoard />} />
                  <Route path="store" element={<Login />} />
                  <Route path="login" element={<Login />}>
                    <Route path="contact" />
                  </Route>
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </React.StrictMode>
        </Header>
      </Layout>
    </>
  );
}

export default headNav;
