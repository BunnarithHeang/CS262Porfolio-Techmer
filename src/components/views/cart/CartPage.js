import React, { Component } from "react";
import BreadCrumb from "./../universal_components/BreadCrumb";
import CartItem from "./CartItem";
import ItemPic from "./../../../images/item1Pic.jpg";
import { Link } from "react-router-dom";
import Axios from "axios";
import { getHeader, getUser } from "../../../AuthUser";
import Loading from "../loading";
import CircularProgress from "@material-ui/core/CircularProgress";

export default class CartPage extends Component {
  constructor() {
    super();
    this.state = {
      totalDiscount: 0,
      subTotal: 0,
      totalPrice: 0,
      showingProductsData: [],
      productObj: [],
      loading: true,
    };
    this.initCons = this.initCons.bind(this);
    this.clearCart = this.clearCart.bind(this);
    this.getUserCart = this.getUserCart.bind(this);
    this.updateProductQty = this.updateProductQty.bind(this);
    this.renderComponenet = this.renderComponenet.bind(this);
  }
  // TODO: Add circular loading animation

  initCons() {
    this.setState({
      totalDiscount: 0,
      totalPrice: 0,
      subTotal: 0,
      productObj: [],
    });
  }

  async componentDidMount() {
    await this.getUserCart();
  }

  async getUserCart() {
    let url = "/user-cart/user";
    await Axios.get(url, getHeader())
      .then((res) => {
        this.setState({
          loading: false,
          productObj: res.data.map((product) => product),
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          product: 0,
        });
        console.log(error.response);
        this.initCons();
      });
    this.renderComponenet();
  }

  async updateProductQty(qty, id) {
    let url = "/user-cart/" + id;
    if (qty === 0) {
      await Axios.delete(url, getHeader())
        .then((res) => {})
        .catch((error) => {
          console.log(error.response);
        });
    } else {
      await Axios.put(url, { qty: qty }, getHeader())
        .then((res) => {})
        .catch((error) => {
          console.log(error.response);
        });
    }
    await this.getUserCart();
  }

  async clearCart() {
    let url = "user-cart/clearCart";
    await Axios.get(url, getHeader())
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
    this.getUserCart();
  }

  renderComponenet() {
    var tmpTotal = 0;
    this.setState({
      showingProductsData: this.state.productObj.map((product) => {
        let resProductOptions = product.product.product_option;
        var productOption = {};
        for (var i = 0; i < resProductOptions.length; ++i) {
          if (resProductOptions[i].id === product.product_option_id) {
            tmpTotal +=
              (100 - resProductOptions[i].discount) *
              resProductOptions[i].price *
              product.qty;
            productOption = resProductOptions[i];
            break;
          }
        }
        return {
          id: product.id,
          product_option_id: product.product_option_id,
          title: product.product.title,
          brand: product.product.brand,
          qty: product.qty,
          short_description: product.product.short_description,
          galleryUrl: product.product.gallery[0],
          productOption: productOption,
        };
      }),
      subTotal: tmpTotal,
    });
  }

  render() {
    let stateObj = this.state;
    var products = [];
    for (var i = 0; i < stateObj.showingProductsData.length; ++i) {
      products.push(
        <CartItem
          key={stateObj.showingProductsData[i].id}
          product={stateObj.showingProductsData[i]}
          onQtyChange={(qty, id) => this.updateProductQty(qty, id)}
        />
      );
    }

    return (
      <React.Fragment>
        <BreadCrumb pageName={"My Cart"} />

        {/* <!-- ****** Cart Area Start ****** --> */}
        <div className="cart_area section_padding_100 clearfix">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="cart-table clearfix">
                  <table className="table table-responsive">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>QTY</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>{products}</tbody>
                  </table>
                </div>

                <div className="col-md-12">
                  <div className="col-md-6 col-xs-6" style={noPaddings}>
                    <Link to="/">Continue Shopping</Link>
                  </div>
                  <div
                    className="col-md-6 col-xs-6 text-right"
                    style={noPaddings}
                  >
                    <a href="javascript:;" onClick={this.clearCart}>
                      clear cart
                    </a>
                    <br />
                    <a href="javascript:;" onClick={this.renderComponenet}>
                      Update cart
                    </a>
                  </div>
                </div>
                <div
                  className="col-md-12"
                  style={{ textAlign: "center", color: "red" }}
                >
                  {this.state.product === 0 && <h1>Empty Cart</h1>}
                </div>
              </div>
            </div>

            <div style={{ marginTop: "30px" }}>
              <div
                className="col-xs-12 col-md-6 col-lg-6"
                style={noPaddings}
              ></div>
              {this.state.loading === true ? (
                <div className="col-md-3 text-center">
                  <Loading />
                  <CircularProgress />
                </div>
              ) : (
                <div
                  className="col-xs-12 col-md-6 col-lg-6 text-right"
                  style={noPaddings}
                >
                  <div className="cart-total-area mt-70">
                    <ul className="cart-total-chart">
                      <li>
                        <span style={header}>Subtotal:</span>{" "}
                        <span style={liText}>
                          ${this.state.subTotal.toFixed(2)}
                        </span>
                      </li>
                      <li>
                        <span style={header}>Discount:</span>{" "}
                        <span style={liText}>$0</span>
                      </li>
                      <li>
                        <span>
                          <strong style={header}>Total: </strong>
                        </span>{" "}
                        <span>
                          <strong style={liText}>
                            ${this.state.subTotal.toFixed(2)}
                          </strong>
                        </span>
                      </li>
                    </ul>
                    <Link to="/checkout" className="proceedToCheckoutBtn">Proceed to checkout</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const noPaddings = {
  paddingLeft: "0",
  paddingRight: "0",
};

const header = {
  fontSize: "15px",
};

const liText = {
  fontSize: "16px",
};
