import React from "react";
import RatedStar from "../../product/components/review_views/RatedStar";
import { Redirect } from "react-router-dom";

export default function CategoryContainer(props) {
  const product = props.product;

  return (
    <div className="col-md-4 col-sm-6 col-xs-6">
      <div className="product product-single">
        <div className="product-thumb">
          <div className="product-label">
            {/* Just pass these 2 props */}
            {props.product.product_option[0].discount > 25 
              ? <span>New</span> : ""
            }
            {
              props.product.product_option[0].discount != 0
                ? <span className="sale">{props.product.product_option[0].discount}%</span>
                : ''
            }
          </div>
          <button className="main-btn quick-view">
            <i className="fa fa-search-plus"></i> Quick view
          </button>
          <img src={product.gallery[0]} style={imageStyle} alt="Picture Here" />
        </div>
        <div className="product-body">
          <h3 className="product-price">
            ${(product.product_option[0].price).toFixed(2)} <del className="product-old-price">${(product.product_option[0].price * 2.3).toFixed(2)}</del>
          </h3> 

          <RatedStar rated={product.rated} />
          
          <h2 className="product-name">
          <a href="" className="categoryItemTitle"
            onClick={() => <Redirect to="/product/1" />}
          > 
            {product.title}
          </a>
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

const imageStyle = {
  objectFit: 'contain',
  height: '200px',
}