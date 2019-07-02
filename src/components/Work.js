import React, { Component } from "react";
import project1 from "../img/projects/math_revo.jpg";
import project2 from "../img/projects/react.jpg";
import project3 from "../img/projects/ember.jpg";
import project4 from "../img/projects/mern.jpg";
import project5 from "../img/projects/rentcar.jpg";
import project6 from "../img/projects/fxfinal.jpg";

class Work extends Component {
  render() {
    return (
      <main id="work">
        <h1 className="lg-heading">
          My <span className="text-secondary">Work</span>
        </h1>
        <h2 className="sm-heading">Check out some of my projects...</h2>
        <div className="project">
          <div className="item">
            <a
              href="http://www.fxfinal.co.kr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={project6} width="100" alt="Project" />
            </a>
            <a
              href="http://www.fxfinal.co.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-light"
            >
              <i className="fa fa-eye" />
              Project
            </a>
            <a href="#!" className="btn-dark">
              Not Available
            </a>
          </div>
          <div className="item">
            <a
              href="http://tc.tagoplus.co.kr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={project5} width="100" alt="Project" />
            </a>
            <a
              href="http://tc.tagoplus.co.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-light"
            >
              <i className="fa fa-eye" />
              Project
            </a>
            <a href="#!" className="btn-dark">
              Not Available
            </a>
          </div>
          <div className="item">
            <a
              href="https://www.mathrevolution.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={project1} alt="Project" />
            </a>
            <a
              href="https://www.mathrevolution.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-light"
            >
              <i className="fa fa-eye" />
              Project
            </a>
            <a href="#!" className="btn-dark">
              Not Available
            </a>
          </div>
          <div className="item">
            <a
              href="http://test.react-front-to-back.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={project2} alt="Project" />
            </a>
            <a
              href="http://test.react-front-to-back.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-light"
            >
              <i className="fa fa-eye" />
              Project
            </a>
            <a
              href="https://bitbucket.org/tenger11/testoffrontend"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark"
            >
              <i className="fa fa-bitbucket"> Bitbucket</i>
            </a>
          </div>
          <div className="item">
            <a
              href="http://torpid-table.surge.sh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={project3} alt="Project" />
            </a>
            <a
              href="http://torpid-table.surge.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-light"
            >
              <i className="fa fa-eye" />
              Project
            </a>
            <a
              href="https://bitbucket.org/tenger11/ember"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark"
            >
              <i className="fa fa-bitbucket"> Bitbucket</i>
            </a>
          </div>
          <div className="item">
            <a
              href="https://sheltered-spire-92924.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={project4} alt="Project" />
            </a>
            <a
              href="https://sheltered-spire-92924.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-light"
            >
              <i className="fa fa-eye" />
              Project
            </a>
            <a
              href="https://dashboard.heroku.com/apps/sheltered-spire-92924"
              className="btn-dark"
            >
              <i className="fa fa-github">Github</i>
            </a>
          </div>
          
        </div>
      </main>
    );
  }
}

export default Work;
