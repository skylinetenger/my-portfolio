import React, { Component } from "react";
import portrait from "../img/portrait.jpg";

class About extends Component {
  render() {
    return (
      <main id="about">
        <h1 className="lg-heading">
          About <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">Let me tell you few things...</h2>
        <div className="about-info">
          <img src={portrait} alt="John Doe" className="bio-image" />

          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <p>
              This is Munkhtenger's portfolio. I'm holding a Web Developer &
              Software Engineer positions about 3 years now.
            </p>
          </div>

          <div className="job job-1">
            <h3>GTNMGL LLC, UB</h3>
            <h6>Web Developer</h6>
            <div>
              As a software engineer at FEG I have developed and maintained a
              Windows Desktop application by using C# and Dev express components
              about a year. Later I joined to work on another project which was
              web application used C# and ASP.NET(Razor) MVC pattern, while I
              also gained experience in Mysql and SQL Server database.
              <ul>
                <li>C# and Dev express.</li>
                <li>C# on ASP.NET MVC.</li>
                <li>MySQL and SQL SERVER.</li>
                <li>HTML, CSS, Javascript (JQuery).</li>
              </ul>
            </div>
          </div>
          <div className="job job-2">
            <h3>Finance Estimated Group LLC, UB</h3>
            <div className="job-detail">
              <h6 className="left-job">Software Engineer</h6>
              <h6 className="right-job">Aug 2015 to Sep 2017</h6>
            </div>
            <div>
              My duties at MKIT was to design, maintain and develop existing web
              (Spring MVC) app. I was responsible for website updates, fixes &
              bugs, API integration, translate design to front-end code and
              managing data structure on back-end code. My accomplishments
              include creation of responsive design for the layouts and
              implemented bunch of new functionality for the back-end side .
              Would you like to see live app? Please visit the link below.
              https://www.mathrevolution.com/
              <ul>
                <li>
                  Upgrading app into responsive web design and API integrations.
                </li>
                <li>Increasing website speed performance.</li>
                <li>HTML, CSS, Javascript (JQuery).</li>
                <li>Git (Bitbucket).</li>
                <li>Java, Spring MVC.</li>
                <li>API Co-Registration.</li>
              </ul>
            </div>
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
