import React, { Component } from "react";
import BreadCrumb from "./../universal_components/BreadCrumb";
import ProductItem from "./../universal_components/ProductItem";
import StoreSideFilter from "./sort/StoreSideFilter";
import StoreTopBottomFilter from "./sort/StoreTopBottomFilter";

export default class ProductSearch extends Component {
  render() {
    var products = [];
    for (var i = 0; i < 9; ++i) {
      products.push(<ProductItem />);
    }
    return (
      <body>
        <div>
          <BreadCrumb pageName={"Product Name Here"} />

          <div className="section">
            <div className="container">
              <div className="row">
                <StoreSideFilter />

                <div id="main" className="col-md-9">
                  <StoreTopBottomFilter />

                  <div id="store">
                    <div className="row">{products}</div>
                  </div>

                  <StoreTopBottomFilter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
