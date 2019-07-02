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
              <li>Highly motivated in Programming & Coding</li>
              <li>My Major is a Java and Spring Framework</li>
              <li>Solid experience in MVC, OOP design patterns.</li>
              <li>Enjoy E-sports.</li>
            </p>
          </div>
          <div className="job job-1">
            <h3>GTNMGL LLC, UB, MN</h3>
            <div className="job-detail">
              <h6 className="left-job">Web Developer</h6>
              <h6 className="right-job">Sep 2017 to Jul 2019</h6>
            </div>
            <div>
            My duties at GTNMGL was to design UI, maintaining existing web (Spring MVC) app, which is educational video content management app. 
            I was responsible for maintenance, API integration, translate design to UI, configuring services (CLI). 
            My accomplishments include designed new feature, optimization of page speed & performance, creation of responsive web layouts.
            Later assigned me to project called ‘Rent Car Solution’. 
            I led the team with 3 members. My role was to set up an initial plan, scheduling appropriate work for teammates, assisting with codes etc.
              <br />
              Notable accomplishments:
              <ul>
                <li>Single handedly developed back to front according to plan and requirements within a short amount of time.</li>
                <li>Setting up production server environments and configurations including apache & tomcat etc. </li>
                <li>After completion of the first batch plan, I went on appointment in Korea with a coworker. It was an excellent experience for both my team and me.</li>
                <li>Received ‘Best employee of the year’ award in 2018.</li>
              </ul>
            </div>
          </div>
          <div className="job job-2">
            <h3>FEG LLC, UB, MN</h3>
            <div className="job-detail">
              <h6 className="left-job">Software Engineer</h6>
              <h6 className="right-job">Aug 2015 to Sep 2017</h6>
            </div>
            <div>
            I was in the team that was responsible for creating a new ‘Pharmacy Registration’ app. 
            My responsibilities included team meets, initial planning and managing projects, data structure and designing the feature. 
            Later I joined another project, which is a web based internal communication platform of government agencies. 
            I was responsible for initial research, coding and designing a UI.
              <ul>
                <li>C# and Dev express Component (WinForms).</li>
                <li>ASP.NET, MVC.</li>
                <li>MySQL & Microsoft SQL SERVER.</li>
                <li>HTML, CSS, Javascript (JQuery).</li>
                <li>Git & Bitbucket.</li>
              </ul>
            </div>
          </div>
          <div className="job job-3">
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
        </div>
      </main>
    );
  }
}

export default About;
