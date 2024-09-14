import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import Health from "../../Assets/Health.png";
import Crypto from "../../Assets/Crypto.png";
import Blogify from "../../Assets/Blogify.png";
import Netflix from "../../Assets/Netflix.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Crypto}
              isBlog={false}
              title="Trading-Crypto-Website"
              description=": Built AI platform to recommend crypto ,added buy/shell recommendationusing pinescript and recommendation is cutomizable according to use"
             
               ghLink="https://github.com/vanshikaarorax/Trading-Crypto-stocks-reccomendation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Health}
              isBlog={false}
              title="Health-tech"
              description="Created software for visually,verbally impaired, featuring object detection, gestureinterpretation, and medical tracking for ease."
              ghLink="https://github.com/vanshikaarorax/HealthTech"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              isBlog={false}
              title="netflix"
              description="Netflix clone-full fleged"
              ghLink="https://github.com/vanshikaarorax/Netflix-clone"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Blogify}
              isBlog={false}
              title="Blogify"
              description="Personnel Blogging Application"
              ghLink="https://github.com/vanshikaarorax/Blogify"
             
            />
          </Col>

        

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
