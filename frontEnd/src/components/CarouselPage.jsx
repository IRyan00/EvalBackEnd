import React from "react";
import { Carousel, Container } from "react-bootstrap";
import img1 from "../assets/carouselImages/img1.jpg";
import img2 from "../assets/carouselImages/img2.jpg";
import img3 from "../assets/carouselImages/img3.jpg";

const CarouselPage = () => {
  return (
    <Container fluid className="px-0">
      <Carousel fade indicators={false} className="bg-dark">
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100 carousel-image"
              src={img1}
              alt="First slide"
              style={{
                height: "70vh",
                objectFit: "cover",
                objectPosition: "center",
                filter: "brightness(0.7)",
              }}
            />
          </div>
          <Carousel.Caption className="mb-5">
            <h2 className="display-4 fw-bold text-white mb-3">
              Développement Web Créatif
            </h2>
            <p className="lead text-white">
              Création d'applications web modernes et innovantes
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100 carousel-image"
              src={img2}
              alt="Second slide"
              style={{
                height: "70vh",
                objectFit: "cover",
                objectPosition: "center",
                filter: "brightness(0.7)",
              }}
            />
          </div>
          <Carousel.Caption className="mb-5">
            <h2 className="display-4 fw-bold text-white mb-3">
              Solutions Sur Mesure
            </h2>
            <p className="lead text-white">
              Des applications adaptées à vos besoins spécifiques
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100 carousel-image"
              src={img3}
              alt="Third slide"
              style={{
                height: "70vh",
                objectFit: "cover",
                objectPosition: "center",
                filter: "brightness(0.7)",
              }}
            />
          </div>
          <Carousel.Caption className="mb-5">
            <h2 className="display-4 fw-bold text-white mb-3">
              Performance & Qualité
            </h2>
            <p className="lead text-white">
              Des applications robustes et optimisées
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default CarouselPage;
