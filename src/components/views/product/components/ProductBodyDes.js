import React, { Component } from "react";
import RatedStar from "./review_views/RatedStar";
import "../../../../scss/product_des.scss";

class ProductBodyDes extends Component {
  constructor() {
    super();
    this.state = {
      ratingStars: 0,
      selectedPrice: 0,
      selectedDiscount: 0,
      selectedIndex: 0,
      selectedProduct: {}, // Maybe when add to cart just retrieve id from here
      productOptions: [],
    };
    this.changePrice = this.changePrice.bind(this);
  }

  // Initializes the state with given props
  componentWillReceiveProps(props) {
    const product = props.product;
    const resProductOps = product.product_option.map((data) => data);

    this.setState({
      rated: product.rated,
      selectedIndex: 0,
      selectedPrice: resProductOps[0].price,
      selectedDiscount: resProductOps[0].discount,
      selectedProduct: resProductOps[0],
      productOptions: resProductOps,
    });
  }

  // Update the current selected
  changePrice = (option, index) => {
    this.setState({
      selectedIndex: index,
      selectedPrice: option.price,
      selectedDiscount: option.discount,
      selectedProduct: option,
    });
  };

  render() {
    const stateObj = this.state;
    const product = this.props.product;

    // If want second option tags just create another
    const mainOptionsTags = stateObj.productOptions.map((option, index) => (
      <li
        className={stateObj.selectedIndex === index ? "active" : ""}
        key={index}
      >
        <a href="javascript:;" onClick={() => this.changePrice(option, index)}>
          {option.option}
        </a>
      </li>
    ));

    return (
      <div className="col-md-6">
        <div className="product-body">
          <div className="product-label">
            {/* CHANGE HERE ALSO */}
            <span className="sale">-20%</span>
          </div>
          <h2 className="product-name">{product.title}</h2>
          <h3 className="product-price">
            ${(stateObj.selectedPrice).toFixed(2)}{" "}
            <del className="product-old-price">
              ${(stateObj.selectedPrice + stateObj.selectedDiscount).toFixed(2)}
            </del>
          </h3>
          <div>
            <RatedStar rated={product.rated} />
            
            <a href="#">{Math.ceil(stateObj.rated)} Review(s) / Add Review</a>
          </div>
          <p>
            <strong>Availability:</strong>
            {
              stateObj.productOptions[stateObj.selectedIndex]?.qty > 0 
              ? " In Stock" : " Out-of-stock" 
            }
          </p>
          <p>
            <strong>Brand:</strong> {product.brand}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>{product.content}</p>
          <div className="product-options">
            <ul className="size-option">
              <li>
                <span className="text-uppercase">Options:</span>
              </li>
              {mainOptionsTags}
            </ul>
          </div>

          <div className="product-btns">
            <div className="qty-input">
              <span className="text-uppercase">QTY: </span>
              <input type="number" className="input" defaultValue="1" min="1" />
            </div>
            <button className="primary-btn add-to-cart">
              <i className="fa fa-shopping-cart"></i> Add to Cart
            </button>
            <div className="pull-right">
              <button className="main-btn icon-btn">
                <i className="fa fa-heart"></i>
              </button>
              <button className="main-btn icon-btn">
                <i className="fa fa-exchange"></i>
              </button>
              <button className="main-btn icon-btn">
                <i className="fa fa-share-alt"></i>
              </button>
            </div>
          </div>
          <div className="product-description">{product.short_description}</div>
        </div>
      </div>
    );
  }
}

export default ProductBodyDes;
