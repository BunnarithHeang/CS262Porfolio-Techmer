import React from "react";
import RatedStar from "./RatedStar";

export default function SingleReview(props) {
  return (
    <div className="single-review">
      <div className="review-heading">
        <div>
          <a href="#">
            <i className="fa fa-user-o"></i>{props.feedback.user ?? ''}
          </a>
        </div>
        <div>
          <a href="javascript:;">
            <i className="fa fa-clock-o"></i>{props.feedback.time ?? ''}
          </a>
        </div>
        <RatedStar rated={props.feedback.rated}/>
      </div>
      <div className="review-body">
        <p>{props.feedback.feedback}</p>
      </div>
    </div>
  );
}
