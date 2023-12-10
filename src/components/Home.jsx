import  { useState } from "react";
import "../App.css"; // Import your CSS file
import Navbar from "./NavBar";
import Projects from "./Projects";
const Home = () => {
  const [name, setName] = useState("Your Name");
  const [bio, setBio] = useState("Your Bio");
  const [email, setEmail] = useState("your.email@example.com");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="hero-section">
        <h1 className="hero-text">Welcome to My HomePage</h1>
      </div>
      <div className="info-container">
        <Projects />

        <h2 className="section-title">About Me</h2>
        <input
          className="input-field"
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Your Name"
        />
        <textarea
          className="input-field textarea"
          value={bio}
          onChange={handleBioChange}
          placeholder="Your Bio"
        />
        <input
          className="input-field"
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="your.email@example.com"
        />
      </div>
      <div className="preview-container">
        <h3 className="section-title">Preview</h3>
        <div className="preview-info">
          <h2>{name}</h2>
          <p>{bio}</p>
          <p>Email: {email}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
