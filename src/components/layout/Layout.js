import React, { Component } from "react";
import Header from "../header/Header";
import Footer from "../header/Footer";
import "../../scss/header.scss";
import "../../css/style.css";
import "../../css/bootstrap.min.css";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="header">
          <Header />
        </div>

        <div id="content">{this.props.children}</div>
        <div id="footer">
          <Footer></Footer>
        </div>
      </React.Fragment>
    );
  }
}

export default Layout ;
