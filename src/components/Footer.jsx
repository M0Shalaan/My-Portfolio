
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#f2f2f2",
        padding: "20px",
        textAlign: "center",
      }}
    >
      &copy; {currentYear} Mohamed Shalaan
    </footer>
  );
};

export default Footer;
