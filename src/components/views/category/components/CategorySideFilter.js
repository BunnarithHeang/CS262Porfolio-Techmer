import React from "react";
import "../../../../scss/category_side_filter.scss";
import { Link, useHistory } from "react-router-dom";

export default function CategorySideFilter(props) {
  const categoryList = props.categoryList.map((category, index) => (
    <li key={category.id}>
      <div onClick={() => props.linkOnClick()}>
        <Link to={"/category/" + category.id} style={props.selectedIndex == index ? selectedLabel : {}}>
          {category.category}
        </Link>
      </div>
    </li>
  ));

  return (
    <div id="aside" className="col-md-3">
      <div className="aside">
        <h3 className="aside-title">Category</h3>
        <ul className="list-links categorySidebarA">{categoryList}</ul>
      </div>
    </div>
  );
}

const selectedLabel = {
  color: "#007bff !important",
  fontSize: "20pt",
};
