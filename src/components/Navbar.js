import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
    const menuBtn = "menu-btn".concat(this.state.isShow ? " close" : "");
    const menu = "menu".concat(this.state.isShow ? " show" : "");
    const menuBrand = "menu-branding".concat(this.state.isShow ? " show" : "");
    const menuNav = "menu-nav".concat(this.state.isShow ? " show" : "");
    const navItem = "nav-item".concat(this.state.isShow ? " show" : "");
    const menus = [
      { route: "/", name: "Home" },
      { route: "/about", name: "About" },
      { route: "/work", name: "My Work" },
      { route: "/contact", name: "How To Reach Me" }
    ];
    return (
      <header>
        <div className={menuBtn} onClick={this.toggleMenu}>
          <div className="btn-line" />
          <div className="btn-line" />
          <div className="btn-line" />
        </div>

        <nav className={menu}>
          <div className={menuBrand}>
            <div className="portrait" />
          </div>
          <ul className={menuNav}>
            {menus.map((m, i) => (
              <li
                className={navItem.concat(
                  this.context.router.route.location.pathname === m.route
                    ? " current"
                    : ""
                )}
                key={i}
              >
                <Link
                  to={m.route}
                  onClick={this.toggleMenu}
                  className="nav-link"
                >
                  {m.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
}

Navbar.contextTypes = {
  router: PropTypes.object
};

export default Navbar;
