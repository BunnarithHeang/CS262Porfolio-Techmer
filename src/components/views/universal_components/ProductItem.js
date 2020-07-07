import React from "react";
import ItemPic from "./../../../images/item1Pic.jpg";
import { Link, Redirect } from "react-router-dom";
import RatedStar from "../product/components/review_views/RatedStar";

export default function ProductItem(props) {
  return (
    <div className="col-md-4 col-sm-6 col-xs-6">
      <div className="product product-single">
        <div className="product-thumb">
          <div className="product-label">
            {/* Just pass these 2 props */}
            {props.isNew 
              ? <span>New</span> 
              : ""}
            {props.hasDiscount 
              ? <span className="sale">-20%</span> 
              : ""}
          </div>
          <button className="main-btn quick-view">
            <i className="fa fa-search-plus"></i> Quick view
          </button>
          <img src={ItemPic} alt="Picture Here" />
        </div>
        <div className="product-body">
          <h3 className="product-price">
            $32.50 <del className="product-old-price">$45.00</del>
          </h3>
          <div className="product-rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-o empty"></i>
          </div>
          <h2 className="product-name">
            <a href="#">Product Name Goes Here</a>
          </h2>
          <div className="product-btns">
            <button className="main-btn icon-btn">
              <i className="fa fa-heart"></i>
            </button>
            <button className="main-btn icon-btn">
              <i className="fa fa-exchange"></i>
            </button>
            <button className="primary-btn add-to-cart">
              <i className="fa fa-shopping-cart"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function CategoryContainer(props) {
//   const product = props.product;

//   return (
//     <div className="col-md-4 col-sm-6 col-xs-6">
//       <div className="product product-single">
//         <div className="product-thumb">
//           <div className="product-label">
//             {
//               props.product.product_option[0].discount != 0
//                 ? <span className="sale">{props.product.product_option[0].discount}%</span>
//                 : ''
//             }
//           </div>
//           <img src={product.gallery[0]} style={imageStyle} alt="Picture Here" />
//         </div>
//         <div className="product-body">
//           <RatedStar rated={product.rated} />
//           <h3 className="product-price">
//             ${(product.product_option[0].price).toFixed(2)} 
//             <br/>
//             <del className="product-old-price">${(product.product_option[0].price * 2.3).toFixed(2)}</del>
//           </h3> 
//           <h2 className="product-name">
//           <Link to="/product/1">
//             <label className="categoryItemTitle">
//               {product.title}
//             </label>
//           </Link>
//           </h2>
//           <div className="product-btns">
//             <button className="primary-btn add-to-cart">
//               <i className="fa fa-shopping-cart"></i> Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

const imageStyle = {
  objectFit: 'cover',
  height: '200px',
}