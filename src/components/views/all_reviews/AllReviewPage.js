import React, { Component } from "react";
import BreadCrumb from "./../universal_components/BreadCrumb";
import ProductPicView from "./../product/components/ProductPicView";
import ProductBodyDes from "./../product/components/ProductBodyDes";
import ProductReview from "./../product/components/review_views/ProductReview";
import img from './../../../images/item1Pic.jpg';

export default class AllReviewPage extends Component {
  render() {
    return (
      <body>
        <div>
          <BreadCrumb pageName={"Product Review"}/>

          <div className="section">
            <div className="container">
              <div className="row">
                <div className="product product-details clearfix">
                  <ProductPicView img={img}/>
                  <ProductBodyDes />
                  <ProductReview allowReviewInput={false}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
