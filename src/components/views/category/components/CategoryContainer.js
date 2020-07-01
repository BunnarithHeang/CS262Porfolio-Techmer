import React from "react";
import ItemPic from "./../../../../images/item1Pic.jpg";

export default function CategoryContainer(props) {
  return (
    <div className="col-md-4 col-sm-6 col-xs-6">
      <div className="product product-single">
        <div className="product-thumb">
          <div className="product-label">
            {props.isNew 
              ? <span>New</span> : ""
            }
            {props.hasDiscount 
              ? <span className="sale">-20%</span> : ""
            }
          </div>
          <button className="main-btn quick-view">
            <i className="fa fa-search-plus"></i> Quick view
          </button>
          <img src={ItemPic} alt="Picture Here" />
        </div>
        <div className="product-body">
          <h2 className="product-name">
            <a href="#">{props.title}</a>
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
