import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import NavigationButton from "../Navigation-Button";

const About = () => {
  // button properties
  const [categories] = useState([
    {
      name: 'Projects',
      hexColor: '#eea302',
    },
    {
      name: 'Resume',
      hexColor: '#ff3b25',
    },
    {
      name: 'Contact',
      hexColor: '#80d9da',
    },
  ]);

  return (
    <Container>
      <Row>
        <Col>
          <div className="welcome-image">
            <img />
          </div>
        </Col>
        <Col className="">
          <div className="welcome-box">
            <div className="welcome-text">
              <h1 className="welcome-text-hello">Hello</h1>
              <h4 className="welcome-about-me">A Bit About Me</h4>
              <p className="welcome-paragraph">
                I'm a paragraph. Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users
                know a little more about you.
              </p>
            </div>
            <div className="navigation-buttons">                     
              <NavigationButton buttonProperties={categories} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
