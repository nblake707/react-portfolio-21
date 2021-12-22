import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FadeIn from "react-fade-in";
import "./style.css";

const Projects = () => {
  return (
    <Container className="projects-container">
      <FadeIn>
        <Row>
          <Col className="title-col">
            <h1>Projects</h1>
          </Col>
        </Row>
        <Row>
          <Col className="project-info-col">
            <div className="project-text">
              <h3>Recipe Search App</h3>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes
              </p>
            </div>
          </Col>
          <Col>
            <div className="bg-image hover-zoom">
              <img src={require("../../assets/healthydining.jpg").default} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="project-info-col">
            <div className="project-text">
              <h3>Project Name 01</h3>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes
              </p>
            </div>
          </Col>
          <Col>
            <div className="img-wrapper">
              <img src={require("../../assets/healthydining.jpg").default} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="project-info-col">
            <div className="project-text">
              <h3>Project Name 01</h3>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <img src={require("../../assets/healthydining.jpg").default} />
            </div>
          </Col>
        </Row>
      </FadeIn>
    </Container>
  );
};

export default Projects;
