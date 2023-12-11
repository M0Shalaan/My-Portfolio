// ProjectsPage.jsx

import React from "react";
import ProjectCard from "./ProjectCard";
import "./css/Projects.css";

// Import local images
import project1Image from "./projects/project1.jpg";
import project2Image from "./projects/project2.jpg";
import project3Image from "./projects/project3.jpg";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Project Title 1",
      description: "Description for Project 1...",
      imageUrl: project1Image,
      link: "",
    },
    {
      id: 2,
      title: "Project Title 2",
      description:
        "Descriptvdvvdvion for Project 2...djpsdjvsdjivdsiovjiodsjvio",
      imageUrl: project2Image,
      link: "",
    },
    {
      id: 3,
      title: "Project Title 3",
      description: "Description for Project 3...",
      imageUrl: project3Image,
      link: "",
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-heading">Projects</h1>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
