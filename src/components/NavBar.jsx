import "./css/Navbar.css"; // Import your CSS for navbar styles

const Navbar = () => {
  return (
    <nav className={"navbar sticky"}>
      {/* Navbar content */}
      <div className="nav-meun">
        <div className="nav-item">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
