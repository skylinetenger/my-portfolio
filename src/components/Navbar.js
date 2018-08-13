import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    isShow: false
  };

  toggleMenu = () => {
    this.setState({
      isShow: !this.state.isShow
    });
  };

  render() {
    return (
      <header>
        <div
          className={this.state.isShow ? "menu-btn close" : "menu-btn"}
          onClick={this.toggleMenu}
        >
          <div className="btn-line" />
          <div className="btn-line" />
          <div className="btn-line" />
        </div>

        <nav className={this.state.isShow ? "menu show" : "menu"}>
          <div
            className={
              this.state.isShow ? "menu-branding show" : "menu-branding"
            }
          >
            <div className="portrait" />
          </div>
          <ul className={this.state.isShow ? "menu-nav show" : "menu-nav"}>
            <li
              className={
                this.state.isShow ? "nav-item show current" : "nav-item"
              }
            >
              <Link to={"/"} onClick={this.toggleMenu} className="nav-link">
                Home
              </Link>
            </li>
            <li className={this.state.isShow ? "nav-item show" : "nav-item"}>
              <Link
                to={"/about"}
                onClick={this.toggleMenu}
                className="nav-link"
              >
                About
              </Link>
            </li>
            <li className={this.state.isShow ? "nav-item show" : "nav-item"}>
              <a href="/work" className="nav-link">
                My Work
              </a>
            </li>
            <li className={this.state.isShow ? "nav-item show" : "nav-item"}>
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
