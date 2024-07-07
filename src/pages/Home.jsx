import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { fetchData } from "../services/Products";
import CustomCard from "../re-usable-components/CardComponent";
import { useNavigate } from "react-router-dom";
import CarouselComponent from "../re-usable-components/Carousel";
import { carouselmages } from "../Data/CarouselData";

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); //useNavigate hook for navigation

//   !!!!!!!!! fetching category !!!!!!!!!!
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const result = await fetchData(
          "https://fakestoreapi.com/products/categories"
        );
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategory();
  }, []);
  //   !!!!!!!!! fetching category end !!!!!!!!!!

  return (
    <div>
           <Container className="mt-5">
        <Row>
           {/* !!!!!!!!!! carousel component !!!!!!!!! */}
          <CarouselComponent images={carouselmages} />
        </Row>
      </Container>
      <Container>
        <Row>
          {/* !!!!!!!!!! card component !!!!!!!!! */}
          {data.map((category, index) => (
            <Col md={4} key={index}>
              <div className="p-5">
                <CustomCard
                  title={category}
                  text="Some quick example text to build on the card title and make up the bulk of the card's content."
                  buttonText="View Products"
                  onClick={() => navigate(`/view/products/${category}`)}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
