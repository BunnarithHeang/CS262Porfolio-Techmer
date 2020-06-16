import React, { Component } from "react";

export default class SingleReview extends Component {
  render() {
    return (
      <div className="single-review">
        <div className="review-heading">
          <div>
            <a href="#">
              <i className="fa fa-user-o"></i> John
            </a>
          </div>
          <div>
            <a href="#">
              <i className="fa fa-clock-o"></i> 27 DEC 2017 / 8:0PM
            </a>
          </div>
          <div className="review-rating pull-right">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-o empty"></i>
          </div>
        </div>
        <div className="review-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
    );
  }
}
