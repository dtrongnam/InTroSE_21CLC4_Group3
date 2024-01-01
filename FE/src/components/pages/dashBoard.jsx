import React from "react";

import HeadNav from "../Navigation/header";
import "./dashBoard.css";
import banner from "../../images/slider-image.webp";
import Nav from "../Navigation/Nav";
import Footer from "../Footer/footer";

import BestSell from "./BestSeller/bestSeller";

function DashBoard() {
  return (
    <>
      <div className="home">
        <Nav></Nav>
      </div>

      <div className="image">
        <img src={banner} />
      </div>

      <div className="bestSell">
        <BestSell></BestSell>
      </div>

      <Footer />
    </>
  );
}

export default DashBoard;
