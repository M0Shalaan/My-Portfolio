// SkillsPage.jsx

import React from "react";
import styled from "styled-components";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaDocker,
  FaSass,
  FaBootstrap,
  FaLinux,
  FaPython,
} from "react-icons/fa";
import { DiMongodb, DiMysql } from "react-icons/di";

import { SiGnubash } from "react-icons/si";

const SkillsPage = () => {
  return (
    <SkillsContainer>
      <h2>Skills</h2>
      <SkillsList>
        <SkillCard>
          <FaReact className="skill-icon" />
          <SkillName>React</SkillName>
        </SkillCard>
        <SkillCard>
          <FaNodeJs className="skill-icon" />
          <SkillName>Node.js</SkillName>
        </SkillCard>
        <SkillCard>
          <FaHtml5 className="skill-icon" />
          <SkillName>HTML5</SkillName>
        </SkillCard>
        <SkillCard>
          <FaCss3 className="skill-icon" />
          <SkillName>CSS3</SkillName>
        </SkillCard>

        <SkillCard>
          <FaDocker className="skill-icon" />
          <SkillName>Docker</SkillName>
        </SkillCard>

        <SkillCard>
          <SiGnubash className="skill-icon" />
          <SkillName>Bash</SkillName>
        </SkillCard>

        <SkillCard>
          <FaSass className="skill-icon" />
          <SkillName>Sass</SkillName>
        </SkillCard>

        <SkillCard>
          <FaBootstrap className="skill-icon" />
          <SkillName>BootStrap</SkillName>
        </SkillCard>

        <SkillCard>
          <FaLinux className="skill-icon" />
          <SkillName>Linux</SkillName>
        </SkillCard>

        <SkillCard>
          <FaPython className="skill-icon" />
          <SkillName>Python</SkillName>
        </SkillCard>

        <SkillCard>
          <DiMongodb className="skill-icon" />
          <SkillName>MongoDb</SkillName>
        </SkillCard>

        <SkillCard>
          <DiMysql className="skill-icon" />
          <SkillName>MySQL</SkillName>
        </SkillCard>
      </SkillsList>
    </SkillsContainer>
  );
};

const SkillsContainer = styled.div`
  background-color: #f8f8f8;
  padding: 40px 20px;
  text-align: center;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const SkillCard = styled.li`
  width: 200px;
  height: 200px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  }

  .skill-icon {
    font-size: 3.5rem;
    margin-bottom: 10px;
    color: #333;
  }
`;

const SkillName = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

export default SkillsPage;
