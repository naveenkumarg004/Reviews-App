import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onRightClick = () => {
    const {index} = this.state
    const {reviewsList} = this.props

    if (index < reviewsList.length - 1) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  onLeftClick = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  renderActiveReview = current => {
    const {imgUrl, username, companyName, description} = current
    return (
      <div className="changing-cont">
        <img className="pro-pic" alt={username} src={imgUrl} />
        <p className="name">{username}</p>
        <p className="c-name">{companyName}</p>
        <p className="desc">{description}</p>
      </div>
    )
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props

    const currentReview = reviewsList[index]

    return (
      <div className="bg">
        <div className="content">
          <h1 className="reviews-head">Reviews</h1>
          <div className="sub-cont">
            <button
              className="arrow-btn"
              type="button"
              onClick={this.onLeftClick}
              data-testid="leftArrow"
            >
              <img
                alt="left arrow"
                className="arrow"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              />
            </button>
            {this.renderActiveReview(currentReview)}
            <button
              className="arrow-btn"
              type="button"
              onClick={this.onRightClick}
              data-testid="rightArrow"
            >
              <img
                alt="right arrow"
                className="arrow"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
