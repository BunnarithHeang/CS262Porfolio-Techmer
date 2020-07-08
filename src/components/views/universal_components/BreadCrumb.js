import React from "react";
import { Link } from "react-router-dom";

export default function BreadCrumb(props) {
  return (
    <div id="breadcrumb">
      <div class="container">
        <ul class="breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li class="active">{props.pageName}</li>
        </ul>
      </div>
    </div>
  );
}
