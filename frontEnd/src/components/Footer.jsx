import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row className="text-center">
          <Col md={6} className="mb-2">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} VotreEntreprise. Tous droits
              réservés.
            </p>
          </Col>
          <Col md={6}>
            <a href="#" className="text-light mx-2" aria-label="Facebook">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-light mx-2" aria-label="Twitter">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-light mx-2" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-light mx-2" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-light mx-2" aria-label="Github">
              <FaGithub size={24} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
