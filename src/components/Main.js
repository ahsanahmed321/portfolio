import React, { Component } from "react";
import About from "./About/About";
import Work from "./Work/Work";
import Contact from "./Contact/Contact";

class Main extends Component {
  render() {
    return (
      <div>
        <About />
        <Work />
        <Contact />
      </div>
    );
  }
}

export default Main;
