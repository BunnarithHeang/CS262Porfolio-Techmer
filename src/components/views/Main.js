import React, { Component } from "react";
import ProductSearch from "./products/ProductSearch";
import ProductDetails from "./product/ProductDetails";
import AllReviewPage from "./all_reviews/AllReviewPage";
import FavoritePage from "./favorite_products/FavoritePage";

export default class Main extends Component {
  render() {
    return (
      <div>
        <FavoritePage />
      </div>
    );
  }
}
