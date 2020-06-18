import React, { Component } from "react";
import Header from "../header/Header";
import Footer from "../header/Footer";

export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="header">
          <Header></Header>
        </div>

        <div id="content">{this.props.children}</div>

        <div id="footer">
          <Footer></Footer>
        </div>
      </React.Fragment>
    );
  }
}
