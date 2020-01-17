import React, { Component } from "react";
import { Figure } from "react-bootstrap";
import myImage from "../../Images/ahsan.jpg";
import { Container, Col, Row } from "reactstrap";

export default class About extends Component {
  render() {
    return (
      <div style={{ marginTop: "32px" }}>
        <h1>About</h1>
        <Container>
          <Row className="align-items-center">
            <Col sm={12} md={6}>
              <Figure>
                <Figure.Image
                  width={171}
                  height={200}
                  alt="171x180"
                  src={myImage}
                  roundedCircle={true}
                />
                <Figure.Caption style={{ color: "white", fontSize: "2rem" }}>
                  Ahsan Ahmed
                </Figure.Caption>
                <Figure.Caption style={{ color: "white" }}>
                  Mern Stack Developer
                </Figure.Caption>
              </Figure>
            </Col>
            <Col sm={12} md={6} className="align-items-center">
              <p>
                Doing my BSSE From Karachi University UBIT . I am searching for
                a position that will allow me to improve my current skills such
                as programming, communication and teamwork . From this position
                I also seek the opportunity to learn new skills for future use.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
