import React, { Component } from "react";
import BreadCrumb from "./../universal_components/BreadCrumb";
import ProductItem from "./../universal_components/ProductItem";
import StoreSideFilter from "./sort/StoreSideFilter";
import StoreTopBottomFilter from "./sort/StoreTopBottomFilter";
import CategoryContainer from "../category/components/CategoryContainer";
import Axios from "axios";

export default function ProductSearch(props) {
  const [products, setProducts] = React.useState([]);
  const [brands, setBrands] = React.useState([]);

  React.useEffect(() => {
    let data = { toSearch: props.name };
    Axios.post("/product/search", data)
      .then((res) => {
        console.log(res.data);

        setProducts(
          res.data.map((data, index) => (
            <CategoryContainer product={data} key={index} />
          ))
        );
      })
      .catch((error) => console.log(error.response));
  }, []);

  const btnhit = props => {
    return (
      console.log(props)
    );
  }

  return (
    <body>
      <div>
        <BreadCrumb pageName={"/ search / " + props.name} />

        <div className="section">
          <div className="container">
            <div className="row">
              <StoreSideFilter />

              <div id="main" className="col-md-9">
                <StoreTopBottomFilter />

                <div id="store">
                  {/* <div className="row">{products}</div> */}
                  <button onClick={() => btnhit("123123")}>Click</button>
                </div>

                <StoreTopBottomFilter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
