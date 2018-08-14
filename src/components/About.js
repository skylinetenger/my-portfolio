import React, { Component } from "react";
import portrait from "../img/portrait.jpg";

class About extends Component {
  render() {
    return (
      <main id="about">
        <h1 className="lg-heading">
          About <span className="text-secondary">Me</span>
        </h1>
        <h2>Let me tell you few things...</h2>
        <div className="about-info">
          <img src={portrait} alt="John Doe" className="bio-image" />

          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic et
              rerum similique quibusdam non quia ut quod quasi, soluta inventore
              culpa asperiores excepturi numquam, accusamus cum dolorum
              voluptatibus sunt velit.
            </p>
          </div>

          <div className="job job-1">
            <h3>123 Webshop</h3>
            <h6>Front-End Developer</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              pariatur molestiae vitae, quae exercitationem cupiditate odio nam
              reiciendis ipsam eum!
            </p>
          </div>
          <div className="job job-2">
            <h3>Designers ABC</h3>
            <h6>Full Stack Developer</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              pariatur molestiae vitae, quae exercitationem cupiditate odio nam
              reiciendis ipsam eum!
            </p>
          </div>
          <div className="job job-3">
            <h3>123 Webshop</h3>
            <h6>Graphic Designer</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              pariatur molestiae vitae, quae exercitationem cupiditate odio nam
              reiciendis ipsam eum!
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default About;
