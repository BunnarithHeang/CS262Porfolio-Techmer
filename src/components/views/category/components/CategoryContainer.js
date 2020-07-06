import React from "react";
import RatedStar from "../../product/components/review_views/RatedStar";
import { Link, Redirect } from "react-router-dom";

export default function CategoryContainer(props) {
  const product = props.product;

  return (
    <div className="col-md-4 col-sm-6 col-xs-6">
      <div className="product product-single">
        <div className="product-thumb">
          <div className="product-label">
            {
              props.product.product_option[0].discount != 0
                ? <span className="sale">{props.product.product_option[0].discount}%</span>
                : ''
            }
          </div>
          <img src={product.gallery[0]} style={imageStyle} alt="Picture Here" />
        </div>
        <div className="product-body">
          <RatedStar rated={product.rated} />
          <h3 className="product-price">
            ${(product.product_option[0].price).toFixed(2)} 
            <br/>
            <del className="product-old-price">${(product.product_option[0].price * 2.3).toFixed(2)}</del>
          </h3> 
          <h2 className="product-name">
          <Link to="/product/1">
            <label className="categoryItemTitle">
              {product.title}
            </label>
          </Link>
          </h2>
          <div className="product-btns">
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
  objectFit: 'cover',
  height: '200px',
}