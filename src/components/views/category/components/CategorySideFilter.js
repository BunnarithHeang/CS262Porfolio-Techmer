import React from "react";

export default function CategorySideFilter(props) {
  const categoryList = props.categoryList.map(
    (category, index) => 
    <li key={category.id}>
      <div onClick={() => props.getCategoryProduct(category.id)}>
        <a href="#" onClick={e => e.preventDefault()}
          style={props.selectedIndex == index ? selectedLabel : {}}>
          {(category.category).charAt(0).toUpperCase() + category.category.slice(1)}
        </a>
      </div>
    </li>
  );

  return (
    <div id="aside" className="col-md-3">
      <div className="aside">
        <h3 className="aside-title">Category</h3>
        <ul className="list-links categorySidebarA">
          {categoryList}
        </ul>
      </div>
    </div>
  );
}

const selectedLabel = {
  "color": "#F8694A !important",
  "-webkitTransform": "translateX(10px)",
  "-msTransform": "translateX(10px)",
  "transform": "translateX(10px)",
}