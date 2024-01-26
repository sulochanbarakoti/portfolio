import React from "react";
import { Carousel, Card, Row, Col, Container } from "react-bootstrap";
import portfolio from "../images/portfolio.png";
import sauna from "../images/sauna-booking.png";
import task from "..//images/task-manager.png";

const Projects = () => {
  return (
    <Container>
      <Row className="justify-content-center p-3">
        <span className="h4 fw-bolder">Projects</span>
        <span className="col-1 border-3 border-bottom border-info"></span>
      </Row>
      <Row>
        {" "}
        <Carousel>
          <Carousel.Item>
            <Container>
              <Row>
                <Col sm={12} md={4} className="mb-2">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={portfolio}
                      alt="Card image cap"
                    />
                    <Card.Body>
                      <Card.Title>Portfolio</Card.Title>
                      <Card.Text>
                        Technology/Language: MERN Stack Portfolio is built using
                        React, HTML, CSS, and Javascript.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={12} md={4} className="mb-2">
                  <Card>
                    <Card.Img variant="top" src={sauna} alt="Card image cap" />
                    <Card.Body>
                      <Card.Title>Sauna Booking</Card.Title>
                      <Card.Text>
                        Sauna booking is built using React, NodeJS, ExpressJS,
                        Bootstrap, HTML, CSS, and Javascript and uses MongoDB as
                        a database.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={12} md={4} className="mb-2">
                  <Card>
                    <Card.Img variant="top" src={task} alt="Card image cap" />
                    <Card.Body>
                      <Card.Title>Task Manager</Card.Title>
                      <Card.Text>
                        Task manager is built using React, NodeJS, ExpressJS,
                        HTML, CSS, and Javascript and uses MongoDB as a
                        database.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          {/* Add more Carousel.Items with different sets of cards */}
        </Carousel>
      </Row>
    </Container>
  );
};

export default Projects;
