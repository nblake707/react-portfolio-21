import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./style.css";

const Footer = () => {
  return (
    <footer>
      <Row className="footer-row">
        <Col className="footer-col">
          <h3>Email</h3>
          <p>nblake707@gmail.com</p>
        </Col>
        <Col className="footer-col">
          <h3>Github</h3>
          <p>github.com/nblake707</p>
        </Col>
        <Col className="footer-col">
          <h3>Follow Me</h3>
            <FaGithub />
            <FaLinkedin />
          {/* social media icons */}
        </Col>
        <Col className="footer-col">
          <p>Made in nyc</p>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
