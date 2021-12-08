import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import NavigationButton from "../Navigation-Button";

const About = () => {
  // button names
  const projects = "projects";
  const resume = "resume";
  const contact = "contact";

  return (
    <Container>
      <Row>
        <Col>im the only col</Col>
        <Col className="">
          <div className="welcome-box">
            <div className="welcome-text">
              <h1 className="welcome-text-hello">Hello</h1>
              <h4 className="welcome-about-me">A Bit About Me</h4>
              <p className="welcome-paragraph">
                  I'm a paragraph. Click here 
                  to add your own text and edit 
                  me. I’m a great place for you 
                  to tell a story and let your 
                  users know a little more about 
                  you.
              </p>
            </div>

            <div className="navigation-buttons">
              {/* create a button component that can be reused
                            this button accepts a prop with the name that it
                            should display.                        
                        */}
              <NavigationButton buttonName={projects} />
              <NavigationButton buttonName={resume} />
              <NavigationButton buttonName={contact} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
