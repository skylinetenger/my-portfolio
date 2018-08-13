import React, { Component } from "react";

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
            <li className={this.state.isShow ? "nav-item show" : "nav-item"}>
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className={this.state.isShow ? "nav-item show" : "nav-item"}>
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
            <li className={this.state.isShow ? "nav-item show" : "nav-item"}>
              <a href="/work" className="nav-link">
                Work
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
