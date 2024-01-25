import React from "react";
import degree from "../degree.jpeg";
import { Col, Container, Image, Row, Stack } from "react-bootstrap";

const Education = () => {
  return (
    <Container>
      <Row className="justify-content-center p-3">
        <span className="h4 fw-bolder">Education</span>
        <span className="col-1 border-3 border-bottom border-info"></span>
      </Row>
      <Row className="d-flex align-items-center pb-1">
        <Col md={6} xs={12}>
          <Image
            width={"50%"}
            height={"50%"}
            src={degree}
            className="img-fluid img-thumbnail p-2"
          />
        </Col>
        <Col md={6} xs={12}>
          <Stack className="text-start">
            <div className="fw-bold">
              Bachelor of Engineering - Information Technology <br /> (Aug 2019
              - Jun 2023) <br />
              <div style={{ color: "#0d6efd" }}>
                Centria University of Applied Science
              </div>
            </div>
            <div className="col-10 text-start ps-2 fw-semibold">
              {" "}
              <ul>
                <li>
                  Gained extensive training and sucessfully accomplished all the
                  courses for software development and programming.
                </li>
                <li>
                  Learned C, C++, Javascript, React.js, Node.js, Python, Figma
                  and programming languages.
                </li>
              </ul>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default Education;
