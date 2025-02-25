import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const Register = () => {
  const navigation = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:5001/api/auth/register",
        formData
      );
      console.log("Registration successful:", response.data);
      alert(`Registration successful`);
      navigation("/login");
    } catch (error) {
      console.error("Registration failed:", {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
        stack: error.stack,
      });
      alert("Registration failed. Please check your input and try again.");
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={5}>
            <Card className="shadow-sm border-0">
              <Card.Body className="p-4 p-md-5">
                <h1 className="text-center mb-4 fw-bold">Inscription</h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Votre nom"
                      className="py-2"
                      {...register("name", { required: true })}
                      isInvalid={errors.name}
                    />
                    {errors.name && (
                      <Form.Control.Feedback type="invalid">
                        Ce champ est requis
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Votre email"
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

                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 py-2 mb-3"
                  >
                    S'inscrire
                  </Button>

                  <p className="text-center text-muted mb-0">
                    Déjà inscrit ?{" "}
                    <Button
                      variant="link"
                      onClick={() => navigation("/login")}
                      className="p-0"
                    >
                      Se connecter
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

export default Register;
