import React from "react";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ViewCart = () => {
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  //   !!!!!!!! get cart product from localstorage !!!!!!!!
  useEffect(() => {
    // Retrieve data from local storage
    const productData = localStorage.getItem("cartArray");

    // Parse the data and update the state
    if (productData) {
      setCartData(JSON.parse(productData));
    }
  }, []);

  //   !!!!!!!!!! remove from cart !!!!!!!!!!
  const removeFromCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cartArray")) || [];
    console.log("caaaat", cart);
    cart = cart.filter((item) => item.productId !== id);
    localStorage.setItem("cartArray", JSON.stringify(cart));
    setCartData(cart);
  };

  return (
    <div className="p-5">
      <h2>Shopping Cart</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cartData.length > 0 ? (
            cartData.map((item, index) => (
              <tr key={index}>
                <td>{item.productId}</td>
                <td>{item.quantity}</td>
                <td>
                  <Button
                    onClick={() => navigate(`/products/${item.productId}`)}
                  >
                    View
                  </Button>
                </td>
                <td>
                  <Button onClick={() => removeFromCart(item.productId)}>
                    Remove
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="text-center">
                No items in the cart
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewCart;
