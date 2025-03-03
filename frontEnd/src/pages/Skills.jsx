import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SkillCard from "../components/SkillCard";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL = import.meta.env.VITE_API_URL;

const Skills = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [skills, setSkills] = useState([]);

  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  };

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        // Afficher la notif de loading
        const loadingToastId = toast.info(
          "Chargement des compétences en cours...",
          {
            theme: "light",
            position: "bottom-left",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );

        setIsLoading(true);
        const response = await axios.get(`${API_URL}/api/skills/getallskills`, {
          headers: getAuthHeaders(),
        });

        if (response.data && response.data.skills) {
          console.log("Skills reçus:", response.data.skills);
          setSkills(response.data.skills);

          // Fermer la notif de loading
          toast.dismiss(loadingToastId);

          // Afficher la notif de success
          toast.success("Compétences chargées avec succès !", {
            theme: "light",
            position: "bottom-left",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else {
          console.error("Format de réponse invalide:", response.data);
          setSkills([]);

          // Fermer la notif de loading
          toast.dismiss(loadingToastId);

          // Afficher une notif d'erreur
          toast.error("Erreur: Format de réponse invalide", {
            theme: "light",
            position: "bottom-left",
            autoClose: 5000,
          });
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des skills:", error);
        setSkills([]);

        // Afficher une notif d'erreur
        toast.error(
          `Erreur lors du chargement des compétences: ${error.message}`,
          {
            theme: "light",
            position: "bottom-left",
            autoClose: 5000,
          }
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchSkills();
  }, []);

  return (
    <>
      <ToastContainer />
      {isLoading ? (
        <Container fluid className="py-5 bg-white">
          <Container className="text-center">
            <h1 className="text-center display-4 mb-5">Mes compétences</h1>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "200px" }}
            >
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Chargement...</span>
              </div>
            </div>
          </Container>
        </Container>
      ) : (
        <Container fluid className="py-5 px-5 bg-white">
          <Container>
            <h1 className="text-center display-4 mb-5">Mes compétences</h1>
            <Row xs={1} sm={2} md={3} lg={4} className="g-5">
              {skills.map((skill) => (
                <Col key={skill._id}>
                  <SkillCard skill={skill} />
                </Col>
              ))}
            </Row>
          </Container>
        </Container>
      )}
    </>
  );
};

export default Skills;
