import React, { Component } from "react";

export default class WriteReview extends Component {
  render() {
    return (
      <div className="col-md-6">
        <h4 className="text-uppercase">Write Your Review</h4>
        <p>Your profile information will not be published.</p>
        <form className="review-form">
          <div className="form-group">
            <textarea className="input" placeholder="Your review"></textarea>
          </div>
          <div className="form-group">
            <div className="input-rating">
              <strong className="text-uppercase">Your Rating: </strong>
              <div className="stars">
                <input type="radio" id="star5" name="rating" value="5" />
                <label for="star5"></label>
                <input type="radio" id="star4" name="rating" value="4" />
                <label for="star4"></label>
                <input type="radio" id="star3" name="rating" value="3" />
                <label for="star3"></label>
                <input type="radio" id="star2" name="rating" value="2" />
                <label for="star2"></label>
                <input type="radio" id="star1" name="rating" value="1" />
                <label for="star1"></label>
              </div>
            </div>
          </div>
          <button className="primary-btn">Submit</button>
        </form>
      </div>
    );
  }
}
