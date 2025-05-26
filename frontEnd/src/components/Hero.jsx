import avatar from "../assets/images/avatar.png";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowDown, FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <Container id="hero" fluid className="text-light bg-dark my-5 py-5">
      <Row className="py-5 align-items-center col-md-8 mx-auto">
        <Col md={6} className="mb-5">
          <h1 className="h1 display-4 mb-5">
            Building Scalable Modern Websites for the Future
          </h1>
          <div className="d-flex gap-3">
            <button className="btn btn-success text-light col-6 col-md-4 rounded-3 px-0 py-2">
              Download CV{" "}
              <a href="#presentation" className="text-light">
                <FaDownload size={17} className="ml-2" />
              </a>
            </button>
            <button className="btn btn-secondary col-6 col-md-3 rounded-3 px-0 py-2">
              Scroll down{" "}
              <a href="#about" className="text-light">
                <FaArrowDown size={17} className="ml-2" />
              </a>
            </button>
          </div>
        </Col>
        <Col md={6}>
          <img src={avatar} className="img-fluid" alt="Avatar of me" />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
