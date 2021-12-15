import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import NavigationButton from "../Navigation-Button";
import Avatar from 'avataaars';

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
      <Row className="about-row">
        <Col>
          <div className="welcome-image">
            {/* <img /> */}
            {/* <Avatar
              avatarStyle='Circle'
              topType='LongHairCurly'
              accessoriesType='Kurt'
              hairColor='BrownDark'
              facialHairType='Blank'
              clotheType='CollarSweater'
              clotheColor='PastelYellow'
              eyeType='Happy'
              eyebrowType='RaisedExcitedNatural'
              mouthType='Smile'
              skinColor='DarkBrown'
            /> */}
          </div>
        </Col>
        <Col>
          <div className="welcome-text">
            <h1 className="welcome-text-hello">Hello</h1>
            <h4 className="welcome-about-me">A Bit About Me</h4>
            <p className="welcome-paragraph">
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
          </div>
          <div className="navigation-buttons">
            <NavigationButton buttonProperties={categories} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
