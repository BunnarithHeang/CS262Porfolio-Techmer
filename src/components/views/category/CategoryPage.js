import React, { Component } from "react";
import Axios from "axios";
import { getHeader } from "./../../../AuthUser";
import CategoryContainer from "./components/CategoryContainer";
import BreadCrumb from "../universal_components/BreadCrumb";
import CategorySideFilter from "./components/CategorySideFilter";
import CategoryTopBottomFilter from "./components/CategoryTopBottomFilter";
import Loading from "../loading"
import CircularProgress from "@material-ui/core/CircularProgress"
import { TurnedIn } from "@material-ui/icons";
import StoreTopFilter from "../products/sort/StoreTopBottomFilter";

class CategoryPage extends Component {
  constructor() {
    super();
    this.state = {
      canLoad: false,
      categoryList: [],
      categoryProduct: [],
      selectId: 1,
      showingProducts: [],
      loading: true,
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
    await this.getCategoryProduct(this.props.params.category_id ?? 1);
  }
  // Get products of new category, update the products
  getCategoryProduct = async (index) => {
    this.setState({showingProducts: [], loading:true})
    await Axios.get("/product/byCategory/" + index, getHeader())
      .then((res) => {
        this.setState({
          loading: false,
          categoryProduct: res.data.map((product) => product),
        }); // Somehow if include in one setstate, component dont update
        this.setState({
          showingProducts: this.state.categoryProduct.map((product, index) => {
            return (
              <CategoryContainer
                key={index}
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
          loading: false,
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
            pageName={` / Category / ${
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
                  linkOnClick={(id) => {
                    // window.location.reload()
                    this.getCategoryProduct(id);
                  }}
                  option={"category"}
                />
                <div id="main" className="col-md-9">
                  {/* <StoreTopFilter 
                    key={1}
                    maxPageIndex={10}
                    selectedIndex={1}
                    onIndexClick={(index) => {
                      this.changePage(index);
                    }}
                  /> */}
                  <div id="store">
                   
                    <div className="row">
                      {
                      this.state.showingProducts.length === 0 
                        ? this.state.loading === true 
                          ? (<div className="text-center"><Loading /><CircularProgress /></div>)  
                          : (
                              <h3 style={{ textAlign: "center" }}>
                                Products Unavailable
                              </h3>
                            )
                        : (
                          this.state.showingProducts
                          )
                      }
                    </div>
                  </div>

                  {/* <StoreTopFilter 
                    key={1}
                    maxPageIndex={10}
                    selectedIndex={1}
                    onIndexClick={(index) => {
                      this.changePage(index);
                    }}
                  /> */}
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
