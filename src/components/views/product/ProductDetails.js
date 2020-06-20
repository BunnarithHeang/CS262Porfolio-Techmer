import React, { Component } from "react";
import BreadCrumb from "./../universal_components/BreadCrumb";
import ProductPicView from "./components/ProductPicView";
import ProductBodyDes from "./components/ProductBodyDes";
import ProductReview from "./components/review_views/ProductReview";
import ProductItem from "../universal_components/ProductItem";
import img from './../../../images/item1Pic.jpg';

export default class ProductDetails extends Component {
  render() {
    return (
      <body>
        <div>
          <BreadCrumb />

          <div className="section">
            <div className="container">
              <div className="row">
                <div className="product product-details clearfix">
                  <ProductPicView img={img}/>
                  <ProductBodyDes />
                  <ProductReview />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Recommdation */}
        <div class="section">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="section-title">
                  <h2 class="title">Picked For You</h2>
                </div>
              </div>

              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
          </div>
        </div>

        {/* <script src="./../../../js/jquery.min.js" />
                <script src="./../../../js/bootstrap.min.js" />
                <script src="./../../../js/slick.min.js" />
                <script src="./../../../js/nouislider.min.js" />
                <script src="./../../../js/jquery.zoom.min.js" />
                <script src="./../../../js/main.js" /> */}
      </body>
    );
  }
}
