
import SingleProduct from "./SingleProduct"
import img1 from "../../../images/img-products/1.jpg"
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
            <div>
            <SingleProduct badge="HOT" imgsrc={img1} discount="-20%" price="7$" after="5.6"/>
            <SingleProduct badge="HOT" imgsrc={img1} discount="-30%" price="5$" after="3.5"/>
            <SingleProduct badge="NEW" imgsrc={img1} discount="-10%" price="4$" after="3.6"/>
            </div>
            <div>
            <SingleProduct badge="HOT" imgsrc={img1} discount="-20%" price="7$" after="5.6"/>
            <SingleProduct badge="HOT" imgsrc={img1} discount="-30%" price="5$" after="3.5"/>
            <SingleProduct badge="NEW" imgsrc={img1} discount="-10%" price="4$" after="3.6"/>
            </div>
            
        </Slider>
      </div>
    );
  }
}