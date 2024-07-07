import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Modal,
} from "react-bootstrap";
import { fetchData } from "../services/Products";

function NavScrollExample() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Handler for input change
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handler for form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Filter products based on search query
    const filtered = data.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
    setShowModal(true);
  };

  // Fetching products
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const result = await fetchData("https://fakestoreapi.com/products");
        setData(result);
        console.log(result)
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategory();
  }, []);

  // Modal close handler
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">shopsphere-e-com </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Button onClick={() => navigate("/")} className="border-none m-2">
                Home
              </Button>
              <Button
                onClick={() => navigate("/cart")}
                className="border-none m-2"
              >
                Cart
              </Button>

              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={handleFormSubmit}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={handleInputChange}
              />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Search Results</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {filteredData.length > 0 ? (
            <ul>
              {filteredData.map((product) => (
                <li key={product.id}  onClick={() => navigate(`/products/${product.id}`)} style={{cursor:"pointer"}} >{product.title}</li>
              ))}
            </ul>
          ) : (
            <p>No products found</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NavScrollExample;
