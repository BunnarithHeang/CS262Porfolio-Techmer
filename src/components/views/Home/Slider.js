import SingleProduct from "./SingleProduct";
import img1 from "../../../images/img-products/1.jpg";
import React, { Component } from "react";
import Slider from "react-slick";
import Axios from "axios";
import CategoryContainer from "../category/components/CategoryContainer";

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

export default function SimpleSlider(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    Axios.get("/home-page-product/" + props.title)
      .then((res) => {
        setProducts(
          res.data.map((data, index) => (
            <CategoryContainer product={data} key={index} />
          ))
        );
      })
      .catch((error) => console.log(error.response));
  }, []);
  return (
    <div>
      <Slider {...settings}>
        <div>
          {products[0]}
          {products[1]}
          {products[2]}
        </div>
        <div>
          {products[3]}
          {products[4]}
          {products[5]}
        </div>
      </Slider>
    </div>
  );
}
