import React, { useEffect } from "react";
import CarouselPage from "../components/CarouselPage";
import Skills from "./Skills";
import Presentation from "../components/Presentation";
import { FaArrowDown } from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    document.title = "Portfolio - Accueil";
  }, []);

  return (
    <>
      <CarouselPage />

      <h1 className="text-center my-5 bg-white display-4 py-5">
        {" "}
        <a href="#presentation" className="text-dark">
          <FaArrowDown size={24} />
        </a>
      </h1>

      <Presentation />

      <div className="justify-content-center">
        <Skills />
      </div>
    </>
  );
};

export default Home;
