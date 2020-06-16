
import React, { Component } from 'react'
import NewCollection from "./Home/NewCollection"
import img1 from "../../images/img-products/1.jpg"
import img2 from "../../images/img-products/img-arduino.jpg"
import EventTitle from "./Home/EventTitle"
import HotDeal from "./Home/HotDeal"
import ProductSlick from "./Home/ProductSlick"
import "../../scss/home-page.scss"
export default class Home extends Component {
    render() {
        return (
            <div className="homepage">
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <NewCollection imgsrc={img1}/>
                            <NewCollection imgsrc={img1}/>
                            <NewCollection imgsrc={img1}/>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 ">
                                <EventTitle title="hot deals"/>
                            </div>
                            <div className="col-md-12 hero">
                                <HotDeal imgsrc={img2}/>
                                <ProductSlick />
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="row">
                            <div className="col-md-12 ">
                                <EventTitle title="popular products"/>
                            </div>
                            <div className="col-md-12 hero">
                                <HotDeal imgsrc={img2}/>
                                <ProductSlick />
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="row">
                            <div className="col-md-12 ">
                                <EventTitle title="best rating"/>
                            </div>
                            <div className="col-md-12 hero">
                                <HotDeal imgsrc={img2}/>
                                <ProductSlick />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        );
    }
}
