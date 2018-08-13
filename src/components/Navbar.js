import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <header>
        <div className="menu-btn">
          <div className="menu-btn" />
          <div className="menu-btn" />
          <div className="menu-btn" />
        </div>

        <nav className="menu">
          <div className="menu-branding">
            <div className="portrait" />
          </div>
          <ul className="menu-nav">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/work" className="nav-link">
                Work
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">
                How To Reach Me
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
