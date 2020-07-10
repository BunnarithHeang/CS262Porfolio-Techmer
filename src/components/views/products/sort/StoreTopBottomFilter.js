import React from "react";
import PropTypes from 'prop-types';

export default function StoreTopFilter(props) {
  var indexes = [];
  let currentSelected = props.selectedIndex;
  for (var i = 1; i <= props.maxPageIndex; ++i) {
    let tmp = i;
     indexes.push(
      <li className={i === props.selectedIndex ? "active" : ""}
        style={{ fontSize: '15px' }}
        onClick={() => props.onIndexClick(tmp)}
      >
         {i}
      </li>
    );
  }

  return (
    // <!-- store top filter -->
    <div className="store-filter clearfix">
      <div className="pull-right">
        <ul className="store-pages">
          <li>
            <span className="text-uppercase">Page:</span>
          </li>
          <li>
            <div onClick={() => props.onIndexClick(currentSelected - 1)}>
              <i className="fa fa-caret-left"></i>
            </div>
          </li>
          {indexes}
          <li>
            <div onClick={() => props.onIndexClick(currentSelected + 1)}>
              <i className="fa fa-caret-right"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

StoreTopFilter.prototype = {
  selectedIndex: PropTypes.number.isRequired,
  maxPageIndex: PropTypes.number.isRequired,
  onIndexClick: PropTypes.func.isRequired,
}