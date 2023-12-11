// ProjectsPage.jsx

import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Project Title 1",
      description: "Description for Project 1...",
    },
    {
      id: 2,
      title: "Project Title 2",
      description: "Description for Project 2...",
    },
    // Add more project objects as needed
  ];

  return (
    <div>
      <h1>Projects</h1>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
