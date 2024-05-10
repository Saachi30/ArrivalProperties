import React from 'react';
import SingleReview from './SingleReview';
import reviews from './reviews';
import './ReviewSection.css'
import Form from '../Form/Form.js';

const ReviewSection = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: '2rem' }}>Feedback from our clients</h2>
      <div className='outerfeedback'>

            <div className="review-section">
              {reviews.map((review, index) => (
                <SingleReview key={index} review={review} />
              ))}
            </div>
       
          <div className='feedbackform'>
            <Form />
          </div>
        </div>
        </div>
     
  );
};

export default ReviewSection;
