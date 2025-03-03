import React from "react";
import { Card, Badge } from "react-bootstrap";

const SkillCard = ({ skill }) => {
  console.log("Données du skill:", skill);
  console.log("URL de l'image:", skill.image);

  // Fonction pour déterminer la couleur du badge selon le niveau
  const getLevelBadgeVariant = (level) => {
    switch (level) {
      case "débutant":
        return "success";
      case "intermédiaire":
        return "warning";
      case "expert":
        return "danger";
      default:
        return "primary";
    }
  };

  // Fonction pour déterminer la couleur du badge selon la catégorie
  const getCategoryBadgeVariant = (category) => {
    switch (category) {
      case "front-end":
        return "info";
      case "back-end":
        return "dark";
      case "design":
        return "primary";
      case "bdd":
        return "secondary";
      case "déploiement":
        return "primary";
      case "hébergement":
        return "success";
      case "testing":
        return "success";
      default:
        return "light";
    }
  };

  return (
    <Card className="h-100 shadow-sm border-0 bg-white">
      <div className="position-relative" style={{ paddingTop: "75%" }}>
        <Card.Img
          variant="top"
          src={skill.image}
          alt={skill.title}
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ objectFit: "cover" }}
          onError={(e) => console.error("Erreur de chargement de l'image:", e)}
        />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-center h5 mb-3">{skill.title}</Card.Title>
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center">
            <Badge
              bg={getCategoryBadgeVariant(skill.category)}
              className="px-1 py-1 text-uppercase text-truncate"
              style={{
                maxWidth: "48%",
                fontSize: "0.65rem",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              {skill.category}
            </Badge>
            <Badge
              bg={getLevelBadgeVariant(skill.level)}
              className="px-1 py-1 text-uppercase text-truncate"
              style={{
                maxWidth: "48%",
                fontSize: "0.65rem",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              {skill.level}
            </Badge>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SkillCard;
