import React, { Component } from "react";
import img2 from "../../images/img-products/img-arduino.jpg";
import EventTitle from "./Home/EventTitle";
import HotDeal from "./Home/HotDeal";
import "../../scss/home-page.scss";
import Sliders from "./Home/Slider";
export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="homepage">

          <div className="section">
            <div className="container">
              <div className="row">
                <div className="col-md-12 ">
                  <EventTitle title="hot deals" />
                </div>
                <div className="col-md-12 hero">
                  <HotDeal imgsrc={img2} />
                  <div className="col-md-9 col-sm-12 col-xs-12">
                    <Sliders title="productHotDeal" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 ">
                  <EventTitle title="popular products" />
                </div>
                <div className="col-md-12 hero">
                  <HotDeal imgsrc={img2} />
                  <div className="col-md-9 col-sm-12 col-xs-12">
                    <Sliders title="productPopular" />
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="row">
                <div className="col-md-12 ">
                  <EventTitle title="best rating" />
                </div>
                <div className="col-md-12 hero">
                  <HotDeal imgsrc={img2} />
                  <div className="col-md-9 col-sm-12 col-xs-12">
                    <Sliders title="productBestRating" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}
