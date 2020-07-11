import React from "react";
import RatedStar from "../product/components/review_views/RatedStar";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";
import { getHeader } from "../../../AuthUser";

export default function ProductContainer(props) {
  const product = props.product;
  const history = useHistory();

  function addToCart() {
    Axios.post(
      "/user-cart",
      { product_option_id: props.product?.product_option?.[0]?.id, qty: 1 },
      getHeader()
    )
      .then(() => {
        history.push("/mycart");
      })
      .catch(() => {});
  }

  return (
    <div className="col-md-12 col-sm-12 col-xs-12">
      <div className="product product-single">
        <div className="product-thumb">
          <div className="product-label">
            {props.product.product_option[0].discount !== 0 ? (
              <span className="sale">
                {props.product.product_option[0].discount}%
              </span>
            ) : (
              ""
            )}
          </div>
          <img
            src={product.gallery[0]}
            style={imageStyle}
            alt="Unavailable Image"
          />
        </div>
        <div className="product-body">
          <RatedStar rated={product.rated} />
          <h3 className="product-price">
            $
            {(
              (product.product_option[0].price *
                (100 - props.product.product_option[0].discount)) /
              100
            ).toFixed(2)}
            <br />
            <del className="product-old-price">
              {props.product.product_option[0].discount !== 0 ? (
                <span>${product.product_option[0].price.toFixed(2)}</span>
              ) : (
                <span>&nbsp;</span>
              )}
            </del>
          </h3>
          <div className="product-name-container">
            <h4 className="product-name">
              <Link to={"/product/" + product.id}>
                <label className="categoryItemTitle">
                  {product.title.length > props.key_num
                    ? product.title.substr(0, props.key_num) + "..."
                    : product.title}
                </label>
              </Link>
            </h4>
          </div>
          <div className="product-btns">
            <button
              className="primary-btn add-to-cart"
              onClick={() => addToCart()}
            >
              <i className="fa fa-shopping-cart"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const imageStyle = {
  objectFit: "cover",
  height: "200px",
};

ProductContainer.defaultProps = {
  key_num: 70,
};
