import React from 'react';
import reviews from '../../public/Reviews';
import styles from '../ElementStyles/ReviewSectionStyles.module.css';

function ReviewsSection() {
  return (
    <div className={styles.reviewsWrapper}>
      <div className={styles.reviewsContainer}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.reviewCard}>
            <img src={review.imgsource} alt={review.title} />
            <h3>{review.title}</h3>
            <p>{review.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewsSection;
