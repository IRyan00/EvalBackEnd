import "./Creations.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import img1 from "../../assets/test.png";
import { MoveUpRight } from "lucide-react";
import { useState } from "react";

function App() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Container id="work" fluid className="px-3 pt-1">
      <h3 className="text-light text-center mt-5 mb-4 col-md-8 mx-auto">
        My creations
      </h3>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card id="crea" className="rounded-4 text-light">
            <div
              className="image-wrapper"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Img
                variant="top"
                src={img1}
                className={`rounded-3 inner-image ${isHovered ? "zoom" : ""}`}
              />
            </div>
            <Card.Body className="p-0 mt-3 d-flex justify-content-between">
              <Col className="col-10">
                <Card.Title className="mb-3">Assistante maternelle</Card.Title>
                <Button id="badge" variant="dark" className="me-2 shadow">
                  API
                </Button>
                <Button id="badge" variant="dark" className="shadow">
                  MVC
                </Button>
              </Col>
              <Col className="col-2 d-flex justify-content-end align-items-center">
                <Button
                  id="redirect"
                  variant="success"
                  href="https://assist-mat.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-2 text-light d-flex justify-content-center align-items-center"
                >
                  <MoveUpRight />
                </Button>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
