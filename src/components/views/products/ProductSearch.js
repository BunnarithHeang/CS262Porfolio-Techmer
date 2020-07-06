import React, { Component } from "react";
import BreadCrumb from "./../universal_components/BreadCrumb";
import ProductItem from "./../universal_components/ProductItem";
import StoreSideFilter from "./sort/StoreSideFilter";
import StoreTopBottomFilter from "./sort/StoreTopBottomFilter";
import CategoryContainer from "../category/components/CategoryContainer";
import Axios from "axios";

export default function ProductSearch(props) {
  const [products, setProducts] = React.useState([]);

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

  return (
    <body>
      <div>
        <BreadCrumb pageName={"Product Name Here"} />

        <div className="section">
          <div className="container">
            <div className="row">
              <StoreSideFilter />

              <div id="main" className="col-md-9">
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
