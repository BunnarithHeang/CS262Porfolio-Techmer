import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="footer" className="section section-grey">
          {/* <!-- container --> */}
          <div className="container">
            {/* <!-- row --> */}
            <div className="row">
              {/* <!-- footer widget --> */}
              <div className="col-md-3 col-sm-6 col-xs-6">
                <div className="footer">
                  <div className="footer-logo">
                    <a href="javascript:;">
                      <Link to="/">techfinder</Link>
                    </a>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                  </p>

                  {/* <!-- footer social --> */}
                  <ul className="footer-social">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                  {/* <!-- /footer social --> */}
                </div>
              </div>
              {/* <!-- /footer widget --> */}

              <div className="col-md-3 col-sm-6 col-xs-6"></div>

              <div className="clearfix visible-sm visible-xs"></div>

              {/* <!-- footer widget --> */}
              <div className="col-md-3 col-sm-6 col-xs-6">
                <div className="footer">
                  <h3 className="footer-header">Customer Service</h3>
                  <ul className="list-links">
                    <li>
                      <Link to='/aboutus'>About Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- /footer widget --> */}

              {/* <!-- footer widget --> */}
              <div className="col-md-3 col-sm-6 col-xs-6">
                <div className="footer">
                  <h3 className="footer-header">My Account</h3>
                  <ul className="list-links">
                    <li>
                      <Link>My Account</Link>
                    </li>
                    <li>
                      <Link to='/mycart'>My Cart</Link>
                    </li>
                    <li>
                      <Link to='/category/'>Shop by Category</Link>
                    </li>
                    <li>
                      <Link to="/brand">Shop by Brand</Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- /footer widget --> */}

            </div>
            {/* <!-- /row --> */}
            <hr />
            {/* <!-- row --> */}
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center">
                {/* <!-- footer copyright --> */}
                <div className="footer-copyright">
                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | This template is made with{" "}
                  <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                </div>
                {/* <!-- /footer copyright --> */}
              </div>
            </div>
            {/* <!-- /row --> */}
          </div>
          {/* <!-- /container --> */}
        </footer>
      </div>
    );
  }
}
