import React from "react";
import PropTypes from "prop-types";
import { Redirect, Link } from "react-router-dom";

export default function ProductItem(props) {
  const product = props.product;
  let qtyOptions = [];

  if (product.qty > 10) product.qty = 10;
  for (var i = 0; i < 11; ++i) {
    qtyOptions.push(
      <option key={i} value={i}>
        {i === 0 ? i + " (Delete)" : i}
      </option>
    );
  }

  console.log(product.productOption.option);
  let onePrice = ((100 - product.productOption.discount)/100 * product.productOption.price);
  return (
    <React.Fragment>
      <tr>
        <td
          style={{ height: "125px" }}
          className="cart_product_img d-flex align-items-center"
        >
          <div>
            <div style={{ width: "20%", height: "100%", float: "left" }}>
              <Link to={"/product/" + product.id}>
                <img
                  src={product.galleryUrl}
                  alt="Product Image Unavailable"
                  style={{ width: "100%", height: "125px", objectFit: "cover" }}
                />
              </Link>
            </div>

            <div style={{ width: "100%" }}>
              <Link to={"/product/" + product.product_id} style={itemLabelStyle}>
                {product.title.length > 70
                  ? product.title.substr(0, 70) + " ..."
                  : product.title}
              </Link>
              <br />
              <label style={itemBrandStyle}>
                {"Option: " + product.productOption.option}
              </label>
              <br />
              <label style={itemBrandStyle}>
                {"Brand: " + product.brand.substr(0, 10)}
              </label>
              <br />
              <label style={itemBrandStyle}>
                {"Des: " + product.short_description.substr(0, 50) + " ..."}
              </label>
              <br />
              <a
                href="javascript:;"
                style={deleteBtn}
                onClick={() => props.onQtyChange(0, product.id)}
              >
                Delete
              </a>
            </div>
          </div>
        </td>
        <td className="price">${onePrice.toFixed(2)}</td>
        <td className="qty">
          <div className="quantity">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Qty:
              </label>
            </div>
            <select
              value={product.qty}
              className="custom-select"
              onChange={(e) => props.onQtyChange(e.target.value, product.id)}
            >
              {qtyOptions}
            </select>
          </div>
        </td>
        <td className="total_price">
          ${(product.qty * onePrice).toFixed(2)}
        </td>
      </tr>
    </React.Fragment>
  );
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  onQtyChange: PropTypes.func.isRequired,
};

const itemBrandStyle = {
  fontWeight: "normal",
  fontSize: "12px",
  color: "grey",
  marginLeft: "15px",
  marginBottom: "0",
};

const itemLabelStyle = {
  fontSize: "15px",
  fontWeight: "normal",
  color: "#0066c0",
  marginLeft: "15px",
};

const deleteBtn = {
  color: "#F8694A",
  marginLeft: "15px",
  marginTop: "5px",
  fontSize: "14px",
  marginBottom: "0",
};
