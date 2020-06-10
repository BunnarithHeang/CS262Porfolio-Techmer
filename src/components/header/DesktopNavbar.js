import React, { Component } from "react";
import "../../scss/desktop-navbar.scss";
import { Image } from "react-bootstrap";
import img from "../../images/header_bg.jpg";

class DesktopNavbar extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/a076d05399.js";
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    return (
      <React.Fragment>
        <nav>
          <ul className="header-nav-link">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Team</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">
                Usercart <i className="fas fa-angle-down"></i>
              </a>
            </li>
            <li>
              <a href="">
                <Image src={{ img }} roundedCircle />
                <i className="fas fa-angle-down"></i>
              </a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default DesktopNavbar;
