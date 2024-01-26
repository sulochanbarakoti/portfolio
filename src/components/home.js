import React from "react";
import profile from "../images/profile.jpeg";
import Image from "react-bootstrap/Image";
import { Button, Container, Row, Col, Stack } from "react-bootstrap";

const HomeSection = () => {
  return (
    <Container bg="f0f8ff">
      <Row>
        <Col xs={12} md={6} xl={6} className="p-5 d-flex align-items-center">
          <Stack gap={1} className="justify-content-center">
            <div>Hi,</div>
            <div>
              I'am{" "}
              <span className="fw-bold" style={{ color: "#20a6f9" }}>
                Sulochan
              </span>
            </div>
            <div className="fw-bolder">Web Developer</div>
            <div>
              {" "}
              <Button className="col-4 btn btn-sm">Contact</Button>
            </div>
          </Stack>
        </Col>
        <Col xs={12} md={6} xl={6} className="p-5 d-flex align-items-center">
          <Image
            style={{ height: "90%", width: "100%" }}
            src={profile}
            roundedCircle
            className=" p-1 img-fluid img-thumbnail"
            alt="Profile image"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeSection;
