import "./footer.css";
import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="column1">
        <h3>WELCOME TO SHOES STORE</h3>
        <p>
          Welcome to our shoe store, where fashion, comfort, and individuality
          unite. Discover a curated collection of designer brands, timeless
          classics, and trendy must-haves. From elegant heels to
          performance-driven sneakers, our store offers a diverse range of
          footwear. Experience exceptional quality, service, and a passion for
          shoes. Step into our world and make a stylish statement with every
          step.
        </p>
      </div>
      <div className="column2">
        <h3>MORE ABOUT STORE</h3>
        <ul>
          <li>Multiple Branches</li>
          <li>Take Franchise</li>
          <li>Scheduled Offers</li>
          <li>FAQ</li>
          <li>More Links</li>
        </ul>
        <h3>KEY LINKS</h3>
        <ul>
          <li>Order</li>
          <li>Download</li>
          <li>Address</li>
          <li>Logout</li>
          <li>Lost Password</li>
        </ul>
      </div>
      <div className="column3">
        <h3>CONTACT DETAILS</h3>
        <p>227 Nguyễn Văn Cừ, P4, Quận 5, Tp HCM.</p>
        <p>Contact : 0913868260</p>
        <p>E-mail : shopnow@store.com</p>
        <p>contact@store.com</p>
        <h3>STORE LOCATION</h3>
        <ul>
          <li>Việt Nam</li>
          <li>Paris</li>
          <li>London</li>
          <li>Singapore</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
