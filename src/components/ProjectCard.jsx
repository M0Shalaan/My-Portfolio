// ProjectCard.jsx
import "./css/ProjectCard.css";
import { FaGithub, FaLinkedin, FaHackerrank, FaLink } from "react-icons/fa";

const ProjectCard = ({ title, description, imageUrl, liveLink, gitLink }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          <FaLink />
        </a>
        <a href={gitLink} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
