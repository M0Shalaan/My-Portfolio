import Navbar from "./NavBar"; // Assuming you have a Navbar component
import Projects from "./Projects"; // Assuming you have a Projects component
import "./css/Home.css"; // Import your CSS file for Home

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="hero-section" id="home">
        <div className="hero-content">
          <h1>Welcome to MySite</h1>
          <p>
            Welcome to my creative corner! 🌟 I'm passionate about crafting
            digital experiences that captivate and inspire. Dive into my world
            of projects, designs, and ideas. Let's create something amazing
            together!
          </p>
        </div>
      </div>
      <div className="about-section">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
          semper justo. Sed consequat elit eu vestibulum.
        </p>
      </div>
      <div id="projects">
        <Projects />
      </div>

      <div className="contact-section" id="contact">
        <h2>Contact Me</h2>
        <p>Feel free to get in touch!</p>
        {/* Add a contact form or contact details */}
      </div>
    </div>
  );
};

export default Home;
