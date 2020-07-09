import React, { Component } from "react";
import { et } from "date-fns/esm/locale";

export default class WriteReview extends Component {
// Try change to function
  constructor(props) {
    super(props);
    this.state = {
      review: '',
      rated: 0,
      productId: props.productId,
    }

    this.submitReview = this.submitReview.bind(this);
    this.updateRating = this.updateRating.bind(this);
  }

  submitReview() {
    
  }

  updateRating(e) {
    this.setState({
      rated: e.target.value
    })
    // console.log(e.target.value);
    console.log(this.state.rated);
  }


  render() {
    return (
      <div className="col-md-6">
        <h4 className="text-uppercase">Write Your Review</h4>
        <p>Your profile information will not be published.</p>
        <form className="review-form">
          <div className="form-group">
            <textarea className="input" placeholder="Your review" onChange={(e) => console.log(e.target.value)}></textarea>
          </div>
          <div className="form-group">
            <div className="input-rating">
              <strong className="text-uppercase">Your Rating: </strong>
              <div className="stars" onChange={e => this.updateRating(e) }>
                <input type="radio" id="star5" name="rating" value={5} />
                <label for="star5"></label>
                <input type="radio" id="star4" name="rating" value={4} />
                <label for="star4"></label>
                <input type="radio" id="star3" name="rating" value={3} />
                <label for="star3"></label>
                <input type="radio" id="star2" name="rating" value={2} />
                <label for="star2"></label>
                <input type="radio" id="star1" name="rating" value={1} />
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
