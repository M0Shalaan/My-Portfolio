import "./css/Navbar.css"; // Import your CSS for navbar styles

const Navbar = () => {
  return (
    <nav className={"navbar sticky"}>
      {/* Navbar content */}
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
