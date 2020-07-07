import React, { Component } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import "../../scss/header.scss";

function Header() {
  const [data, setData] = React.useState("");
  const history = useHistory();
  function clickHandler() {
    // console.log(data);
    window.location.reload(false);
    history.push("/products/" + data.toSearch);
  }

  return (
    <React.Fragment>
      <div>
        {/* <!-- top Header --> */}

        {/* <!-- header --> */}
        <div id="header">
          <div className="container">
            <div className="pull-left">
              {/* <!-- Logo --> */}
              <div className="header-logo">
                <Link to='/'>techfinder</Link>
              </div>
              {/* <!-- /Logo --> */}

              {/* <!-- Search --> */}
              <div className="header-search">
                <form>
                  <input
                    className="input search-input"
                    type="text"
                    placeholder="Enter your keyword"
                    onChange={(e) => setData({ toSearch: e.target.value })}
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
                  <a href="#" className="text-uppercase">
                    Login /
                  </a>
                  {" "}{" "}
                  <a href="#" className="text-uppercase">
                    Join
                  </a>
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
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="true"
                  >
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
                  <button className="nav-toggle-btn main-btn icon-btn">
                    <i className="fa fa-bars"></i>
                  </button>
                </li>
                {/* <!-- / Mobile nav toggle --> */}
              </ul>
            </div>
          </div>
          {/* <!-- header --> */}
          <Navbar />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
