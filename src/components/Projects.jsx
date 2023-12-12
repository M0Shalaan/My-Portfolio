// ProjectsPage.jsx

import ProjectCard from "./ProjectCard";
import "./css/Projects.css";
// Import local images
import project1Image from "./projects/project1.jpg";
import project2Image from "./projects/project2.jpg";
import project3Image from "./projects/project3.jpg";
import project4Image from "./projects/project4.jpg";
import project5Image from "./projects/Todo-App-JS.png";
import project6Image from "./projects/docker.jpg";
import project7Image from "./projects/MernStackApp.jpg";
const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Especially CoffeeShop",
      description: "Website for small coffeeshop",
      imageUrl: project1Image,
      liveLink: "https://m0shalaan.github.io/especially-coffee/",
      gitLink: "https://github.com/M0Shalaan/especially-coffee",
    },
    {
      id: 2,
      title: "First Pen",
      description: "My first pen in code pen",
      imageUrl: project2Image,
      liveLink: "https://codepen.io/M_Shalaan/full/LYyxMmB",
      gitLink: "https://github.com/M0Shalaan/first-pen",
    },
    {
      id: 3,
      title: "Task Tracker",
      description: "Task Tracker using React",
      imageUrl: project3Image,
      liveLink: "",
      gitLink: "https://github.com/M0Shalaan/First-react-app",
    },
    {
      id: 4,
      title: "Quizz App",
      description: "Quizz App using react",
      imageUrl: project4Image,
      liveLink: "https://quizz-app-henna.vercel.app/",
      gitLink: "https://github.com/M0Shalaan/Quizz_app-React",
    },
    {
      id: 5,
      title: "Todo-App",
      description: "Todo App using native JS",
      imageUrl: project5Image,
      liveLink: "https://m0shalaan.github.io/todo-app/",
      gitLink: "https://github.com/M0Shalaan/todo-app.git",
    },
    {
      id: 6,
      title: "Docker",
      description: "React App but Wrraped in container to train in containers",
      imageUrl: project6Image,
      liveLink: "/",
      gitLink: "https://github.com/M0Shalaan/docker-container",
    },
    {
      id: 7,
      title: "MernStack App",
      description: "",
      imageUrl: project7Image,
      liveLink: "/",
      gitLink: "https://github.com/M0Shalaan/MERN-Stack-App.git",
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
            liveLink={project.liveLink}
            gitLink={project.gitLink}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
