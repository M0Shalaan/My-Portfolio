// Projects.jsx
import '../App.css'
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description for Project 1...",
      link: "https://example.com/project1",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description for Project 2...",
      link: "https://example.com/project2",
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Visit Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
