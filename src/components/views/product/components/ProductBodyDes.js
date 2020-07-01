import React, { Component } from "react";
import RatedStar from "./review_views/RatedStar";

class ProductBodyDes extends Component {
  constructor() {
    super();
    this.state = {
      selectedPrice: 0,
      selectedIndex: 0,
      selectedProduct: {}, // Maybe when add to cart just retrieve id from here
      productOptions: [],
    }
    this.changePrice = this.changePrice.bind(this);
  }

  // Initializes the state with given props
  componentWillReceiveProps(props) {
    const product = props.product;
    const resProductOps = product.product_option.map((data) => data);

    this.setState({
      selectedIndex: 0,
      selectedPrice: resProductOps[0].price,
      selectedProduct: resProductOps[0],
      productOptions: resProductOps,
    });
  }

  // Update the current selected
  changePrice = (option, index) => {
    this.setState({ 
      selectedIndex: index,
      selectedPrice: option.price,
      selectedProduct: option,
    });
  }

  render() {
    const stateObj = this.state;
    const product = this.props.product;
    
    // Generate option tags
    // If want second option tags just create another 
    const mainOptionsTags = stateObj.productOptions.map((option, index) => 
      <li className={stateObj.selectedIndex==index ? "active" : ""} key={index}>
        <a href="javascript:void(0)" onClick={(() => this.changePrice(option, index))}>{option.option}</a>
      </li>
    );

    return (
      <div className="col-md-6">
        <div className="product-body">
          <div className="product-label">
            <span>New</span>
            <span className="sale">-20%</span>
          </div>
          <h2 className="product-name">{product.title}</h2>
          <h3 className="product-price">
            ${stateObj.selectedPrice} <del className="product-old-price">$45.00</del>
          </h3>
          <div>
            <RatedStar rated={product.rated} />
  
            <a href="#">3 Review(s) / Add Review</a>
          </div>
          <p>
            <strong>Availability:</strong> In Stock
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
            {/* <ul className="color-option">
                <li>
                  <span className="text-uppercase">Color:</span>
                </li>
                <li className="active">
                  <a href="#" style={{ "backgroundColor": "#475984" }}></a>
                </li>
                <li>
                  <a href="#" style={{ "backgroundColor": "#8A2454" }}></a>
                </li>
                <li>
                  <a href="#" style={{ "backgroundColor": "#BF6989" }}></a>
                </li>
                <li>
                  <a href="#" style={{ "backgroundColor": "#9A54D8" }}></a>
                </li> 
              </ul> */}
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
        </div>
      </div>
    );
  }
}

export default ProductBodyDes;