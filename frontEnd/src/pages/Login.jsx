import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const CAPTCHA_SITE_KEY = import.meta.env.VITE_CAPTCHA_SITE_KEY;
const API_URL = import.meta.env.VITE_API_URL;

const Login = () => {
  useEffect(() => {
    document.title = "Portfolio - Connexion";
  }, []);

  const navigation = useNavigate();
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      if (!recaptchaToken) {
        alert("Please validate the reCAPTCHA");
        return;
      }

      const response = await axios.post(`${API_URL}/api/auth/login`, {
        ...formData,
        recaptchaToken,
      });
      localStorage.setItem("token", response.data.token);
      setTimeout(() => {
        navigation("/");
        alert("Login successful");
      }, 300);
    } catch (error) {
      console.error("Login failed:", {
        message: error.message,
        status: error.response?.status,
      });
      alert("Connection failed. Please try again.");
    }
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  return (
    <div className="min-vh-100 d-flex align-items-center bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={5}>
            <Card className="border-0 shadow-lg">
              <Card.Body className="p-4 p-md-5">
                <h1 className="text-center fw-bold mb-4">Connection</h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="exemple@email.com"
                      className="py-2"
                      {...register("email", { required: true })}
                      isInvalid={errors.email}
                    />
                    {errors.email && (
                      <Form.Control.Feedback type="invalid">
                        This field is required
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Votre mot de passe"
                      className="py-2"
                      {...register("password", { required: true })}
                      isInvalid={errors.password}
                    />
                    {errors.password && (
                      <Form.Control.Feedback type="invalid">
                        This field is required
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>

                  <div className="d-flex justify-content-center mb-4">
                    <ReCAPTCHA
                      sitekey={CAPTCHA_SITE_KEY}
                      onChange={handleRecaptchaChange}
                      theme="light"
                    />
                  </div>

                  <Button
                    variant="success"
                    type="submit"
                    className="w-100 py-2 mb-3 text-light"
                    disabled={!recaptchaToken}
                  >
                    Sign in
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
