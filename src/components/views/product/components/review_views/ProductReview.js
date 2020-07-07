import React, { Component } from "react";
import WriteReview from "./WriteReview";
import SingleReview from "./SingleReview";

export default function ProductReview(props) {
  return (
    <div className="col-md-12">
      <div className="product-tab">
        <ul className="tab-nav">
          <li className="active">
            <a data-toggle="tab" href="#tab1">
              Description
            </a>
          </li>
          <li>
            <a data-toggle="tab" href="#tab2">
              Details
            </a>
          </li>
          <li>
            <a data-toggle="tab" href="#tab3">
              Reviews (3)
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div id="tab1" className="tab-pane fade in active">
            <p>{props.description}</p>
          </div>
          <div id="tab3" className="tab-pane fade in">
            <div className="row">
              <div
                className={props.allowReviewInput ? "col-md-6" : "col-md-12"}
              >
                <div className="product-reviews">
                  <SingleReview />

                  <SingleReview />

                  <SingleReview />

                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <label>Show more reviews</label>
                  </a>
                </div>
              </div>
              {props.allowReviewInput ? <WriteReview /> : <div></div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
