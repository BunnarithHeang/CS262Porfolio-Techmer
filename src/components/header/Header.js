import React, { Component } from "react";
// import "../../scss/header.scss";
import Navbar from "./Navbar";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header-bg-image"></div>

        <div className="header-bg-text">
          <Navbar />
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
