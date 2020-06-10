import React, { Component } from "react";
import "../../scss/navbar.scss";
import ExampleComponent from "react-rounded-image";
import MyPhoto from "../../images/header_bg.jpg";
import CartIcon from "./CartIcon";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind();
    this.blah = this.blah.bind();
  }

  handleClick() {
    // var div = document.createElement("div");
    // div.setAttribute(
    //   "style",
    //   "position: fixed; width: 100%; height: 100%; z-index: 100; background-color: red;"
    // );
    document.getElementById("navbar-menu").style.zIndex = 1000;
    // div.className = "blahblah";
    // document.getElementsByClassName("wrapper")[0].style.zIndex = 100;
    document
      .getElementsByClassName("wrapper")[0]
      .setAttribute(
        "style",
        "position: absolute; width: 100%; height: 100%; z-index: 100;"
      );
  }
  blah() {}

  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-default navbar-mobile bootsnav on">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-menu"
              onClick={this.handleClick}
            >
              <i class="fa fa-bars"></i>
            </button>
          </div>
          <div class="collapse navbar-collapse" id="navbar-menu">
            <ul
              class="nav navbar-nav"
              data-in="fadeInDown"
              data-out="fadeOutUp"
            >
              <li class="active">
                <a href="#" data-hover="Home">
                  Home <span></span>
                </a>
              </li>

              <li>
                <a href="#" data-hover="About">
                  About <span></span>
                </a>
              </li>

              <li class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  data-hover="Shortcodes"
                >
                  Shortcodes <span></span>
                </a>

                <ul class="dropdown-menu animated">
                  <li>
                    <a href="#">Custom Menu</a>
                  </li>
                  <li>
                    <a href="#">Custom Menu</a>
                  </li>

                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                      Sub Menu
                    </a>

                    <ul class="dropdown-menu animated">
                      <li>
                        <a href="#">Custom Menu</a>
                      </li>
                      <li>
                        <a href="#">Custom Menu</a>
                      </li>

                      <li class="dropdown">
                        <a
                          href="#"
                          class="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Sub Menu
                        </a>

                        <ul class="dropdown-menu multi-dropdown animated">
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="#">Custom Menu</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#">Custom Menu</a>
                  </li>
                  <li>
                    <a href="#">Custom Menu</a>
                  </li>
                  <li>
                    <a href="#">Custom Menu</a>
                  </li>
                  <li>
                    <a href="#">Custom Menu</a>
                  </li>
                </ul>
              </li>

              <li class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  data-hover="Pages"
                >
                  Pages <span></span>
                </a>

                <ul class="dropdown-menu animated">
                  <li>
                    <a href="#">Custom Menu</a>
                  </li>
                  <li>
                    <a href="#">Custom Menu</a>
                  </li>

                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                      Sub Menu
                    </a>

                    <ul class="dropdown-menu animated">
                      <li>
                        <a href="#">Custom Menu</a>
                      </li>
                      <li>
                        <a href="#">Custom Menu</a>
                      </li>

                      <li class="dropdown">
                        <a
                          href="#"
                          class="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Sub Menu
                        </a>
                        <ul class="dropdown-menu multi-dropdown animated">
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="#">Custom Menu</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#">Custom Menu</a>
                  </li>
                  <li>
                    <a href="#">Custom Menu</a>
                  </li>
                  <li>
                    <a href="#">Custom Menu</a>
                  </li>
                  <li>
                    <a href="#">Custom Menu</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#" data-hover="Portfolio">
                  Portfolio <span></span>
                </a>
              </li>
              <li class="dropdown megamenu-fw">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  Megamenu <span></span>
                </a>
                <ul class="dropdown-menu megamenu-content animated" role="menu">
                  <li>
                    <div class="row">
                      <div class="col-menu col-md-3">
                        <h6 class="title">Title Menu One</h6>
                        <div class="content">
                          <ul class="menu-col">
                            <li>
                              <a href="#">Custom Menu</a>
                            </li>
                            <li>
                              <a href="#">Custom Menu</a>
                            </li>
                            <li>
                              <a href="#">Custom Menu</a>
                            </li>
                            <li>
                              <a href="#">Custom Menu</a>
                            </li>
                            <li>
                              <a href="#">Custom Menu</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* <!-- end col-3 --> */}
                      <div class="col-menu col-md-3">
                        <h6 class="title">Title Menu Two</h6>
                        <div class="content">
                          <ul class="menu-col">
                            <li>
                              <a href="#">Custom Menu</a>
                            </li>
                            <li>
                              <a href="#">Custom Menu</a>
                            </li>
                            <li>
                              <a href="#">Custom Menu</a>
                            </li>
                            <li>
                              <a href="#">Custom Menu</a>
                            </li>
                            <li>
                              <a href="#">Custom Menu</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* <!-- end col-3 --> */}
                      <div class="col-menu col-md-3">
                        <h6 class="title">Title Menu Three</h6>
                        <div class="content">
                          <ul class="menu-col">
                            <li>
                              <a href="#">Custom Menu</a>
                            </li>
                            <li>
                              <a href="#">Custom Menu</a>
                            </li>
                            <li>
                              <a href="#">Custom Menu</a>
                            </li>
                            <li>
                              <a href="#">Custom Menu</a>
                            </li>
                            <li>
                              <a href="#">Custom Menu</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-menu col-md-3">
                        <h6 class="title">Title Menu Four</h6>
                        <div class="content">
                          <ul class="menu-col">
                            <li>
                              <a href="#">Custom Menu</a>
                            </li>
                            <li>
                              <a href="#">Custom Menu</a>
                            </li>
                            <li>
                              <a href="#">Custom Menu</a>
                            </li>
                            <li>
                              <a href="#">Custom Menu</a>
                            </li>
                            <li>
                              <a href="#">Custom Menu</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* <!-- end col-3 --> */}
                    </div>
                    {/* <!-- end row --> */}
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" data-hover="Contact">
                  Contact <span></span>
                </a>
              </li>
              <li>
                <a href="#" data-hover="Contact" id="header-cart-icon">
                  <CartIcon />
                </a>
              </li>
              <li class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  data-hover="Shortcodes"
                >
                  <ExampleComponent
                    image={MyPhoto}
                    imageWidth="20"
                    imageHeight="20"
                    roundedSize="2"
                  />{" "}
                </a>

                <ul class="dropdown-menu animated" id="header-profile-dropdown">
                  <li>
                    <a href="#">Logout</a>
                  </li>
                  <li>
                    <a href="#">Custom Menu</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
