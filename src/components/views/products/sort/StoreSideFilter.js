import React from "react";

export default function StoreSideFilter(props) {
  return (
    <div id="aside" className="col-md-3">
      <div className="aside">
        <h3 className="aside-title">Filter by Brand</h3>
        <ul className="list-links">
          <li>
            <a href="#">Nike</a>
          </li>
          <li>
            <a href="#">Adidas</a>
          </li>
          <li>
            <a href="#">Polo</a>
          </li>
          <li>
            <a href="#">Lacost</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
