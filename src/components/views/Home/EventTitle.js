import React from 'react'

const EventTitle = props => {
    return (
        <div className="section-title">
            <h2 className="title">{props.title}</h2>
            <div className="pull-right">
                <div className="product-slick-dots-1 custom-dots"></div>
            </div>
        </div>
    );
}
export default EventTitle