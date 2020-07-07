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
    if (props.name) {
      Axios.post("/product/search", { toSearch: props.name })
        .then((res) => {
          console.log(res.data);

          setProducts(
            res.data.map((data, index) => (
              <CategoryContainer product={data} key={index} />
            ))
          );
        })
        .catch((error) => console.log(error.response));
    } else {
      Axios.get("/product/page/12")
        .then((res) => {
          setProducts(
            res.data.data.map((data, index) => (
              <CategoryContainer product={data} key={index} key_num={100} />
            ))
          );
        })
        .catch((error) => console.log(error.response));
    }
  }, []);

  return (
    <body>
      <div>
        <BreadCrumb pageName={"/ search / " + props.name} />

        <div className="section">
          <div className="container">
            <div className="row">
              {/* <StoreSideFilter /> */}

              <div id="main" className="col-md-12">
                <StoreTopBottomFilter />

                <div id="store">
                  <div className="row">{products}</div>
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
