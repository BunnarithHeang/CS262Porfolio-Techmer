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
          <div class="container">
            <div class="pull-left">
              {/* <!-- Logo --> */}
              <div class="header-logo">
                <a class="logo" href="#">
                  {/* <img src="./img/logo.png" alt="" /> */}
                  techfinder
                </a>
              </div>
              {/* <!-- /Logo --> */}

              {/* <!-- Search --> */}
              <div class="header-search">
                <form>
                  <input
                    class="input search-input"
                    type="text"
                    placeholder="Enter your keyword"
                    onChange={(e) => setData({ toSearch: e.target.value })}
                  />
                  <button class="search-btn" onClick={() => clickHandler()}>
                    <i class="fa fa-search"></i>
                  </button>
                </form>
              </div>
              {/* <!-- /Search --> */}
            </div>

            <div class="pull-right">
              <ul class="header-btns">
                {/* <!-- Account --> */}
                <li class="header-account dropdown default-dropdown">
                  <div
                    class="dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="true"
                  >
                    <div class="header-btns-icon">
                      <i class="fa fa-user-o"></i>
                    </div>
                    <strong class="text-uppercase">
                      My Account <i class="fa fa-caret-down"></i>
                    </strong>
                  </div>
                  <a href="#" class="text-uppercase">
                    Login
                  </a>{" "}
                  /{" "}
                  <a href="#" class="text-uppercase">
                    Join
                  </a>
                  <ul class="custom-menu">
                    <li>
                      <Link to="/profile">
                        <i class="fa fa-user-o"></i> My Account
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i class="fa fa-heart-o"></i> My Wishlist
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i class="fa fa-exchange"></i> Compare
                      </Link>
                    </li>
                    <li>
                      <Link to="/checkout">
                        <i class="fa fa-check"></i> Checkout
                      </Link>
                    </li>
                    <li>
                      <Link to="/logout">
                        <i class="fa fa-unlock-alt"></i> Logout
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i class="fa fa-user-plus"></i> Create An Account
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* <!-- /Account --> */}

                {/* <!-- Cart --> */}
                <li class="header-cart dropdown default-dropdown">
                  <a
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="true"
                  >
                    <div class="header-btns-icon">
                      <i class="fa fa-shopping-cart"></i>
                      <span class="qty">3</span>
                    </div>
                    <strong class="text-uppercase">My Cart:</strong>
                  </a>
                </li>
                {/* <!-- /Cart --> */}

                {/* <!-- Mobile nav toggle--> */}
                <li class="nav-toggle">
                  <button class="nav-toggle-btn main-btn icon-btn">
                    <i class="fa fa-bars"></i>
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
