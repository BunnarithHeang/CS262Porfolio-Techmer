import React from "react";
import ItemPic from "./../../../images/item1Pic.jpg";

export default function ProductItem() {
  return (
    <React.Fragment>
      <div className="col-md-12 col-sm-11 col-xs-10" style={itemContainer}>
          <img src={ItemPic} alt="Unvailable Image" className="col-md-4 col-sm-4 col-xs-4"/>  

          <div>
            <label className="itemFullLabel">
              <a href="#" style={itemLabelStyle}>Product Name Goes Here</a>
            </label>
            <div>
              <label style={itemPriceStyle}>
                $32.50 <del className="product-old-price" style={itemPrevPrice}>$45.00</del>
              </label>
              <div className="qty-input">
                <span className="text-uppercase">QTY: </span>
                <input type="number" defaultValue="1" min="1"/>
              </div>
            </div>
          </div>
      </div>
    </React.Fragment>
  );
}

const itemLabelStyle = {
  fontSize: '21px',
  fontWeight: 'normal',
  color: '#0066c0',

}

const itemPriceStyle = {
  fontSize: '21px',
  color: 'black',
  fontWeight: '600',
  width: '50%',
}

const itemPrevPrice = {
  color: 'grey',
  fontSize: '16px',
  fontWeight: 'normal',
}

const itemRating = {
  marginRight: '30px',
  color: '#ffa700',
  float: 'right',
}

const itemContainer = {
  borderBottom: '1px solid #DADADA',
  marginTop: '10px',
  marginBottom: '10px',
}