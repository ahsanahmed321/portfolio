import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Container } from "reactstrap";
import classes from "./Contact.module.css";
import {
  faWhatsapp,
  faGoogle,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";

export default class Contact extends Component {
  render() {
    return (
      <div style={{ marginTop: "32px" }}>
        <h1>Contact</h1>
        <Container>
          <Row className={classes.contact}>
            <FontAwesomeIcon
              style={{ color: "white", fontSize: "2rem" }}
              icon={faGoogle}
            />
          </Row>
          <p>ahsan.ahmedffs2@gmail.com</p>
          <Row className={classes.contact}>
            <FontAwesomeIcon
              style={{ color: "white", fontSize: "2rem" }}
              icon={faGithub}
            />
          </Row>
          <p>ahsanahmed321</p>
          <Row className={classes.contact}>
            <FontAwesomeIcon
              style={{ color: "white", fontSize: "2rem" }}
              icon={faMobile}
            />
          </Row>
          <p>0312-0012556</p>
        </Container>
      </div>
    );
  }
}
