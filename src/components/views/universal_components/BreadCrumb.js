import React from "react";

export default function BreadCrumb(props) {
  return (
    <div id="breadcrumb">
      <div class="container">
        <ul class="breadcrumb">
          <li>
            <a href="#">Home</a>
          </li>
          <li class="active">{props.pageName}</li>
        </ul>
      </div>
    </div>
  );
}
