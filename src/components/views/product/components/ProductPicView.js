import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import './../../../../css/bootstrap.min.css';

export default function ProductPicView(props) {
  var images = [];
  if (props.images != null) {
    for (var i = 0; i < props.images.length; ++i) {
      images.push(
        <div className={i == 0 ? "item active" : "item"}>
          <img src={props.images[i]} alt="Image Not Found" />
        </div>
      );
    }
  }
  return (
    <div className="col-md-6">
      <div id="product-main-view">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          {/* <!-- Indicators --> */}
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          {/* <!-- Wrapper for slides --> */}
          <div className="carousel-inner">
            {images}
          </div>

          {/* <!-- Left and right controls --> */}
          <a className="left carousel-control" href="javascript:void(0)" data-slide="prev">
            <span className="glyphicon-chevron-left fa fa-arrow-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="javascript:void(0)" data-slide="next">
            <span className="glyphicon-chevron-right fa fa-arrow-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}
