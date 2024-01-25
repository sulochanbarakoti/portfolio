import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Experience = () => {
  const experienceObject = [
    {
      id: "1",
      position: "INTERN",
      place: "Centria University of Applied Science",
      period: "Feb 2023 - Jun 2023",
      discription:
        "Utilized Figma for design and demonstrated proficiency in frontend technologies like React.js. Applied backend technologies including Node.js, Express.js, and MongoDB",
    },
    {
      id: "2",
      position: "WEB DESIGNER",
      place: "Himalayan kangaroo Pvt. Ltd",
      period: "Oct 2020 - Aug 2021",
      discription:
        "Conceptualized distinctive graphic designs for clients, collaborated closely with marketing teams, and excelled in the role of a website designer.",
    },
    {
      id: "3",
      position: "INTERN",
      place: "General Technology Pvt. Ltd",
      period: "Apr 2019 - Sept 2019",
      discription:
        "Served as a junior software developer, gaining hands-on experience with React.js and Node.js technologies.",
    },
  ];

  return (
    <Container>
      <Row>
        <Row className="justify-content-center p-3">
          <span className="h4 fw-bolder">Experience</span>
          <span className="col-1 border-3 border-bottom border-info"></span>
        </Row>
        {experienceObject.map((exp) => (
          <Row className="border mb-2" key={exp.id}>
            <Row className="fw-bold">
              <Col className="text-start">{exp.position}</Col>
              <Col className="text-start">{exp.place}</Col>
              <Col className="text-end">{exp.period}</Col>
            </Row>
            <Row className="text-start">
              <ul>{exp.discription}</ul>
            </Row>
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default Experience;
