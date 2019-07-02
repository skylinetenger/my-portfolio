import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";

class Home extends Component {
  render() {
    return (
      <main id="home">
        <h1 className="lg-heading">
          Munkhtenger <span className="text-secondary">Gankhuyag</span>
        </h1>
        <h2 className="sm-heading">
          Web Developer, Back-End & Front-End Developer
        </h2>
        <div className="icons">
          <a
            href="https://twitter.com/skyline_mn11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter fa-2x" />
          </a>
          <a
            href="https://www.facebook.com/sKyLiNe.mN"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook fa-2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/gankhuyag-munkhtenger-571725b8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin fa-2x" />
          </a>
          <a
            href="https://github.com/skylinetenger"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github fa-2x" />
          </a>
          <a
            href="https://bitbucket.org/tenger11/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-bitbucket fa-2x" />
          </a>
        </div>
      </main>
    );
  }
}

export default Home;
