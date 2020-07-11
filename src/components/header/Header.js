import React, { Component } from "react";
import Navbar from "./Navbar";
import Sidebar from "react-sidebar";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { getUser } from "../../AuthUser";
// import "../../scss/header.scss";

export default function Header() {
  // constructor() {
  //   super();
  //   this.state = {
  //     data: "",
  //     sidebarOpen: false,
  //   };
  //   this.clickHandler = this.clickHandler.bind(this);
  //   this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  // }
  const [data, setData] = React.useState();
  const [open, setOpen] = React.useState(false);

  // onSetSidebarOpen(open) {
  //   this.setState({ sidebarOpen: open });
  // }

  const history = useHistory();
  function clickHandler() {
    window.location.reload(false);
    history.push("/products/" + data);
  }

  return (
    <React.Fragment>
      {open ? (
        <Sidebar
          sidebar={
            <ul>
              <label style={menuConStyle}>Menu</label>
              <li style={mobileLiStyle} className="mobileLiCss">
                <Link to="/products/a">Product</Link>
              </li>
              <li style={mobileLiStyle} className="mobileLiCss">
                <Link to="/category">Shop By Category</Link>
              </li>
              <li style={mobileLiStyle} className="mobileLiCss">
                <Link to="/brand">Shop By Brand</Link>
              </li>
              <li style={mobileLiStyle} className="mobileLiCss">
                <Link to="/mycart">My Cart</Link>
              </li>
              <li style={mobileLiStyle} className="mobileLiCss">
                <Link to="/logout">
                  <i className="fa fa-unlock-alt"></i> Logout
                </Link>
              </li>
            </ul>
          }
          open={open}
          onSetOpen={setOpen}
          styles={{ sidebar: { background: "white", zIndex: 200 } }}
        ></Sidebar>
      ) : (
        ""
      )}
      <div>
        <div id="header">
          <div className="container">
            <div className="pull-left">
              <div className="text-lowercase">
                <Link to="/" className="text-lowercase">
                  <span style={{ fontSize: 14 }}>techfinder</span>
                </Link>
              </div>

              {/* <!-- Search --> */}
              <div
                className="header-search headerTextfield"
                style={{ float: "right" }}
              >
                <form>
                  <input
                    className="input search-input"
                    type="text"
                    placeholder="Enter your keyword"
                    onChange={(e) => {
                      setData(e.target.value);
                    }}
                  />
                  <button className="search-btn" onClick={() => clickHandler()}>
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
                  <div
                    className="dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="true"
                  >
                    <div className="header-btns-icon">
                      <i className="fa fa-user-o"></i>
                    </div>
                    <strong className="text-capitalize">
                      My Account <i className="fa fa-caret-down"></i>
                    </strong>
                  </div>
                  {!getUser().isAuth ? (
                    <div>
                      <Link to="/login" className="text-uppercase">
                        Login /
                      </Link>{" "}
                      <Link to="/register" className="text-uppercase">
                        Join
                      </Link>
                    </div>
                  ) : (
                    <Link to="/profile" className="text-uppercase">
                      Account
                    </Link>
                  )}
                  <ul className="custom-menu">
                    <li>
                      <Link to="/profile">
                        <i className="fa fa-user-o"></i> My Account
                      </Link>
                    </li>
                    <li>
                      <Link to="/mycart">
                        <i className="fa fa-exchange"></i> My Cart
                      </Link>
                    </li>
                    {getUser().isAuth ? (
                      <li>
                        <Link to="/logout">
                          <i className="fa fa-unlock-alt"></i> Logout
                        </Link>
                      </li>
                    ) : (
                      <React.Fragment>
                        <li>
                          <Link to="/login">
                            <i className="fa fa-user-plus"></i> Login
                          </Link>
                        </li>
                        <li>
                          <Link to="/register">
                            <i className="fa fa-user-plus"></i> Create An
                            Account
                          </Link>
                        </li>
                      </React.Fragment>
                    )}
                  </ul>
                </li>
                {/* <!-- /Account --> */}

                {/* <!-- Cart --> */}
                <li className="header-cart dropdown default-dropdown">
                  <div
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="true"
                  >
                    <div className="header-btns-icon">
                      <Link to="/mycart">
                        <i className="fa fa-shopping-cart"></i>
                        {/* <span className="qty">3</span> */}
                      </Link>
                    </div>
                    <div className="pull-left">
                      <Link to="/mycart">
                        <strong className="text-capitalize">My Cart:</strong>
                      </Link>
                    </div>
                  </div>
                </li>
                {/* <!-- /Cart --> */}

                {/* <!-- Mobile nav toggle--> */}
                <li className="nav-toggle">
                  <button
                    className="nav-toggle-btn main-btn icon-btn"
                    onClick={() => setOpen(true)}
                  >
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

const menuConStyle = {
  paddingLeft: "100px",
  paddingRight: "100px",
  paddingTop: "10px",
  paddingBottom: "10px",
  fontSize: "18px",
  width: "100%",
  backgroundColor: "#f8694a",
  color: "white",
};

const mobileLiStyle = {
  fontSize: "18px",
  padding: "10px",
  borderBottom: "1px grey solid",
};