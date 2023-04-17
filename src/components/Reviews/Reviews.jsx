import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from 'API/api-service';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const message = "We don't have any reviews for this movie";

  useEffect(() => {
    api.getReviews(movieId).then(item => {
      setReviews(item);
    });
  }, [movieId]);

  return reviews.length === 0 ? (
    <p>{message}</p>
  ) : (
    <ul>
      {reviews.map(review => {
        return (
          <li key={review.id}>
            <h2>
              <span>autor:</span> {review.author}
            </h2>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
