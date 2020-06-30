import React from 'react'
import { Link } from 'react-router-dom'
export default function HotDeal(props) {
    return (
        <div className="col-md-3 col-sm-6 col-xs-6">
            <div className="banner banner-2">
                    <img src={props.imgsrc} className="img-responsive"/>
                <div>
                    <h2 className="text-dark">NEW COLLECTION</h2>
                    <Link to ="/products" className="btn btn-danger">Go shop</Link>
                </div>
            </div>
        </div>
    );
}
