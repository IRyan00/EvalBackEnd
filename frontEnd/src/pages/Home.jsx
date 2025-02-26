import React, { useEffect } from "react";
import CarouselPage from "../components/CarouselPage";
import Skills from "./Skills";
import Presentation from "../components/Presentation";

const Home = () => {
  useEffect(() => {
    document.title = "Portfolio - Accueil";
  }, []);

  return (
    <>
      <CarouselPage />

      <h1 className="text-center my-5 bg-white display-4 mb-5">À propos</h1>

      <Presentation />

      <div className="justify-content-center">
        <Skills />
      </div>
    </>
  );
};

export default Home;
