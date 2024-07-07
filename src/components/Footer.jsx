import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div className="pt-5">
      <footer className="bg-dark text-white py-4 ">
        <Container>
          <Row>
            <Col md={4}>
              <h5>ShopSphere</h5>
              <p>
                ShopSphere, your go-to online shopping destination. Our mission
                is to provide a seamless and enjoyable shopping experience for
                all our customers. We offer a wide variety of high-quality
                products at competitive prices, ranging from the latest fashion
                trends to essential everyday items. At ShopSphere, customer
                satisfaction is our top priority, and we strive to exceed your
                expectations with every purchase. Our dedicated customer service
                team is here to assist you with any inquiries or issues. Thank
                you for choosing ShopSphere – where shopping meets satisfaction.
              </p>
            </Col>
            <Col md={4}>
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li>Phone: +123 456 7890</li>
                <li>Email: shopsphere@gmail.com</li>
                <li>Address: 123 Main Street, City, Country</li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>Follow Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Instagram
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="text-center">
              <p>&copy; 2024 ShopSpehere E-com website. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
