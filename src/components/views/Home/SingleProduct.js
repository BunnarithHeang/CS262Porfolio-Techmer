import React from 'react'

export default function productSingle(props) {
    return (
        <React.Fragment>
            <div class="product product-single col-md-4">
                <div class="product-thumb">
                    <div class="product-label">
                    <span class="badge">{props.badge}</span>
                    <span class="sale">{props.discount} </span>
                    </div>
                    <button class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>
                    <img src={props.imgsrc} alt="img1" class="img-responsive"/>
                </div>
                <div class="product-body">
                    <h3 class="product-price">{props.price}<del class="product-old-price">{props.after}</del></h3>
                    <div class="product-rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o empty"></i>
                    </div>
                    <h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
                    <div class="product-btns">
                        <button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
                        <button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
                        <button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}