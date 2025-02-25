import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const Login = () => {
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
        alert("Veuillez valider le reCAPTCHA");
        return;
      }

      const response = await axios.post(
        "http://localhost:5001/api/auth/login",
        {
          ...formData,
          recaptchaToken,
        }
      );
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
      alert("Échec de la connexion. Veuillez réessayer.");
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
                <h1 className="text-center fw-bold mb-4">Connexion</h1>
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
                        Ce champ est requis
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Votre mot de passe"
                      className="py-2"
                      {...register("password", { required: true })}
                      isInvalid={errors.password}
                    />
                    {errors.password && (
                      <Form.Control.Feedback type="invalid">
                        Ce champ est requis
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>

                  <div className="d-flex justify-content-center mb-4">
                    <ReCAPTCHA
                      sitekey="6Lef9OAqAAAAAFNgkSCLr376UGlN0pS3HgtaxQoY"
                      onChange={handleRecaptchaChange}
                      theme="light"
                    />
                  </div>

                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 py-2 mb-3"
                    disabled={!recaptchaToken}
                  >
                    Se connecter
                  </Button>

                  <p className="text-center text-muted mb-0">
                    Pas encore de compte ?{" "}
                    <Button
                      variant="link"
                      onClick={() => navigation("/register")}
                      className="p-0"
                    >
                      S'inscrire
                    </Button>
                  </p>
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
