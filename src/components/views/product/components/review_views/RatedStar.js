import React from "react";

export default function RatedStar(props) {
  function showFunction(rated) {
    let show = [];
    for (let l = 0; l < Math.ceil(rated); l++) {
      show.push(<i className="fa fa-star"></i>);
    }
    show.push(
      rated - Math.ceil(rated) > 0.5 ? (
        <i className="fa fa-star-o"></i>
      ) : rated - Math.ceil(rated) == 0 ? (
        <i className="fa fa-star-o"></i>
      ) : (
        <i className="fa fa-star-half-o"></i>
      )
    );
    for (let l = 0; l < 5 - Math.ceil(rated); l++) {
      show.push(<i className="fa fa-star-o"></i>);
    }
    return show;
  }

  return <div className="product-rating">{showFunction(props.rated)}</div>;
}
