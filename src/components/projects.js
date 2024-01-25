import React from "react";
import { Carousel, Card, Row, Col, Container } from "react-bootstrap";

const Projects = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://placekitten.com/800/400"
                  alt="Card image cap"
                />
                <Card.Body>
                  <Card.Title>Card 1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://placekitten.com/800/401"
                  alt="Card image cap"
                />
                <Card.Body>
                  <Card.Title>Card 2</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://placekitten.com/800/402"
                  alt="Card image cap"
                />
                <Card.Body>
                  <Card.Title>Card 3</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
      {/* Add more Carousel.Items with different sets of cards */}
    </Carousel>
  );
};

export default Projects;
