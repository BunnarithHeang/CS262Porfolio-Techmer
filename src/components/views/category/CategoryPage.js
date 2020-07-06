import React, { Component } from "react";
import Axios from "axios";
import { getHeader } from "./../../../AuthUser";
import CategoryContainer from "./components/CategoryContainer";
import BreadCrumb from "../universal_components/BreadCrumb";
import CategorySideFilter from "./components/CategorySideFilter";
import CategoryTopBottomFilter from "./components/CategoryTopBottomFilter";

class CategoryPage extends Component {
  constructor() {
    super();
    this.state = {
      canLoad: false,
      categoryList: [],
      categoryProduct: [],
      selectId: 1,
      showingProducts: [],
    };
    this.getCategoryProduct = this.getCategoryProduct.bind(this);
  }

  // PAss props to class
  async componentDidMount() {
    await Axios.get("/product-category", getHeader())
      .then((res) => {
        this.setState({
          categoryList: res.data.map((category) => category),
        });
      })
      .catch((error) => console.log(error.response));
    console.log(this.props.params.category_id);
    await this.getCategoryProduct(this.props.params.category_id);

  }

  // Get products of new category, update the products
  getCategoryProduct = async (index) => {
    await Axios.get("/product/byCategory/" + index, getHeader())
      .then((res) => {
        this.setState({
          categoryProduct: res.data.map((product) => product),
        }); // Somehow if include in one setstate, component dont update
        this.setState({
          showingProducts: this.state.categoryProduct.map((product, index) => {
            return (
              <CategoryContainer
                key={index}
                isNew={index % 2 == 0} // Modify promo here
                hasDiscount={index % 2 != 0 || index % 3 == 0}
                product={product}
              />
            );
          }),
        });
      })
      .catch((error) => {
        if (error.response.status != 404) {
          console.log(error.response.status);
        }
        this.setState({
          showingProducts: [],
        });
      });
    this.setState({ selectId: index });
  };

  render() {
    return (
      <body>
        <div>
          <BreadCrumb
            pageName={`Category / ${
              this.state.categoryList.length > 0
                ? this.state.categoryList[this.state.selectId - 1]?.category ??
                  ""
                : ""
            }`}
            selectedIndex={this.state.selectId}
          />

          <div className="section">
            <div className="container">
              <div className="row">
                <CategorySideFilter
                  selectedIndex={this.state.selectId - 1}
                  categoryList={this.state.categoryList}
                  getCategoryProduct={(id) => this.getCategoryProduct(id)}
                />

                <div id="main" className="col-md-9">
                  {/* <CategoryTopBottomFilter /> */}

                  <div id="store">
                    <div className="row">
                      {this.state.showingProducts.length == 0 ? (
                        <h3 style={{ textAlign: "center" }}>
                          Products Unavailable
                        </h3>
                      ) : (
                        this.state.showingProducts
                      )}
                    </div>
                  </div>

                  {/* <CategoryTopBottomFilter /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default CategoryPage;
