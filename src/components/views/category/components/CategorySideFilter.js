import React from "react";
import "../../../../scss/category_side_filter.scss";
import { Link, useHistory } from "react-router-dom";

export default function CategorySideFilter(props) {
  const history = useHistory();
  const categoryList = props.categoryList.map((category, index) => (
    <li key={category.id}>
      <Link to={"/category/" + category.id}>{category.category}</Link>
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
  // "-webkitTransform": "translateX(10px)",
  // "-msTransform": "translateX(10px)",
  // transform: "translateX(10px)",
};
