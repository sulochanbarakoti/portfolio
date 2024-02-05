import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import developer from "../Files/developer.png";
import { SKILLS, TOOLS } from "../data";
function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">About Me</strong>
            </h1>
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                    Hi Everyone, I am{" "}
                    <span className="purple">Sulochan Barakoti </span>
                    from <span className="purple"> Pietarsari, Finland.</span>
                    <br />
                    Enthusiastic and results-driven professional with a
                    background in Information Technology and a recent graduate
                    from Centria UAS. Proven skills in frontend development,
                    including HTML, CSS, JavaScript, React.js, and React Native,
                    along with proficiency in backend technologies such as
                    Node.js and Python.
                    <br />
                    I am passionate about crafting intuitive and user-friendly
                    applications and have a keen interest in the intersection of
                    design and technology. Known for a detail-oriented and
                    quality-driven approach, I am eager to leverage my skills in
                    a dynamic work environment, contributing to innovative
                    projects and continuous growth.
                    <br />
                  </p>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} style={{ paddingBottom: "50px" }} className="about-img">
            <img src={developer} alt="about" className="image-style" />
          </Col>
        </Row>
        <Row className="skill-tools-wrapper">
          <Col className="skill-wrapper">
            <h1 className="project-heading">
              Professional <strong className="purple">Skill </strong>
            </h1>
            {SKILLS.map((tool, index) => (
              <ul key={index} className="tool-name">
                <li>{tool}</li>
              </ul>
            ))}
          </Col>
          <Col className="skill-wrapper">
            <h1 className="project-heading">
              <strong className="purple">Tools</strong> I use
            </h1>
            {TOOLS.map((tool, index) => (
              <ul key={index} className="tool-name">
                <li>{tool}</li>
              </ul>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
