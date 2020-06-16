import React, { Component } from "react";
import ProductSearch from "./products/ProductSearch";
import ProductDetails from "./product/ProductDetails";

export default class Main extends Component {
  render() {
    return (
      <div>
        <ProductDetails />
      </div>
    );
  }
}
