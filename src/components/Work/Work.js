import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardText } from "reactstrap";
import { Row, Col, Container } from "reactstrap";
import bsImage from "../../Images/BookStore.jpg";
import bbImage from "../../Images/BurgerPizzaBuilder.png";
import shImage from "../../Images/SoftwareHouse.jpg";
import dlImage from "../../Images/ToDoList.jpg";
import classes from "./Work.module.css";
import { Spring } from "react-spring/renderprops";

export default class Work extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <div className={classes.work}>
              <h1>Work</h1>
              <Container>
                <Row style={{ paddingTop: "32px" }}>
                  <Col sm={12} md={6}>
                    <Card
                      style={{ paddingTop: "32px", backgroundColor: "inherit" }}
                      onClick={() =>
                        window.open(
                          "https://bookstore321.herokuapp.com/",
                          "_blank"
                        )
                      }
                    >
                      <CardTitle>Book Store</CardTitle>
                      <CardImg width="100%" src={bsImage} height="350vh" />
                      <CardText>
                        A Mern stack E-commerece Site with authentication and
                        cart system
                      </CardText>
                    </Card>
                  </Col>
                  <Col sm={12} md={6}>
                    <Card
                      style={{ paddingTop: "32px", backgroundColor: "inherit" }}
                      onClick={() =>
                        window.open(
                          "https://upbeat-lichterman-19cc05.netlify.com/",
                          "_blank"
                        )
                      }
                    >
                      <CardTitle>Burger Builder</CardTitle>
                      <CardImg width="100%" src={bbImage} height="350vh" />
                      <CardText>
                        A Reactjs Front End Burger and Pizza Builder App
                      </CardText>
                    </Card>
                  </Col>
                </Row>
                <Row style={{ paddingTop: "32px" }}>
                  <Col sm={12} md={6}>
                    <Card
                      style={{ paddingTop: "32px", backgroundColor: "inherit" }}
                      onClick={() =>
                        window.open(
                          "https://priceless-jennings-3ab9a8.netlify.com",
                          "_blank"
                        )
                      }
                    >
                      <CardTitle>Software House</CardTitle>
                      <CardImg width="100%" src={shImage} height="350vh" />
                      <CardText>
                        A Reactjs Front End Software House App
                      </CardText>
                    </Card>
                  </Col>
                  <Col sm={12} md={6}>
                    <Card
                      style={{ paddingTop: "32px", backgroundColor: "inherit" }}
                      onClick={() =>
                        window.open(
                          "https://laughing-hypatia-7dea5c.netlify.com/",
                          "_blank"
                        )
                      }
                    >
                      <CardTitle>To Do List</CardTitle>
                      <CardImg width="100%" src={dlImage} height="350vh" />
                      <CardText>
                        A Reactjs To do list Built with react hooks
                      </CardText>
                    </Card>
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
