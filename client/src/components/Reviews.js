import React from "react";

function Reviews({ reviews }) {
  return (
    <div className="reviews">
      <h3>Customer Reviews</h3>
      {reviews &&
        reviews.map((review, index) => (
          <div key={index}>
            <p>
              <strong>{review.username}</strong>: {review.comment}
            </p>
            <p>Rating: {review.rating}</p>
          </div>
        ))}
    </div>
  );
}

export default Reviews;
