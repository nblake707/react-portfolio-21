import { Container, Row, Col, Form } from "react-bootstrap";
import "./style.css";

const Contact = () => {
  return (
    <Container>
      <Row>
        <Col className="text-col">
          <div className="contact-text">
            <h1>Contact</h1>
            <p>Looking forward to hearing from you</p>
          </div>
          <div className="contact-text">
            <h4>Email</h4>
            <p>Nblake707@gmail.com</p>
          </div>
        </Col>
        <Col>
          <Form>
            <div className="contact-row-wrapper">
              <div className="row">
                <div className="col-5">
                  <label>First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div className="col-5">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
              </div>
            </div>

            <div className="contact-row-wrapper">
              <div className="row">
                <div className="col-5">
                  <label>Email</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div className="col-5">
                  <label>Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
              </div>
            </div>

            <div className="contact-row-wrapper">
              <div className="row">
                <div className="col">
                  <label>Message</label>
                  <textarea
                    id="story"
                    name="story"
                    rows="5"
                    cols="33"
                  ></textarea>
                </div>
                <div className="col">
                  <input
                    type="submit"
                    className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
              </div>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
