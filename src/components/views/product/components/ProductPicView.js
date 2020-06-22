import React from "react";
import 'font-awesome/css/font-awesome.min.css';

export default function ProductPicView(props) {
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
            <div className="item active">
              <img src={props.img} alt="Image Not Found" />
            </div>

            <div className="item">
              <img src={props.img} alt="Image Not Found" />
            </div>

            <div className="item">
              <img src={props.img} alt="Image Not Found York" />
            </div>
          </div>

          {/* <!-- Left and right controls --> */}
          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon-chevron-left fa fa-arrow-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon-chevron-right fa fa-arrow-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}
