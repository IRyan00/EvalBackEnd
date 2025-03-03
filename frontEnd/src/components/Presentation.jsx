import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Presentation = () => {
  return (
    <Container fluid className="p-5 bg-dark text-light" id="presentation">
      <Row className="justify-content-center text-center">
        <Col lg={8}>
          <h1 className="display-4 fw-bold mb-4">Développeur Web Full Stack</h1>
          <p className="lead mb-4">
            Passionné par le développement web et les nouvelles technologies, je
            conçois et développe des applications web innovantes et
            performantes. Spécialisé dans la stack MERN (MongoDB, Express.js,
            React.js, Node.js), je crée des solutions sur mesure qui répondent
            aux besoins spécifiques de chaque projet.
          </p>
          <p className="lead mb-4">
            Mon approche combine créativité technique et bonnes pratiques de
            développement pour livrer des applications robustes, évolutives et
            centrées sur l'expérience utilisateur. Je m'engage à rester à la
            pointe des technologies web pour proposer les meilleures solutions
            possibles.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Presentation;
