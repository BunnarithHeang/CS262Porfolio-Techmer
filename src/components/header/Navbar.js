import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      // <!-- NAVIGATION -->
      <div id="navigation">
        {/* <!-- container --> */}
        <div className="container">
          <div id="responsive-nav">
            {/* <!-- category nav --> */}
            <div className="category-nav show-on-click">
              <span className="category-header" style={{ textAlign: "center" }}>
                <Link to="/" style={{ color: "white" }}>
                  techfinder
                </Link>
              </span>
            </div>
            {/* <!-- /category nav --> */}

            {/* <!-- menu nav --> */}
            <div className="menu-nav">
              <span className="menu-header">
                Menu <i className="fa fa-bars"></i>
              </span>
              <ul className="menu-list">
                <li>
                  <Link to="/products/a">Product</Link>
                </li>
                <li>
                  <Link to="/category">Shop By Category</Link>
                </li>
                <li>
                  <Link to="/brand">Shop By Brand</Link>
                </li>

                <li className="dropdown default-dropdown">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="true"
                  >
                    Pages <i className="fa fa-caret-down"></i>
                  </a>
                  <ul className="custom-menu">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <a href="/aboutus">About Us</a>
                    </li>
                    <li>
                      <Link to="/products/a">Products</Link>
                    </li>
                    <li>
                      <Link to="/mycart">My Cart</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* <!-- menu nav --> */}
          </div>
        </div>
        {/* <!-- /container --> */}
        {/* <!-- /NAVIGATION --> */}
      </div>
    );
  }
}
