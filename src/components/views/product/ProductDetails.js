import React, { Component } from "react";
import BreadCrumb from "./../universal_components/BreadCrumb";
import ProductPicView from "./components/ProductPicView";
import ProductBodyDes from "./components/ProductBodyDes";
import ProductReview from "./components/review_views/ProductReview";
import ProductItem from "../universal_components/ProductItem";
import img from "./../../../images/item1Pic.jpg";
import Axios from "axios";

export default function ProductDetails(props) {
  const [product, setProduct] = React.useState(0);

  React.useEffect(() => {
    Axios.get("/product/" + props.params.product_id)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
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
              <div className="product product-details clearfix">
                <ProductPicView img={img} />
                <ProductBodyDes product={product} />
                <ProductReview allowReviewInput={true} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Recommdation */}
      <div class="section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-title">
                <h2 class="title">Picked For You</h2>
              </div>
            </div>

            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>
      </div>
    </body>
  );
}
