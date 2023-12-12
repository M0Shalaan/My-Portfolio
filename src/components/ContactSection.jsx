import styled from "styled-components";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";

const ContactSection = () => {
  return (
    <ContactContainer>
      <h2>Connect with me:</h2>
      <IconWrapper>
        <IconLink
          href="https://github.com/M0Shalaan"
          target="_blank"
          rel="noopener noreferrer"
          color="#000000" // GitHub color
        >
          <FaGithub />
        </IconLink>
        <IconLink
          href="https://www.linkedin.com/in/mohamed-shalaan-85192519b/"
          target="_blank"
          rel="noopener noreferrer"
          color="#0077B5" // LinkedIn color
        >
          <FaLinkedin />
        </IconLink>
        <IconLink
          href="https://www.hackerrank.com/profile/hungrydog0101"
          target="_blank"
          rel="noopener noreferrer"
          color="#2EC866" // Hackerrank color
        >
          <FaHackerrank />
        </IconLink>
      </IconWrapper>
    </ContactContainer>
  );
};
const ContactContainer = styled.div`
  background-color: #f8f8f8;
  padding: 40px 20px;
  text-align: center;
`;

const IconWrapper = styled.div`
  font-size: 35px;
`;

const IconLink = styled.a`
  margin: 0 10px;
  color: ${(props) => props.color || "#000"};
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.hoverColor || "#000"};
  }
`;

export default ContactSection;
