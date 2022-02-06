import { Container, Row, Col } from "react-bootstrap";
import { FaJava, FaReact, FaBootstrap } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiSpringboot, SiHtml5, SiApollographql, SiCss3 } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import "./style.css";

const Resume = () => {
  return (
    <Container className="resume-container">
      <Row>
        <Col className="subheading">
          <h3 className="heading-2">Technologies</h3>
        </Col>
      </Row>
      <Row>
        <Col className="resume-entry">
          <SiHtml5 />
        </Col>
        <Col className="resume-entry">
          <SiCss3 />
        </Col>
        <Col className="resume-entry">
          <DiJavascript />
        </Col>
      </Row>
      <Row>
        <Col className="resume-entry">
          <FaReact />
        </Col>
        <Col className="resume-entry">
          <SiApollographql />
        </Col>
        <Col className="resume-entry">
          <FaBootstrap />
        </Col>
      </Row>
      <Row>
        <Col className="resume-entry">
          <FaJava />
        </Col>
        <Col className="resume-entry">
          <SiSpringboot />
        </Col>
        <Col className="resume-entry">
          <GrMysql />
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
