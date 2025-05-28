import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

function CustomNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showFloatingMenu, setShowFloatingMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigation = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showFloatingMenu &&
        !event.target.closest(".custom-menu") &&
        !event.target.closest(".burger-btn") &&
        !event.target.classList.contains("menu-item")
      ) {
        setShowFloatingMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showFloatingMenu]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigation("/login");
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("home");
  };

  return (
    <>
      <Navbar expand="lg" id="top" className="bg-dark py-3 sticky-top mx-auto">
        <Container fluid className="px-4 col-md-10">
          <Navbar.Brand
            as={Link}
            to={"/"}
            className="text-light fw-bold me-auto"
            onClick={scrollToTop}
          >
            Ryan
          </Navbar.Brand>

          <Button
            aria-label="Burger menu button for mobile"
            onClick={() => setShowFloatingMenu(true)}
            className="text-light d-lg-none ms-auto burger-btn d-flex align-items-center"
          >
            <FaBars />
          </Button>

          {/* DESKTOP */}
          <Navbar.Collapse id="basic-navbar-nav" className="w-100">
            <div className="d-flex w-100 justify-content-between align-items-center">
              <Nav className="mx-auto d-none d-lg-flex gap-3">
                <Nav.Link
                  className="fw-bold text-light"
                  onClick={() => scrollToSection("top")}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  className="fw-bold text-light"
                  onClick={() => scrollToSection("about")}
                >
                  About
                </Nav.Link>
                <Nav.Link
                  className="fw-bold text-light"
                  onClick={() => scrollToSection("work")}
                >
                  Work
                </Nav.Link>
              </Nav>

              <div className="d-none d-lg-flex gap-2">
                {!isLoggedIn ? (
                  <Nav.Link
                    className="px-3 py-2 fw-bold text-light bg-success rounded-3"
                    onClick={() => scrollToSection("contact")}
                  >
                    Contact
                  </Nav.Link>
                ) : (
                  <>
                    <Nav.Link
                      as={Link}
                      to="/dashboard"
                      className="px-3 py-2 fw-bold text-light bg-success rounded-3"
                    >
                      Dashboard
                    </Nav.Link>
                    <Button
                      className="text-light border-light"
                      variant="outline-black"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </>
                )}
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* MOBILE */}
      {showFloatingMenu && (
        <div className="custom-menu position-fixed top-0 end-0 m-3 p-3 text-end">
          <Button
            variant="link"
            className="close-btn text-white text-end"
            onClick={() => setShowFloatingMenu(false)}
          >
            <IoClose size={24} />
          </Button>
          <div
            className={`menu-item ${activeSection === "home" ? "active" : ""}`}
            onClick={scrollToTop}
          >
            Home
          </div>
          <div
            className={`menu-item ${activeSection === "about" ? "active" : ""}`}
            onClick={() => scrollToSection("about")}
          >
            About
          </div>
          <div
            className={`menu-item ${activeSection === "work" ? "active" : ""}`}
            onClick={() => scrollToSection("work")}
          >
            Work
          </div>
          <div
            className={`menu-item ${
              activeSection === "contact" ? "active" : ""
            }`}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </div>
          {isLoggedIn ? (
            <>
              <div
                className="menu-item"
                onClick={() => {
                  navigation("/dashboard");
                }}
              >
                Dashboard
              </div>
              <Button
                variant="outline-light"
                className="mt-2 col-6"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          ) : null}
        </div>
      )}
    </>
  );
}

export default CustomNavbar;
