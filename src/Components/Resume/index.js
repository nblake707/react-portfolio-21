import { Container, Row, Col, Form } from "react-bootstrap";
import "./style.css";

const Resume = () => {
  return (
    <Container className="resume-container">
      {/* <Row>
        <Col>
          <div className="resume-title">
            <h1>Resume</h1>
          </div>
        </Col>
      </Row> */}
      <Row>
        <Col className="subheading">
          <h3 className="heading-2">Work Experience</h3>
        </Col>
      </Row>
      <Row>
        <Col className="resume-entry">
          <h5>Java Enterprise Assistant Instructor</h5>
          <h6>May 2019 - Present</h6>
          <p className="resume-paragraph">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="resume-entry">
          <h5>Teaching Assistant</h5>
          <h6>Jan 2021 - Present</h6>
          <p className="resume-paragraph">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="resume-entry">
          <h5>Curriculum Engineer</h5>
          <h6>Oct 2020 - Jan 2021</h6>
          <p className="resume-paragraph">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="resume-entry">
          <h5>Fullstack Developer</h5>
          <h6>Mar 2019 - Apr 2019</h6>
          <p className="resume-paragraph">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>
        </Col>
      </Row>

      <Row>
        <Col className="resume-entry">
          <h5>Java Apprentice</h5>
          <h6>May 2018 - Jan 2019</h6>
          <p className="resume-paragraph">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
      <hr />
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Resume;
