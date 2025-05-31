import { Container, Row, Col } from "react-bootstrap";
import "./Presentation.css";

const Presentation = () => {
  return (
    <Container
      id="about"
      fluid
      className="px-0 my-5 pb-5 bg-dark text-light col-md-8 mx-auto"
    >
      <Row id="presentation" className="my-5 col-11 mx-auto rounded-4 p-4">
        <p className="lead m-0">
          Hello, I'm Ryan, a junior full stack web developer, I design reliable
          and intuitive web applications combining technical rigor and a sense
          of user experience. Curious, autonomous and passionate about creating
          concrete solutions, I invest myself fully in each project, with an eye
          for detail and quality.
        </p>
      </Row>
    </Container>
  );
};

export default Presentation;
