import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './style.css';

/* <div className="logo">
  <div className="logo-pic"></div>
  <h2>Nateyana Blake</h2>
</div> */
  /* <Link to="/contact">contact</Link>
  <Link to="/resume">resume</Link>
  <Link to="/projects">projects</Link> */

const Navigation = () => {
  return (
      <Navbar className='nav-color padding-nav' expand="lg">
          <Navbar.Brand href="#home" className='bold-brand-name'>Nateyana Blake</Navbar.Brand>
          <Navbar.Text>Web Developer</Navbar.Text>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"> 
            <Nav className='ms-auto'> 
              <Nav.Link href="#home"className='nav-link-border' data-testid='projects'>Projects</Nav.Link>
              <Nav.Link href="#link" className='nav-link-border' data-testid='resume'>Resume</Nav.Link>
              <Nav.Link href="#link" className='nav-link-border' data-testid='contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
  );
};

export default Navigation;
