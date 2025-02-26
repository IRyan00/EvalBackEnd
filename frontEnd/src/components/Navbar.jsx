import { Navbar, Nav, Container, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function CustomNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigation = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigation("/login");
  };

  return (
    <Navbar
      expand="lg"
      className="shadow-sm py-2 sticky-top bg-dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          Portfolio
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav navbar-dark"
          className="border-0"
        >
          <span className="navbar-toggler-icon">
            <i className="fas fa-bars"></i>
          </span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-2">
            <Nav.Link as={Link} to="/" className="text-light px-3">
              Accueil
            </Nav.Link>

            {!isLoggedIn ? (
              <div className="d-flex gap-2 mt-3 mt-lg-0">
                <Button
                  as={Link}
                  to="/login"
                  variant="outline-light"
                  size="sm"
                  className="w-100"
                >
                  Connexion
                </Button>
                <Button
                  as={Link}
                  to="/register"
                  variant="light"
                  size="sm"
                  className="w-100"
                >
                  Inscription
                </Button>
              </div>
            ) : (
              <div className="d-flex gap-2 flex-column flex-lg-row align-items-stretch align-items-lg-center mt-lg-0">
                <Nav.Link as={Link} to="/dashboard" className="text-light px-3">
                  Dashboard
                </Nav.Link>
                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={handleLogout}
                >
                  Déconnexion
                </Button>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
