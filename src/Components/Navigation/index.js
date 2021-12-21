import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Avatar from 'avataaars';
import "./style.css";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <Navbar className="nav-color padding-nav" expand="lg">
      <Avatar
        style={{width: '40px', height: '40px'}}
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
      />
      <Navbar.Brand href="/" className="bold-brand-name">
        Nateyana Blake
      </Navbar.Brand>
      <Navbar.Text>Web Developer</Navbar.Text>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link
            onClick={() => navigate("/Projects")}
            className="nav-link-border"
            data-testid="projects"
          >
            Projects
          </Nav.Link>
          <Nav.Link
            onClick={() => navigate("/Resume")}
            className="nav-link-border"
            data-testid="resume"
          >
            Resume
          </Nav.Link>
          <Nav.Link
            onClick={() => navigate("/Contact")}
            className="nav-link-border"
            data-testid="contact"
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
