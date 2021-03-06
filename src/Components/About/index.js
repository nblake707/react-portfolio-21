import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./style.css";
import NavigationButton from "../Navigation-Button";
import FadeIn from "react-fade-in";

const About = () => {
  // button properties
  const [categories] = useState([
    {
      name: "Projects",
      hexColor: "#eea302",
    },
    {
      name: "Resume",
      hexColor: "#ff3b25",
    },
    {
      name: "Contact",
      hexColor: "#80d9da",
    },
  ]);

  return (
    <Container className="about-container">
      <FadeIn transitionDuration="600">
        <Row className="about-row">
          <Col className="picture-col">
            <div className="welcome-image-div">
              <Image
                src={require("../../assets/me.jpeg").default}
                className="welcome-image"
              />
            </div>
          </Col>
          <Col xs={{ order: "first" }} lg={{ order: "last" }}>
            <div className="welcome-text">
              <h1 className="welcome-text-hello">Hello</h1>
              <h4 className="welcome-about-me">My name is Nateyana</h4>
              <p className="welcome-paragraph">
                I’m a web developer specializing in building exceptional digital
                experiences. Currently, focused on delivering high-quality
                digital education at{" "}
                <a href="https://2u.com/" className="too-you">
                  2U
                </a>
                .
              </p>
            </div>
            <div className="navigation-buttons">
              <NavigationButton buttonProperties={categories} />
            </div>
          </Col>
        </Row>
      </FadeIn>
    </Container>
  );
};

export default About;
