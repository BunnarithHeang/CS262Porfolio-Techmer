import React from "react";
import { Link } from "react-router-dom";

export default function BreadCrumb(props) {
  return (
    <div id="breadcrumb">
      <div className="container">
        <ul className="breadcrumb">
          <li>
            <Link to="/">Home /</Link>
          </li>
          <li className="active">{props.pageName}</li>
        </ul>
      </div>
    </div>
  );
}
