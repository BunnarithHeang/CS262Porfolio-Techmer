import React, { Component } from 'react';
import BreadCrumb from './page_components/BreadCrumb';
import StoreSideFilter from './filters/StoreSideFilter';
import StoreTopBottomFilter from './filters/StoreTopBottomFilter';
import ProductItem from './page_components/ProductItem';

export default class ProductSearch extends Component {

    render() {
        var products = [];
        for (var i = 0; i < 9; ++i) {
            products.push(<ProductItem />);
        }
        return (
            <body>
                <div>
                    <BreadCrumb />

                    <div className="section">
                        <div className="container">
                            <div className="row">
                                <StoreSideFilter />

                                <div id="main" className="col-md-9">
                                    <StoreTopBottomFilter />

                                    <div id="store"> {/* <!-- STORE --> */}
                                        <div className="row"> {/* <!-- row --> */}
                                            {products}
                                        </div>
                                    </div>

                                    <StoreTopBottomFilter />
                                </div>
                            </div>
                        </div>
                    </div>           
                </div>
                {/* <script src="./../../../js/jquery.min.js"></script>
                <script src="./../../../js/bootstrap.min.js"></script>
                <script src="./../../../js/slick.min.js"></script>
                <script src="./../../../js/nouislider.min.js"></script>
                <script src="./../../../js/jquery.zoom.min.js"></script>
                <script src="./../../../js/main.js"></script> */}
            </body>
        )
    }
}
