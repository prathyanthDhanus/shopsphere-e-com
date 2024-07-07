import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {  useParams } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { postData } from "../services/Products";
import swal from "sweetalert";
import { addToCartArray } from "../Data/CartData";


const ProductDetailView = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(1); // Default quantity is 1

  //   !!!!!!!!! fetch a single product using id !!!!!!!!!!
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);
  //   !!!!!!!!! fetch a single product using id end !!!!!!!!!!

  const incrementQuantity = () => {
    if (quantity < 100) {
      setQuantity(quantity + 1); // Increment quantity by 1, maximum 100
    }
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1); // Decrement quantity by 1, minimum 0
    }
  };

  //   !!!!!!!!! add to cart function !!!!!!!!!!
  const addToCart = async () => {
    const url = "https://fakestoreapi.com/carts";
    const currentDate = new Date().toISOString(); //get current date
    const cartData = {
      userId: 302,
      date: currentDate, // Used ISO 8601 format for date
      products: [{ productId: id, quantity: quantity }],
    };

    try {
      const result = await postData(url, cartData);
      await swal("Success!", "Product added successfully to the cart", "success");
    
    // Add productId and category to the cart array
    addToCartArray(id, quantity);

    } catch (error) {
      console.error("Error:", error);
    }
  };
  //   !!!!!!!!! add to cart function end !!!!!!!!!!

  if (!data) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <img src={data.image} alt={data.title} className="img-fluid" />
        </Col>
        <Col md={6}>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <h3>${data.price}</h3>
          <Button variant="primary" onClick={addToCart}>
            <FaCartPlus /> Add to Cart
          </Button>
          <div className="my-3">
            <Button variant="outline-primary" onClick={decrementQuantity}>
              - Decrease
            </Button>
            <span className="mx-3">{quantity}</span>
            <Button variant="outline-primary" onClick={incrementQuantity}>
              + Increase
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailView;
