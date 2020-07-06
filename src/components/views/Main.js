import React, { Component } from "react";
import ProductSearch from "./products/ProductSearch";
import ProductDetails from "./product/ProductDetails";
import AllReviewPage from "./all_reviews/AllReviewPage";
import FavoritePage from "./favorite_products/FavoritePage";

export default function Main(props) {
  return (
    <div>
      <ProductSearch name={props.params.name} />
    </div>
  );
}
