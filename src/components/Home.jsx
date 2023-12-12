import Projects from "./Projects"; // Assuming you have a Projects component
import "./css/Home.css"; // Import your CSS file for Home
import Footer from "./Footer";
import ContactSection from "./ContactSection";
import Skills from "./Skills";
const Home = () => {
  return (
    <div>
      <div className="hero-section" id="home">
        <div className="hero-content">
          <h1>This is Mohamed's Portfolio</h1>
          <p>
            Welcome to my creative corner! 🌟 I'm passionate about crafting
            digital experiences that captivate and inspire. Dive into my world
            of projects, designs, and ideas. Let's create something amazing
            together!
            
          </p>
         
        </div>
      </div>
      {/* <div className="about-section">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
          semper justo. Sed consequat elit eu vestibulum.
        </p>
      </div> */}

      <div className="Skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div className="contact-section" id="contact">
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
