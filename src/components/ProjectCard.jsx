// ProjectCard.jsx

import React from "react";
import "./css/ProjectCard.css";

const ProjectCard = ({ title, description, imageUrl ,link}) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Link
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
