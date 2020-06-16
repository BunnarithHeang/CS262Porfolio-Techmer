import React, { Component } from "react";
import WriteReview from "./WriteReview";
import SingleReview from "./SingleReview";

export default class ProductReview extends Component {
  render() {
    return (
      <div className="col-md-12">
        <div className="product-tab">
          <ul className="tab-nav">
            <li className="active">
              <a data-toggle="tab" href="#tab1">Description</a>
            </li>
            <li>
              <a data-toggle="tab" href="#tab2">Details</a>
            </li>
            <li>
              <a data-toggle="tab" href="#tab3">Reviews (3)</a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="tab1" className="tab-pane fade in active">
              <p>Description Props here</p>
            </div>
            <div id="tab2" className="tab-pane fade in active">
              <p>Detail Props here</p>
            </div>
            <div id="tab3" className="tab-pane fade in">
              <div className="row">
                <div className="col-md-6">
                  <div className="product-reviews">
                    <SingleReview />

                    <SingleReview />

                    <SingleReview />

                    {/* <ul className="reviews-pages">
                      <li className="active">1</li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#"><i className="fa fa-caret-right"></i></a></li>
                    </ul> */}
                  </div>
                </div>

                <WriteReview />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
