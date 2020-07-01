import React from "react";
import ItemPic from "./../../../images/item1Pic.jpg";

export default function ProductItem(props) {
  return (
    <div className="col-md-4 col-sm-6 col-xs-6">
      <div className="product product-single">
        <div className="product-thumb">
          <div className="product-label">
            {/* Just pass these 2 props */}
            {props.isNew 
              ? <span>New</span> 
              : ""}
            {props.hasDiscount 
              ? <span className="sale">-20%</span> 
              : ""}
          </div>
          <button className="main-btn quick-view">
            <i className="fa fa-search-plus"></i> Quick view
          </button>
          <img src={ItemPic} alt="Picture Here" />
        </div>
        <div className="product-body">
          <h3 className="product-price">
            $32.50 <del className="product-old-price">$45.00</del>
          </h3>
          <div className="product-rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-o empty"></i>
          </div>
          <h2 className="product-name">
            <a href="#">Product Name Goes Here</a>
          </h2>
          <div className="product-btns">
            <button className="main-btn icon-btn">
              <i className="fa fa-heart"></i>
            </button>
            <button className="main-btn icon-btn">
              <i className="fa fa-exchange"></i>
            </button>
            <button className="primary-btn add-to-cart">
              <i className="fa fa-shopping-cart"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
