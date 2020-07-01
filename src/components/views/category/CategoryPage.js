import React, { Component } from "react";
import Axios from "axios";
import { getHeader } from "./../../../AuthUser";
import CategoryContainer from "./components/CategoryContainer";
import BreadCrumb from "../universal_components/BreadCrumb";
import CategorySideFilter from "./components/CategorySideFilter";
import CategoryTopBottomFilter from './components/CategoryTopBottomFilter';

class CategoryPage extends Component {
  constructor() {
    super();
    this.state = {
      categoryList: [],
      selectId: null,
    }
  }

  async componentDidMount() {
    Axios.get('/product-category', getHeader())
      .then(res => {
        this.setState({
          categoryList: res.data.map(category => category)
        });
      })
      .catch((error) => console.log(error.response));
  }
  
  render() {
    var categories = [];
    for (var i = 0; i < 9; ++i) {
      categories.push(
        <CategoryContainer
          isNew={i % 2 == 0}
          hasDiscount={i % 2 != 0 || i % 3 == 0}
          title={"Category: " + i}
        />
      ); // Modify here with props
    }
    return (
      <body>
        <div>
          <BreadCrumb pageName={"Categories Page"} />

          <div className="section">
            <div className="container">
              <div className="row">
                <CategorySideFilter categoryList={this.state.categoryList}/>

                <div id="main" className="col-md-9">
                  <CategoryTopBottomFilter />

                  <div id="store">
                    <div className="row">{categories}</div>
                  </div>

                  <CategoryTopBottomFilter />
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
