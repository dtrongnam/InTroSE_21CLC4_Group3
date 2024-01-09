import Cookies from 'js-cookie'

export function addToCart(productId, quantity) {
    const cartData = Cookies.getJSON('cart') || [];
    const productIndex = cartData.findIndex(item => item._id === productId);
  
    if (productIndex !== -1) {
      cartData[productIndex].quantity += quantity;
    } else {
      cartData.push({ _id: productId, quantity });
    }
  
    Cookies.set('cart', cartData);
  
    console.log('Giỏ hàng đã được cập nhật:', cartData);
  }

export function removeFromCart(productId) {
    const cartData = Cookies.getJSON('cart') || [];
  
    const productIndex = cartData.findIndex(item => item._id === productId);
  
    if (productIndex !== -1) {
      cartData.splice(productIndex, 1);
    }
  
    Cookies.set('cart', cartData);
  
    console.log('Sản phẩm đã được xóa khỏi giỏ hàng:', productId);
  }

