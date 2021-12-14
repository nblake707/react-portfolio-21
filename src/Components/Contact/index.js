import { Container, Row, Col, Form } from "react-bootstrap";
import { useForm, ValidationError } from "@formspree/react";
import "./style.css";

const Contact = () => {

  const [state, handleSubmit] = useForm("mrgjgabb");
  
  if (state.succeeded) {
    // create a thank you message and style
    return <p>Thanks for joining!</p>;
  }

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
          <Form onSubmit={handleSubmit}>
            <div className="contact-row-wrapper">
              <div className="row">
                <div className="col-5">
                  <label>First Name</label>
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    class="form-control"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div className="col-5">
                  <label>Last Name</label>
                  <input
                    id="last-name"
                    name="last-name"
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
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="Email"
                    aria-label="Email"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="col-5">
                  <label>Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    aria-label="Subject"
                  />
                </div>
              </div>
            </div>

            <div className="contact-row-wrapper">
              <div className="row">
                <div className="col">
                  <label>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    cols="33"
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <div className="col">
                  <input
                    type="submit"
                    disabled={state.submitting}
                    className="form-control"
                    placeholder="submit"
                    aria-label="submit"
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
