import React from "react";
import BreadCrumb from "./../universal_components/BreadCrumb";
import ProductPicView from "./components/ProductPicView";
import ProductBodyDes from "./components/ProductBodyDes";
import ProductReview from "./components/review_views/ProductReview";
import Axios from "axios";
import { getHeader } from "../../../AuthUser";
import CategoryContainer from "../Home/ProductContainer";
import Slider from "react-slick";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "black",
        borderRadius: "5px",
        paddingTop: "2px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "black",
        borderRadius: "5px",
        paddingTop: "2px",
      }}
      onClick={onClick}
    />
  );
}

export default function ProductDetails(props) {
  const [product, setProduct] = React.useState(0);
  const [pickForYou, setPickForYou] = React.useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  React.useEffect(() => {
    Axios.get("/product/" + props.params.product_id, getHeader())
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => console.log(error.response));
    Axios.get("/product/pickForYou/" + props.params.product_id, getHeader())
      .then((res) => {
        setPickForYou(
          res.data.map((product, index) => (
            <CategoryContainer key={index} product={product} />
          ))
        );
      })
      .catch((error) => console.log(error.response));
  }, [props.params.product_id]);
  
  return (
    <React.Fragment>
      <div>
        <BreadCrumb pageName={product.title} />

        <div className="section">
          <div className="container">
            <div className="row">
              <div className="product product-details clearfix">
                <ProductPicView images={product.gallery} />
                <ProductBodyDes product={product} />
                <ProductReview
                  allowReviewInput={true}
                  description={product.full_description}
                  productId={product.id}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Recommdation */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2 className="title">Picked For You</h2>
              </div>
            </div>
            <div className="col-md-12">
            <Slider {...settings}>
              {pickForYou}
              {pickForYou}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

// import React, { Component } from "react";
// import BreadCrumb from "./../universal_components/BreadCrumb";
// import ProductPicView from "./components/ProductPicView";
// import ProductBodyDes from "./components/ProductBodyDes";
// import ProductReview from "./components/review_views/ProductReview";
// import Axios from "axios";
// import { getHeader } from "../../../AuthUser";
// import CategoryContainer from "../category/components/CategoryContainer";

// export default class ProductDetails extends Component {
//   // const [product, setProduct] = React.useState(0);
//   // const [pickForYou, setPickForYou] = React.useState(0);

//   constructor(props) {
//     super(props);
//     this.state = {
//       product: 0,
//       pickForYou: 0,
//     };
//     this.getProducts = this.getProducts.bind(this);
//   }

//   componentDidMount(props) {
//     this.getProducts(props);
//   }

//   componentWillReceiveProps(props) {
//     this.getProducts(props);
//   }

//   getProducts(props) {
//     Axios.get("/product/" + props.product_id, getHeader())
//       .then((res) => {
//         this.setState({
//           product: res.data
//         })
//       })
//       .catch((error) => console.log(error.response));
//     Axios.get("/product/pickForYou/" + props.product_id, getHeader())
//       .then((res) => {
//         this.setState({
//           pickForYou: res.data.map((product, index) => (
//             <CategoryContainer key={index} product={product} />
//           ))

//         })
//       })
//       .catch((error) => console.log(error.response));
//   }

//   render() {
//     return (
//       <body>
//         <div>
//           <BreadCrumb pageName={this.state.product.title} />

//           <div className="section">
//             <div className="container">
//               <div className="row">
//                 <div className="product product-details clearfix">
//                   <ProductPicView images={this.state.product.gallery} />
//                   <ProductBodyDes product={this.state.product} />
//                   <ProductReview
//                     allowReviewInput={true}
//                     description={this.state.product.full_description}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Product Recommdation */}
//         <div class="section">
//           <div class="container">
//             <div class="row">
//               <div class="col-md-12">
//                 <div class="section-title">
//                   <h2 class="title">Picked For You</h2>
//                 </div>
//               </div>
//               {this.state.pickForYou}
//             </div>
//           </div>
//         </div>
//       </body>
//     );
//   }
// }
