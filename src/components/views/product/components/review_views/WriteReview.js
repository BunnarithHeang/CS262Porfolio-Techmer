import React, { Component } from "react";
import Axios from "axios";
import { getUser, getHeader } from '../../../../../AuthUser';
import { Redirect } from "react-router-dom";

export default class WriteReview extends Component {

  constructor(props) {
    super(props);
    this.state = {
      review: "",
      rated: 0,
      productId: props.productId,
    };

    this.submitReview = this.submitReview.bind(this);
    this.updateRating = this.updateRating.bind(this);
  }

  async submitReview() {
    let user = getUser();
    console.log(user.isAuth);
    if (!user.isAuth) {
      return <Redirect to="/login" />
    }
    let data =  {
      'user_id': user.user_id,
      'product_id': this.state.productId,
      'feedback': this.state.review,
      'rated': this.state.rated,
    }
    let url = '/product-feedback';
    await Axios.post(url, data, getHeader()) 
      .then((res) => {
        console.log(res.data);  
      })
      .catch((error) => console.log(error.response))
    this.setState({
      review: '', rated: 0,
    })
  }

  updateRating(e) {
    this.setState({
      rated: e.target.value,
    });
  }

  updateReviewText(e) {
    this.setState({
      review: e.target.value
    })
  }

  render() {
    return (
      <div className="col-md-6">
        <h4 className="text-uppercase">Write Your Review</h4>
        <p>Your profile information will not be published.</p>
        <form className="review-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <textarea className="input" placeholder="Your review" value={this.state.review} onChange={(e) => this.updateReviewText(e)}></textarea>
          </div>
          <div className="form-group">
            <div className="input-rating">
              <strong className="text-uppercase">Your Rating: </strong>
              <div className="stars" value={this.state.rated} onChange={(e) => this.updateRating(e)}>
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
          <button className="primary-btn" onClick={this.submitReview}>Submit</button>
        </form>
      </div>
    );
  }
}
