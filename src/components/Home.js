import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";

class Home extends Component {
  render() {
    return (
      <main id="home">
        <h1 className="lg-heading">
          Munkhtenger <span className="text-secondary">Ganhkuyag</span>
        </h1>
        <h2 className="sm-heading">Web Developer, Programmer & Designer</h2>
        <div className="icons">
          <a href="#!">
            <i className="fa fa-twitter fa-2x" />
          </a>
          <a href="#!">
            <i className="fa fa-facebook fa-2x" />
          </a>
          <a href="#!">
            <i className="fa fa-linkedin fa-2x" />
          </a>
          <a href="#!">
            <i className="fa fa-github fa-2x" />
          </a>
        </div>
      </main>
    );
  }
}

export default Home;
