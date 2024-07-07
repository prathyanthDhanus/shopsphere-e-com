import React from "react";
import { fetchData } from "../services/Products";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import CustomCard from "../re-usable-components/CardComponent";
import swal from "sweetalert";

const ProductView = () => {
  const [data, setData] = useState([]);
  const { category } = useParams(); //extracting the category name from the url
  const navigate = useNavigate();

  //   !!!!!!!!!!! category based product fetching !!!!!!!!!!!!!
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await fetchData(
          `https://fakestoreapi.com/products/category/${category}`
        );
        setData(result);
    
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
    console.log(data);
  }, []);
  //   !!!!!!!!!!! category based product fetching !!!!!!!!!!!!!

  return (
    <div>
      <Container>
        <Row>
          {data.map((product, index) => (
            <Col md={4} key={index}>
              <div className="p-5">
                <CustomCard
                  imageUrl={product.image}
                  title={product.title}
                  text={"$" + product.price}
                  buttonText="View Products"
                  onClick={() => navigate(`/products/${product.id}`)}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductView;
