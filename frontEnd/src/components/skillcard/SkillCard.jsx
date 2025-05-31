import { Card, Image } from "react-bootstrap";
import "./SkillCard.css";

const SkillCard = ({ skill }) => {
  return (
    <Card
      id="skill-card"
      className="d-flex flex-row align-items-center bg-dark border border-secondary rounded-3 shadow-sm p-2 h-100"
    >
      <Image
        src={skill.image}
        alt={skill.title}
        width={50}
        height={50}
        id="skill-image"
        className="me-3 rounded-2 p-2"
        style={{ objectFit: "contain" }}
        onError={(e) => console.error("Image error:", e)}
      />
      <div>
        <h6 className="text-light mb-1">{skill.title}</h6>
        <p className="text-light mb-0 small">{skill.category}</p>
      </div>
    </Card>
  );
};

export default SkillCard;
