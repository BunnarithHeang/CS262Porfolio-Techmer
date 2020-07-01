import React from "react";

export default function CategorySideFilter(props) {
  const categoryList = props.categoryList.map(
    category => 
    <li>
      <a href={category.id}>{category.category}</a>
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
