// ProjectCard.jsx

import "./css/ProjectCard.css";

const ProjectCard = ({ title, description }) => {
  return (
    <div className="project-card">
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#">Read More</a>
      </div>
    </div>
  );
};

export default ProjectCard;
