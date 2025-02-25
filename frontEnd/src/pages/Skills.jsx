import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SkillCard from "../components/SkillCard";
import axios from "axios";

const Skills = () => {
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
        const response = await axios.get(
          `http://localhost:5001/api/skills/getallskills`,
          {
            headers: getAuthHeaders(),
          }
        );

        if (response.data && response.data.skills) {
          console.log("Skills reçus:", response.data.skills);
          setSkills(response.data.skills);
        } else {
          console.error("Format de réponse invalide:", response.data);
          setSkills([]);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des skills:", error);
        setSkills([]);
      }
    };
    fetchSkills();
  }, []);

  return (
    <Container fluid className="py-5 bg-white">
      <Container>
        <h1 className="text-center display-4 mb-5">Mes compétences</h1>
        <Row xs={1} sm={2} md={3} lg={3} className="g-4">
          {skills.map((skill) => (
            <Col key={skill._id}>
              <SkillCard skill={skill} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Skills;
