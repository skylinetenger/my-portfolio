import React, { Component } from "react";
import portrait from "../img/portrait_md.jpg";

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
              This is Munkhtenger Gankhuyag's portfolio and I'm currently
              working as a Web Developer. Here is list of About Me:
              <li>Programming & Coding</li>
              <li>My Favorite is Javascript (React) since 2017</li>
              <li>Love to build new UI/UX</li>
              <li>Interest in Gaming</li>
            </p>
          </div>
          <div className="job job-1">
            <h3>Bangalore University, IN</h3>
            <div className="job-detail">
              <h6 className="left-job">
                Bachelor of Computer Application, Bangalore, Karnataka
              </h6>
              <h6 className="right-job">Jul 2012 to May 2015</h6>
            </div>
            <h3>Arena Multimedia & Animation, IN</h3>
            <div className="job-detail">
              <h6 className="left-job">
                Web Design Full Course, Bangalore, Karnataka
              </h6>
              <h6 className="right-job">Feb 2015</h6>
            </div>
            <h3>RJS Technologies, IN</h3>
            <div className="job-detail">
              <h6 className="left-job">
                Java & Android Academic Course, Bangalore, Karnataka
              </h6>
              <h6 className="right-job">Dec 2014</h6>
            </div>
          </div>
          <div className="job job-2">
            <h3>FEG LLC, UB, MN</h3>
            <div className="job-detail">
              <h6 className="left-job">Software Engineer</h6>
              <h6 className="right-job">Aug 2015 to Sep 2017</h6>
            </div>
            <div>
              I was in the team that was responsible for build and maintain a
              Windows Winforms application, which is a registration of
              pharmacies medical management software. My responsibilities
              included initial planning and managing project, data structure and
              designing the feature. <br />
              Later I joined another project, which is web based internal
              communication platform of government agencies. I was responsible
              for initial research, coding and designing a UI/UX.
              <ul>
                <li>C# and Dev express Component (WinForms).</li>
                <li>ASP.NET, MVC.</li>
                <li>MySQL & Microsoft SQL SERVER.</li>
                <li>HTML, CSS, Javascript (JQuery).</li>
                <li>Git, Bitbucket.</li>
              </ul>
            </div>
          </div>
          <div className="job job-3">
            <h3>GTNMGL LLC, UB, MN</h3>
            <div className="job-detail">
              <h6 className="left-job">Web Developer</h6>
              <h6 className="right-job">Sep 2017 to Aug 2018</h6>
            </div>
            <div>
              My duties at GTNMGL was to design UI/UX, maintain existing web
              (Spring MVC) app, which is educational video content management
              application for GMAT MATH EXAM. I was responsible for website
              updates, fixes & bugs, API integration, translate design to UI,
              some AWS DevOps, commandline interface tools and configure Apache
              & Tomcat servers. My accomplishments include design new feature,
              optimized website speed performance, creation of responsive
              website layouts and upgraded AWS (EC2) Centos OS version,
              configuration of Apache Tomcat server and api co-registration with
              similar website. Visit the link below to see live app.
              <br />
              <a href="https://www.mathrevolution.com/">Mathrevolution</a>
              <ul>
                <li>Java, Spring MVC, MySql.</li>
                <li>HTML, CSS, Javascript (JQuery), Google Analythics.</li>
                <li>Git, Bitbucket.</li>
                <li>AWS, CI, SSH, Apache & Tomcat.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default About;
