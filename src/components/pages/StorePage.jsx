import './StorePage.css'
import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;


function StorePage() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    
    const products = [
        { id: 1, name: "Giày Thể Thao", price: 50, image: "giay1.jpg" },
        { id: 2, name: "Giày Chạy Bộ 1", price: 60, image: "giay2.jpg" },
        { id: 3, name: "Giày Chạy Bộ 2", price: 61, image: "giay3.jpg" },
        { id: 4, name: "Giày Chạy Bộ 3", price: 62, image: "giay4.jpg" },
        { id: 5, name: "Giày Chạy Bộ 4", price: 63, image: "giay5.jpg" },
        { id: 6, name: "Giày Chạy Bộ 5", price: 64, image: "giay6.jpg" },
        { id: 7, name: "Giày Chạy Bộ 6", price: 65, image: "giay7.jpg" },
        { id: 8, name: "Giày Chạy Bộ 7", price: 66, image: "giay8.jpg" },
        { id: 9, name: "Giày Chạy Bộ 8", price: 67, image: "giay9.jpg" },
        // ...Thêm sản phẩm khác
    ];

    return (
        <Layout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" />
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={new Array(3).fill(null).map((_, index) => ({
                        key: String(index + 1),
                        label: `nav ${index + 1}`,
                    }))}
                />
            </Header>
            <Content
                className="site-layout"
                style={{
                    padding: '0 50px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>Store</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        background: colorBgContainer,
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h1>Store</h1>
                        <div className="search-bar">
                            <input type="text" placeholder="Tìm kiếm..." />
                            <button type="submit">Tìm</button>
                        </div>
                    </div>
                    <div className="product-container">
                        {products.map(product => (
                            <div className="product" key={product.id}>
                                <img src={product.image} alt={product.name} />
                                <div className="product-info">
                                    <h3>{product.name}</h3>
                                    <p>Giá: ${product.price}</p>
                                </div>
                                <div className="product-actions">
                                    <button className="buy-button">Mua</button>
                                    <button className="favorite-button">Yêu thích</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Content>
            {/* <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                footer
            </Footer> */}
        </Layout>
    );
}

export default StorePage;