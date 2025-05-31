import "./Creations.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import img1 from "../../assets/images/homepage-screenshot.png";
import img2 from "../../assets/images/assmat.png";
import { MoveUpRight } from "lucide-react";
import { useState } from "react";

function App() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  return (
    <Container id="work" fluid className="px-3 my-5 py-5">
      <h3 className="text-light text-center my-5 col-md-8 mx-auto">
        My creations
      </h3>
      <Row className="justify-content-center">
        <Col xs={12} lg={10}>
          <Row className="justify-content-center">
            <Col xs={12} md={6} lg={6} className="mb-4">
              <Card id="crea" className="rounded-4 text-light">
                <div
                  className="image-wrapper"
                  onMouseEnter={handleMouseEnter1}
                  onMouseLeave={handleMouseLeave1}
                >
                  <Card.Img
                    variant="top"
                    src={img1}
                    alt="presentation image of a website for a childminder"
                    className={`rounded-3 inner-image ${
                      isHovered1 ? "zoom" : ""
                    }`}
                  />
                </div>
                <Card.Body className="p-0 mt-3 d-flex justify-content-between">
                  <Col className="col-10">
                    <Card.Title className="mb-3">
                      Web developer - Full stack
                    </Card.Title>
                    <Button id="badge" variant="dark" className="me-2 shadow">
                      API
                    </Button>
                    <Button id="badge" variant="dark" className="me-2 shadow">
                      MVC
                    </Button>
                    <Button id="badge" variant="dark" className="shadow">
                      Portfolio
                    </Button>
                  </Col>
                  <Col className="col-2 d-flex justify-content-end align-items-center">
                    <Button
                      id="redirect"
                      variant="success"
                      aria-label="Redirect to the site in question"
                      href="https://eval-back-end.vercel.app/"
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

            <Col xs={12} md={6} lg={6} className="mb-4">
              <Card id="crea" className="rounded-4 text-light">
                <div
                  className="image-wrapper"
                  onMouseEnter={handleMouseEnter2}
                  onMouseLeave={handleMouseLeave2}
                >
                  <Card.Img
                    variant="top"
                    src={img2}
                    alt="presentation image of a website for a childminder"
                    className={`rounded-3 inner-image ${
                      isHovered2 ? "zoom" : ""
                    }`}
                  />
                </div>
                <Card.Body className="p-0 mt-3 d-flex justify-content-between">
                  <Col className="col-10">
                    <Card.Title className="mb-3">Nanny</Card.Title>
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
                      aria-label="Redirect to the site in question"
                      href="https://nanny-jet.vercel.app/"
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
        </Col>
      </Row>
    </Container>
  );
}

export default App;
