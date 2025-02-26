import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ListGroup,
  Image,
} from "react-bootstrap";

const API_URL = import.meta.env.VITE_API_URL;

const Dashboard = () => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({
    title: "",
    category: "",
    level: "",
    imageFile: null,
  });
  const [editSkill, setEditSkill] = useState(null);

  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  };

  useEffect(() => {
    document.title = "Portfolio - Dashbord";

    const fetchSkills = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/skills/getallskills`, {
          headers: getAuthHeaders(),
        });

        if (response.data && response.data.skills) {
          setSkills(response.data.skills);
        } else {
          console.error("Format de réponse invalide:", response.data);
          setSkills([]);
        }
      } catch (error) {
        console.error("Erreur détaillée:", {
          message: error.message,
          response: error.response?.data,
          status: error.response?.status,
        });
        setSkills([]);
      }
    };
    fetchSkills();
  }, []);

  const addSkill = async (e) => {
    try {
      if (!newSkill.title || !newSkill.category || !newSkill.level) {
        alert("Veuillez remplir tous les champs texte");
        return;
      }
      if (!newSkill.imageFile) {
        alert("Veuillez sélectionner une image");
        return;
      }

      const formData = new FormData();
      formData.append("title", newSkill.title);
      formData.append("category", newSkill.category);
      formData.append("level", newSkill.level);
      formData.append("imageFile", newSkill.imageFile);

      const response = await axios.post(
        `${API_URL}/api/skills/addskill`,
        formData,
        {
          headers: {
            ...getAuthHeaders(),
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data) {
        const reloadedSkills = await axios.get(
          `${API_URL}/api/skills/getallskills`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setSkills(reloadedSkills.data.skills);

        setNewSkill({
          title: "",
          category: "",
          level: "",
          imageFile: null,
        });

        alert("Compétence ajoutée avec succès !");
      }
    } catch (error) {
      console.error("Erreur détaillée:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        stack: error.stack,
      });
      alert(
        `Erreur lors de l'ajout de la compétence: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  const updateSkill = async (e) => {
    if (!editSkill.title || !editSkill.category || !editSkill.level) {
      alert("Champs nécessaires");
      return;
    }

    const formData = new FormData();
    formData.append("title", editSkill.title);
    formData.append("category", editSkill.category);
    formData.append("level", editSkill.level);

    if (editSkill.imageFile) {
      formData.append("imageFile", editSkill.imageFile);
    }
    if (editSkill.public_id) {
      formData.append("public_id", editSkill.public_id);
    }

    try {
      const response = await axios.put(
        `${API_URL}/api/skills/updateskill/${editSkill._id}`,
        formData,
        {
          headers: {
            ...getAuthHeaders(),
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const updatedSkills = skills.map((skill) =>
        skill._id === response.data.skill._id ? response.data.skill : skill
      );
      setSkills(updatedSkills);
      setEditSkill(null);
    } catch (error) {
      console.error("Erreur lors de la modification de la compétence:", error);
    }
  };

  const deleteSkill = async (skillId) => {
    try {
      await axios.delete(`${API_URL}/api/skills/deleteskill/${skillId}`, {
        headers: getAuthHeaders(),
      });
      setSkills(skills.filter((skill) => skill._id !== skillId));
    } catch (error) {
      console.error("Erreur lors de la suppression de la compétence:", error);
    }
  };

  return (
    <Container fluid className="py-5">
      <Container>
        <h1 className="text-center display-4 mb-5">Dashboard</h1>

        {/* Formulaire d'ajout */}
        <Row className="justify-content-center mb-5">
          <Col xs={12} md={8} lg={6}>
            <div className="bg-white rounded-3 shadow-sm p-4">
              <h3 className="text-center h4 mb-4">Ajouter une compétence</h3>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Titre"
                    value={newSkill.title}
                    onChange={(e) =>
                      setNewSkill({ ...newSkill, title: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Catégorie"
                    value={newSkill.category}
                    onChange={(e) =>
                      setNewSkill({ ...newSkill, category: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Select
                    value={newSkill.level}
                    onChange={(e) =>
                      setNewSkill({ ...newSkill, level: e.target.value })
                    }
                  >
                    <option value="">Sélectionnez un niveau</option>
                    <option value="débutant">Débutant</option>
                    <option value="intermédiaire">Intermédiaire</option>
                    <option value="expert">Expert</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Control
                    type="file"
                    onChange={(e) =>
                      setNewSkill({ ...newSkill, imageFile: e.target.files[0] })
                    }
                  />
                </Form.Group>

                <Button
                  variant="success"
                  className="w-100 py-2"
                  onClick={addSkill}
                >
                  Ajouter
                </Button>
              </Form>
            </div>
          </Col>
        </Row>

        {/* Liste des compétences */}
        <h3 className="text-center h4 mb-4">Liste des compétences</h3>
        <Row className="justify-content-center">
          <Col xs={12} lg={10}>
            <ListGroup variant="flush" className="bg-white rounded-3 shadow-sm">
              {skills.map((skill) => (
                <ListGroup.Item key={skill._id} className="p-3 border-bottom">
                  {editSkill && editSkill._id === skill._id ? (
                    <Row className="align-items-center">
                      <Col xs={12} md={8}>
                        <Form.Group className="mb-2">
                          <Form.Control
                            type="text"
                            value={editSkill.title}
                            onChange={(e) =>
                              setEditSkill({
                                ...editSkill,
                                title: e.target.value,
                              })
                            }
                          />
                        </Form.Group>
                        <Form.Group className="mb-2">
                          <Form.Control
                            type="text"
                            value={editSkill.category}
                            onChange={(e) =>
                              setEditSkill({
                                ...editSkill,
                                category: e.target.value,
                              })
                            }
                          />
                        </Form.Group>
                        <Form.Select
                          className="mb-2"
                          value={editSkill.level}
                          onChange={(e) =>
                            setEditSkill({
                              ...editSkill,
                              level: e.target.value,
                            })
                          }
                        >
                          <option value="débutant">Débutant</option>
                          <option value="intermédiaire">Intermédiaire</option>
                          <option value="expert">Expert</option>
                        </Form.Select>
                        <Form.Control
                          type="file"
                          onChange={(e) =>
                            setEditSkill({
                              ...editSkill,
                              imageFile: e.target.files[0],
                            })
                          }
                        />
                      </Col>
                      <Col xs={12} md={4} className="mt-3 mt-md-0">
                        <div className="d-flex gap-2 justify-content-md-end">
                          <Button variant="success" onClick={updateSkill}>
                            Enregistrer
                          </Button>
                          <Button
                            variant="secondary"
                            onClick={() => setEditSkill(null)}
                          >
                            Annuler
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  ) : (
                    <Row className="align-items-center">
                      <Col xs={3} sm={2}>
                        <Image
                          src={skill.image}
                          alt={skill.title}
                          className="w-100 rounded"
                        />
                      </Col>
                      <Col xs={4} sm={5} className="p-0">
                        <h5 className="mb-1">{skill.title}</h5>
                        <p className="text-muted mb-0">
                          {skill.category} - {skill.level}
                        </p>
                      </Col>
                      <Col xs={5} sm={5}>
                        <div className="d-flex flex-column flex-sm-row gap-2 justify-content-end">
                          <Button
                            variant="info"
                            size="sm"
                            onClick={() => setEditSkill(skill)}
                          >
                            Modifier
                          </Button>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => deleteSkill(skill._id)}
                          >
                            Supprimer
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  )}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Dashboard;
