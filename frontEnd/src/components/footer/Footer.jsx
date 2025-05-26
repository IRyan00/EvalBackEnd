import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Spinner,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { FaDiscord, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "./Footer.css";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [alert, setAlert] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopyClick = async ({ textToCopy }) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    } catch (err) {
      console.error("Error when copying text: ", err);
    }
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        data,
        PUBLIC_KEY
      );
      setAlert({ type: "success", message: "Email sent successfully" });
    } catch (error) {
      setAlert({
        type: "danger",
        message: "Error sending email",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer id="contact" className="text-light pt-5 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="px-3 mb-4 mb-md-0">
            <h2 className="mb-4">Contact me for collaboration</h2>
            <p className="mb-5 col-md-6">
              Do you have a project in mind? I have the solution so don't wait
              and contact me today! We're about to do something amazing!
            </p>
            <div className="d-flex gap-3">
              <a
                href="https://www.linkedin.com/in/ryan-eymas/"
                target="_blank"
                className="text-light"
              >
                <FaLinkedinIn size={30} />
              </a>
              <a
                href="https://x.com/IRyan___"
                target="_blank"
                className="text-light"
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="https://github.com/IRyan00"
                target="_blank"
                className="text-light"
              >
                <FaGithub size={30} />
              </a>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id="tooltip">
                    {showTooltip ? "Copied!" : "Copied!"}
                  </Tooltip>
                }
                show={showTooltip}
              >
                <div
                  className="text-light"
                  onClick={() => handleCopyClick({ textToCopy: "ryan1881" })}
                >
                  <FaDiscord size={30} />
                </div>
              </OverlayTrigger>
            </div>
          </Col>
          <Col md={6}>
            <Form onSubmit={handleSubmit(onSubmit)} className="px-1 rounded">
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="John Doe"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  {...register("email_from", { required: true })}
                  placeholder="johndoe@example.com"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  {...register("message", { required: true })}
                  rows={3}
                  placeholder="Hi!"
                />
              </Form.Group>
              <Button
                variant="success"
                type="submit"
                disabled={isLoading}
                className="w-100"
              >
                {isLoading ? (
                  <Spinner animation="border" size="sm" />
                ) : (
                  "Submit"
                )}
              </Button>
              {alert && (
                <Alert className="mt-3 text-center" variant={alert.type}>
                  {alert.message}
                </Alert>
              )}
            </Form>
          </Col>
        </Row>
        <p className="text-center pb-4 pt-4 mb-0 mt-5">
          &copy; {new Date().getFullYear()} Ryan's Portfolio . All rights
          reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
