import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Container } from "reactstrap";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { Spring } from "react-spring/renderprops";

export default class Contact extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 2000, duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <div style={{ paddingBottom: "64px" }}>
              <h1>Contact</h1>
              <Container>
                <Row style={{ padding: "64px" }}>
                  <Col sm={12} md={4} style={{ padding: "32px" }}>
                    <FontAwesomeIcon
                      style={{ color: "white", fontSize: "2rem" }}
                      icon={faGoogle}
                    />
                    <p>ahsan.ahmedffs2@gmail.com</p>
                  </Col>
                  <Col sm={12} md={4} style={{ padding: "32px" }}>
                    <FontAwesomeIcon
                      style={{ color: "white", fontSize: "2rem" }}
                      icon={faGithub}
                    />
                    <p>ahsanahmed321</p>
                  </Col>
                  <Col sm={12} md={4} style={{ padding: "32px" }}>
                    <FontAwesomeIcon
                      style={{ color: "white", fontSize: "2rem" }}
                      icon={faMobile}
                    />
                    <p>0312-0012556</p>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}
