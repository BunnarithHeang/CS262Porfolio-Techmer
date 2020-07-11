import React from "react";
import { LinearProgress } from '@material-ui/core';
import WriteReview from "./WriteReview";
import SingleReview from "./SingleReview";
import Axios from "axios";
import { getHeader } from "../../../../../AuthUser";
import StoreTopBottomFilter from "../../../products/sort/StoreTopBottomFilter";


export default function ProductReview(props) {
  const [index, setIndex] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [showingFeedbacks, setShowingFeedbacks] = React.useState([]);
  const [pagination, setPagination] = React.useState([1, 1]); // 0:selectedIndex, 1:maxPageIndex 
  const [allFeedbacks, setAllFeedbacks] = React.useState([]);
  const [feedbacksLoaded, setFeedbacksLoaded] = React.useState(false);

  const updateIndex = (index) => {
    setIndex(index);
    if (!feedbacksLoaded && index === 2)
      getProductFeedbacks();
  };

  const updateFeedback = (feedbacks, pagiIndex) => {
    setPagination([pagiIndex, pagination[1]]);
    var reviewComponents = [];
    // var startIndex = 0;
    // if (pagiIndex == 1) startIndex = 0;
    // else {
    //   for (var i = 1; i < pagiIndex + 3)
    // }
    for (var i = pagination[0] - 1; i < pagination[0] + 2; ++i) {
      if (feedbacks[i] === null) break;
      console.log(feedbacks[i]);
      reviewComponents.push(<SingleReview feedback={feedbacks[i]} key={i}/>)
    }
    setShowingFeedbacks(reviewComponents)
  }

  const getProductFeedbacks = async() => {
    await Axios.get("/product-feedback/each/" + props.productId, getHeader())
      .then((res) => {
        setCount(res.data.length)
        setPagination([1, Math.ceil(res.data.length / 3)])
        updateFeedback(res.data, 1)
        setAllFeedbacks(res.data.map(feedback => feedback))
      })
      .catch((error) => console.log(error.response));
    setFeedbacksLoaded(true)
  }

  return (
    <div className="col-md-12">
      <div className="product-tab">
        <ul className="tab-nav">
          <li className={index === 0 ? "active" : ""}>
            <a href="javascript:;" data-toggle="tab" onClick={() => updateIndex(0)}>
              Description
            </a>
          </li>
          <li className={index === 1 ? "active" : ""}>
            <a href="javascript:;" data-toggle="tab" onClick={() => updateIndex(1)}>
              Details
            </a>
          </li>
          <li className={index === 2 ? "active" : ""}>
            <a href="javascript:;" data-toggle="tab" onClick={() => updateIndex(2)}>
              Reviews { !feedbacksLoaded ? "" : `(${count})` }
            </a>
          </li>
        </ul>
        <div className="tab-content">
          {
            index === 0 
              ? (
                <div className="tab-pane fade in active">
                  <p>{props.description}</p>
                </div>
              ) 
              : index === 1 
                ? (<p>Hello there</p>) 
                : (
                  feedbacksLoaded
                  ? <div className="col-md-12">
                      <StoreTopBottomFilter 
                          maxPageIndex={1}
                          selectedIndex={1}
                          onIndexClick={(index) => {}}
                      />
                      <div className={props.allowReviewInput ? "col-md-6" : "col-md-12"}>
                        <div className="product-reviews">
                          {showingFeedbacks}
                          {/* <a href="javascript:;" target="_blank" rel="noopener noreferrer">
                            <label>Show more reviews</label>
                          </a> */}
                        </div>
                      </div>
                      {props.allowReviewInput ? <WriteReview productId={props.productId}/> : <div></div>}
                    </div>
                  : <LinearProgress color="secondary"/>
                  )
            }
        </div>
      </div>
    </div>
  );
}
