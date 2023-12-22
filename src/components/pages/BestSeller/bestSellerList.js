import React from "react";
import product_cart from "../../ProductList/productList";

const BestList = () => {
  const listItem = product_cart.map((item) => (
    <div className="card" key={item.id}>
      <div className="card_img">
        <img src={item.thumb} />
      </div>
      <div className="card_header">
        <h2>{item.product_name}</h2>
        <p>{item.description}</p>
        <p className="price">
          {item.price} <span>{item.currency}</span>
        </p>
      </div>
    </div>
  ));

  return <div className="main_content">{listItem}</div>;
};

export default BestList;
