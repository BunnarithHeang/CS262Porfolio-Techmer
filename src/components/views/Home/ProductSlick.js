
import SingleProduct from "./SingleProduct"
import img1 from "../../../images/img-products/1.jpg"
import React, { Component } from 'react'
import Sliders from "./Slider"
export default class ProductSlick extends Component {
    render() {
        return (
            <React.Fragment>
            <div class="col-md-9 col-sm-6 col-xs-6">
					<div class="row">
                        <Sliders />
					</div>
			</div>
        </React.Fragment>
        )
    }
}