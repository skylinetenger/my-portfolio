import React, { Component } from "react";
import project1 from "../img/projects/project1.jpg";
import project2 from "../img/projects/project2.jpg";
import project3 from "../img/projects/project3.jpg";
import project4 from "../img/projects/project4.jpg";
import project5 from "../img/projects/project5.jpg";

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
            <a href="#!">
              <img src={project1} alt="Project" />
            </a>
            <a href="#!" className="btn-light">
              <i className="fa fa-eye" />
              Project
            </a>
            <a href="#!" className="btn-dark">
              <i className="fa fa-github">Github</i>
            </a>
          </div>
          <div className="item">
            <a href="#!">
              <img src={project2} alt="Project" />
            </a>
            <a href="#!" className="btn-light">
              <i className="fa fa-eye" />
              Project
            </a>
            <a href="#!" className="btn-dark">
              <i className="fa fa-github">Github</i>
            </a>
          </div>
          <div className="item">
            <a href="#!">
              <img src={project3} alt="Project" />
            </a>
            <a href="#!" className="btn-light">
              <i className="fa fa-eye" />
              Project
            </a>
            <a href="#!" className="btn-dark">
              <i className="fa fa-github">Github</i>
            </a>
          </div>
          <div className="item">
            <a href="#!">
              <img src={project4} alt="Project" />
            </a>
            <a href="#!" className="btn-light">
              <i className="fa fa-eye" />
              Project
            </a>
            <a href="#!" className="btn-dark">
              <i className="fa fa-github">Github</i>
            </a>
          </div>
          <div className="item">
            <a href="#!">
              <img src={project5} alt="Project" />
            </a>
            <a href="#!" className="btn-light">
              <i className="fa fa-eye" />
              Project
            </a>
            <a href="#!" className="btn-dark">
              <i className="fa fa-github">Github</i>
            </a>
          </div>
        </div>
      </main>
    );
  }
}

export default Work;
