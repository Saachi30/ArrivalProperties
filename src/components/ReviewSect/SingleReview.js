import React from 'react';
import './SingleReview.css'

const SingleReview = ({ review }) => {
  return (
    <div className="single-review">
      <img src={review.profilePic} alt="Profile" className="profile-pic" />
      <div className="review-details">
        <p className="review-name">{review.name}</p>
        <p className="review-text">{review.text}</p>
      </div>
    </div>
  );
};

export default SingleReview;
