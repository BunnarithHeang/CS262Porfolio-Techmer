import React from "react";
import AwesomeSlider from "react-awesome-slider";
import AwsSliderStyles from "react-awesome-slider/src/styles";

export default function ProductPicView(props) {
  var images = [];
  if (props.images != null) {
    for (var i = 0; i < props.images.length; ++i) {
      images.push(
        <div data-src={props.images[i]} alt="Product Image Unavailable" key={i}/>
      );
    }
  }
  return (
    <div className="col-md-6">
      <div id="product-main-view">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <AwesomeSlider 
              cssModule={AwsSliderStyles} 
              startupScreen={startupScreen}
            >
              {images}
            </AwesomeSlider>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {}

const startupScreen = (
  <div style={{ backgroundColor: 'transparent' }}>
    <label>Loading Image...</label>
  </div>
);