import React, { Component } from "react";
import Slider from "react-slick";
import Axios from "axios";
import ProductContainer from "./ProductContainer";
import CircularProgress from "@material-ui/core/CircularProgress"
import Loading from "../loading"
import { Link } from "@material-ui/core";

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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };
  const [products, setProducts] = React.useState([]);
  const [loading, setloading] = React.useState(true)
  React.useEffect(() => {
    Axios.get("/home-page-product/" + props.title)
      .then((res) => {
        setloading(false)
        setProducts(
          res.data.map((data, index) => (
            <ProductContainer product={data} key={index} />
          )),
        );
      },
      )
      .catch((error) => console.log(error.response));
  }, []);
  
  return (
    
    <div>
      {loading === true ? (<div className="text-center"><Loading /><CircularProgress /></div>)  :
      <Slider {...settings}>
          {products[0]}
          {products[1]}
          {products[2]}
          {products[3]}
          {products[4]}
          {products[5]}
      </Slider>
    }
    </div>
  );
}