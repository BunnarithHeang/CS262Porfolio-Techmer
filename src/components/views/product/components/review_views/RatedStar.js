import React from "react";

export default function RatedStar(props) {
  function showFunction(rated) {
    let show = [];
    let cnt = 0;
    for (let l = 0; l < Math.ceil(rated); l++) {
      show.push(<i className="fa fa-star"></i>);
    }
    show.push(() => {
      if (rated - Math.ceil(rated) > 0.5) {
        return <i className="fa fa-star"></i>;
      } else if (rated - Math.ceil(rated) == 0) {
        return <i className="fa fa-star-o"></i>;
      } else if (rated - Math.ceil(rated) > 0) {
        return <i className="fa fa-star-half-o"></i>;
      }
      cnt++;
    });
    for (let l = 0; l < 5 - Math.ceil(rated) - cnt; l++) {
      show.push(<i className="fa fa-star-o"></i>);
    }
    return show;
  }

  return <div className="product-rating">{showFunction(props.rated)}</div>;
}
