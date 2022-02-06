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
        <Row className="project-row">
          <Col className="project-info-col">
            <div className="project-text">
              <h3>Social Media App</h3>
              <p>
                Social media app made with MongoDb, Express, Apollo, React, React-Router and Bootstrap. This 
                app allows users to create an account, post text comments, and add other
                users as friends. JSON Web Tokens (JWT) used for authentication and deployed to Heroku. 
              </p>
              <a href="https://nblake-social-media-app.herokuapp.com/">view app</a>
            </div>
          </Col>
          <Col>
            <div className="bg-image hover-zoom">
              <img src={require("../../assets/hold_phone.jpg").default} />
            </div>
          </Col>
        </Row>
        <Row className="project-row">
          <Col className="project-info-col">
            <div className="project-text">
              <h3>Book Search App</h3>
              <p>
              Book Search app made with MongoDb, Express, Apollo, React, React-Router and Bootstrap. This 
                app allows users to search for books using the Google Books API. Users also have 
                the ability to save and delete books from a personal library.  JSON Web Tokens (JWT) used for authentication and deployed to Heroku.
              </p>
              <a href="https://agile-tundra-48480.herokuapp.com/">view app</a>
            </div>
          </Col>
          <Col>
            <div className="img-wrapper">
              <img src={require("../../assets/white.jpg").default} />
            </div>
          </Col>
        </Row>
        <Row className="project-row">
          <Col className="project-info-col">
            <div className="project-text">
              <h3>Recipe Search App</h3>
              <p>
                Recipe search application created with React, Sematic UI, and the Spoontacular API. Deployed with Netlify.
              </p>
              <a href="https://recipe-search009.netlify.app/">View app</a>
            </div>
          </Col>
          <Col>
            <div>
              <img src={require("../../assets/eggy.jpg").default} />
            </div>
          </Col>
        </Row>
      </FadeIn>
    </Container>
  );
};

export default Projects;
