import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <main id="contact">
        <h1 className="lg-heading">
          Contact <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">This is how you can reach me...</h2>
        <div className="boxes">
          <div>
            <span className="text-secondary">Email:</span>
            Skyline.mn12@gmail.com
          </div>
          <div>
            <span className="text-secondary">Phone:</span> (+976)86602215
          </div>
          <div>
            <span className="text-secondary">Address:</span> BZ District 14th
            Khoroo 81th Apt, UB, MN
          </div>
        </div>
      </main>
    );
  }
}

export default Contact;
