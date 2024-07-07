// cartData.js
let cartArray = JSON.parse(localStorage.getItem('cartArray')) || [];

export const addToCartArray = (productId,quantity) => {
  cartArray.push({ productId, quantity });
  localStorage.setItem('cartArray', JSON.stringify(cartArray));
  console.log('Updated Cart Array:', cartArray);
};

export const getCartArray = () => cartArray;
