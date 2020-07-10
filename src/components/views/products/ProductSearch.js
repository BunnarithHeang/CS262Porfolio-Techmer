import React, { Component } from "react";
import BreadCrumb from "./../universal_components/BreadCrumb";
import StoreTopBottomFilter from "./sort/StoreTopBottomFilter";
import CategoryContainer from "../category/components/CategoryContainer";
import Axios from "axios";

export default class ProductSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingProductsData: [],
      productContainers: [],
      currentPage: 1,
      maxPageIndex: 1,
      searchname: props.params.name ?? '',
    }
    this.changePage = this.changePage.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.renderContainer = this.renderContainer.bind(this);
  }

  changePage(id) {
    if (id < 1 || id > this.state.maxPageIndex) return;
    this.setState({ currentPage: id })
    this.getProducts(id);
  }

  componentDidMount() {
    this.getProducts(this.state.currentPage.toString());
  }

  getProducts(index) {
    let url = '/product/search';
    Axios.post(url, { toSearch: this.state.searchname, page:  index })
      .then((res) => {
        this.setState({
          showingProductsData: res.data.data.map(product => product),
          currentPage: res.data.current_page,
          maxPageIndex: res.data.last_page,
        })
        this.renderContainer();
      })
      .catch((error) => { 
        console.log(error.response) 
        this.setState({
          maxPageIndex: 1,
          currentPage: 1,
          showingProductsData: [],
          searchname: "unknown"
        })
      });
  }

  renderContainer() {
    this.setState({ productContainers: [] })
    this.setState({
      productContainers: this.state.showingProductsData.map((product, index) => (
        <CategoryContainer product={product} key={index} />
      ))
    })
  }

  render() {
    return (
      <body>
        <div>
          <BreadCrumb pageName={"/ Search / " + this.state.searchname} />

          <div className="section">
            <div className="container">
              <div className="row">
                {/* <StoreSideFilter /> */}

                <div id="main" className="col-md-12">
                  <StoreTopBottomFilter 
                    key={1}
                    maxPageIndex={this.state.maxPageIndex}
                    selectedIndex={this.state.currentPage}
                    onIndexClick={(index) => {
                      this.changePage(index);
                    }}
                  />

                  <div id="store">
                    <div className="row">
                      { 
                        this.state.productContainers.length > 0 
                          ? this.state.productContainers
                          : <h3 style={{ textAlign: 'center', fontWeight: '600' }}>Product Not Found</h3>
                      }
                    </div>
                  </div>

                  <StoreTopBottomFilter 
                    key={2}
                    maxPageIndex={this.state.maxPageIndex}
                    selectedIndex={this.state.currentPage}
                    onIndexClick={(index) => {
                      this.changePage(index);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}