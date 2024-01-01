import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Store.css";
import StoreNav from "../Navigation/Nav";
import Footer from "../Footer/footer";

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
  {
    id: 10,
    name: "Sản phẩm 10",
    price: 100,
    image: "url_to_image_10.jpg",
  },
  // {
  //   id: 11,
  //   name: "Sản phẩm 11",
  //   price: 100,
  //   image: "url_to_image_11.jpg",
  // },
  // Thêm các sản phẩm khác tương tự ở đây
];

const itemsPerPage = 6; // Số sản phẩm hiển thị trên mỗi trang

const Store = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <StoreNav />
      <div className="store-header">
        <h2>Store</h2>
        <div className="store-search-container">
          <input type="text" placeholder="Tìm kiếm..." />
          <button type="button">Tìm kiếm</button>
        </div>
      </div>
      <div className="product-grid">
        {currentProducts.map((product, index) => (
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
      <div className="pagination-container">
        <div className="pagination">
          {Array.from({
            length: Math.ceil(products.length / itemsPerPage),
          }).map((_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
        <div className="navigation-buttons">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &#8592;
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(products.length / itemsPerPage)}
          >
            &#8594;
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Store;
