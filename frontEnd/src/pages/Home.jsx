import { useEffect } from "react";
import Hero from "../components/Hero";
import Skills from "./Skills";
import Presentation from "../components/presentation/Presentation";
import Creations from "../components/creations/Creations";

const Home = () => {
  useEffect(() => {
    document.title = "Portfolio - Accueil";
  }, []);

  return (
    <>
      <Hero />

      <Presentation />

      <div className="justify-content-center">
        <Skills />
      </div>

      <Creations />
    </>
  );
};

export default Home;
