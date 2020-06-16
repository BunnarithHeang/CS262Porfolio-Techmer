import React from 'react'

const HotDeal = props => {
    return (
        <div className="col-md-3 col-sm-6 col-xs-6">
            <div className="banner banner-2">
                    <img src={props.imgsrc} className="img-responsive"/>
                <div>
                    <h2 className="text-dark">NEW COLLECTION</h2>
                    <button className="primary-btn">Go Shop</button>
                </div>
            </div>
        </div>
    );
}
export default HotDeal