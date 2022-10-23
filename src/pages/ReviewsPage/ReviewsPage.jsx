import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/fetchApi';

export const ReviewsPage = () => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieReviews(movieId).then(setReview);
  }, [movieId]);
  console.log(review);
  return (
    <>
      {review ? (
        <ul>
          {review.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>сделать компонент на ошибку и активировать его </p>
      )}
    </>
  );
};
