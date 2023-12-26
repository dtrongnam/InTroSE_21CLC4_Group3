import React from "react";
import "./Store.css";
import Nav from "../Navigation/Nav";

const products = [
  {
    id: 1,
    name: "Sản phẩm 1",
    price: 100,
    image: "url_to_image_1.jpg",
  },
  {
    id: 2,
    name: "Sản phẩm 2",
    price: 150,
    image: "url_to_image_2.jpg",
  },
  {
    id: 3,
    name: "Sản phẩm 3",
    price: 120,
    image: "url_to_image_3.jpg",
  },
  {
    id: 4,
    name: "Sản phẩm 4",
    price: 100,
    image: "url_to_image_4.jpg",
  },
  {
    id: 5,
    name: "Sản phẩm 5",
    price: 100,
    image: "url_to_image_5.jpg",
  },
  {
    id: 6,
    name: "Sản phẩm 6",
    price: 100,
    image: "url_to_image_6.jpg",
  },
  {
    id: 7,
    name: "Sản phẩm 7",
    price: 100,
    image: "url_to_image_7.jpg",
  },
  {
    id: 8,
    name: "Sản phẩm 8",
    price: 100,
    image: "url_to_image_8.jpg",
  },
  {
    id: 9,
    name: "Sản phẩm 9",
    price: 100,
    image: "url_to_image_9.jpg",
  },
  // Thêm các sản phẩm khác tương tự ở đây
];

const Store = () => {
  return (
    <div>
      <div className="header">
        <h2>Store</h2>
        <div className="search-container">
          <input type="text" placeholder="Tìm kiếm..." />
          <button type="button">Tìm kiếm</button>
        </div>
      </div>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Giá: ${product.price}</p>
            <div className="button-container">
              <button>Mua</button>
              <button>Yêu thích</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
