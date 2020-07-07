import React, { Component } from "react";
import Navbar from "./Navbar";
import Sidebar from "react-sidebar";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { render } from "@testing-library/react";
// import "../../scss/header.scss";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
      sidebarOpen: false,
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  clickHandler() {
    const history = useHistory();
    window.location.reload(false);
    history.push("/products/" + this.state.data.toSearch);
  }

  render() {
    return (
      <React.Fragment>
        {this.state.sidebarOpen 
          ? <Sidebar
            sidebar={
              <ul style={{ marginLeft: '20px', marginRight: '20px' }}>
                <li style={menuConStyle}>
                  <label>Menu</label>
                </li>
                <li>
                  <Link to="/products">Product</Link>
                </li>
                <li>
                  <Link to="/category">Shop By Category</Link>
                </li>
                <li>
                  <Link to="/brand">Shop By Brand</Link>
                </li>
                <li>
                  <Link to="/logout">
                    <i className="fa fa-unlock-alt"></i> Logout
                  </Link>
                </li>
              </ul>
            }
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{ sidebar: { background: "white" } }}
          >
          </Sidebar>
        : ""}
        <div>
          <div id="header">
            <div className="container">
              <div className="pull-left">
                <div className="text-lowercase">
                  <Link to="/" className="text-lowercase">techfinder</Link>
                </div>

                {/* <!-- Search --> */}
                <div className="header-search headerTextfield" style={{ float: "right" }}>
                  <form>
                    <input
                      className="input search-input"
                      type="text"
                      placeholder="Enter your keyword"
                      onChange={(e) => {
                        this.setState({ data: e.target.value });
                      }}
                    />
                    <button className="search-btn" onClick={() => this.clickHandler()}> 
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div>
                {/* <!-- /Search --> */}
              </div>

              <div className="pull-right">
                <ul className="header-btns">
                  {/* <!-- Account --> */}
                  <li className="header-account dropdown default-dropdown">
                    <div className="dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="true">
                      <div className="header-btns-icon">
                        <i className="fa fa-user-o"></i>
                      </div>
                      <strong className="text-capitalize">
                        My Account <i className="fa fa-caret-down"></i>
                      </strong>
                    </div>
                    <a href="#" className="text-uppercase">Login /</a>
                    {" "}
                    <a href="#" className="text-uppercase">Join</a>
                    <ul className="custom-menu">
                      <li>
                        <Link to="/profile">
                          <i className="fa fa-user-o"></i> My Account
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-heart-o"></i> My Wishlist
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-exchange"></i> Compare
                        </Link>
                      </li>
                      <li>
                        <Link to="/checkout">
                          <i className="fa fa-check"></i> Checkout
                        </Link>
                      </li>
                      <li>
                        <Link to="/logout">
                          <i className="fa fa-unlock-alt"></i> Logout
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-user-plus"></i> Create An Account
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- /Account --> */}

                  {/* <!-- Cart --> */}
                  <li className="header-cart dropdown default-dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                      <div className="header-btns-icon">
                        <i className="fa fa-shopping-cart"></i>
                        <span className="qty">3</span>
                      </div>
                      <strong className="text-capitalize">My Cart:</strong>
                    </a>
                  </li>
                  {/* <!-- /Cart --> */}

                  {/* <!-- Mobile nav toggle--> */}
                  <li className="nav-toggle">
                    <button className="nav-toggle-btn main-btn icon-btn" 
                      onClick={() => {
                        console.log('abc');
                        this.onSetSidebarOpen(true);
                      }}>
                      <i className="fa fa-bars"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <Navbar />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const menuConStyle = {
  'backgroundColor': '#f8694a',
  'color': 'white',
  'textAlign': 'center',
}