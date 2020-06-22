import React, { Component } from 'react';
import BreadCrumb from './../universal_components/BreadCrumb';
import ProductItem from './FullWidthProductItem';

export default class FavoritePage extends Component {

    render() {
        var products = [];
        for (var i = 0; i < 9; ++i) {
            products.push(<ProductItem />);
        }
        return (
            <body>
                <div>
                    <BreadCrumb pageName={"Favorite Products"}/>

                    <div className="section">
                        <div className="container">
                            <div className="row">
                                <h4>Products that you might find interesting</h4>
                                <h5>Based on you browsing history</h5>
                                <div id="main" className="col-md-12">
                                    
                                    <div id="store"> 
                                        <div className="row">
                                            {products}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>           
                </div>
                {/* <script src="./../../../js/jquery.min.js" />
                <script src="./../../../js/bootstrap.min.js" />
                <script src="./../../../js/slick.min.js" />
                <script src="./../../../js/nouislider.min.js" />
                <script src="./../../../js/jquery.zoom.min.js" />
                <script src="./../../../js/main.js" /> */}
            </body>
        )
    }
}
