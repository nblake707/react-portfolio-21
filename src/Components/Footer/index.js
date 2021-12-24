import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./style.css";

const Footer = () => {
  return (
    <footer>
      <hr
        className="footer-hr"
        style={{
          width: "90%",
          margin: "auto",
          color: "#56494c",
          backgroundColor: "#56494c",
        }}
      />
      <Container className="footer-container">
        <Row className="footer-row">
          <Col md={3} className="footer-col">
            <h3>Email</h3>
            <p>nblake707@gmail.com</p>
          </Col>
          <Col md={3} className="footer-col">
            <h3>Github</h3>
            <p>github.com/nblake707</p>
          </Col>
          <Col className="footer-col">
            <Row>
              <h3>Follow Me</h3>
            </Row>
            <Row className="footer-icons">
              <FaGithub />
              <FaLinkedin />
            </Row>
          </Col>
          <Col className="footer-col">
            <p>Made in nyc</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
