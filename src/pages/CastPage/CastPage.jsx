import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/fetchMovieCast';

export const CastPage = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieCast(movieId)
      .then(data => {
        setCast(data);
        if (!data.length) {
          setError(true);
        }
      })
      .catch(setError)
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <>
      <ul>
        {cast.map(({ id, name, img, character }) => {
          return (
            <li key={id}>
              <img
                src={
                  img
                    ? `https://image.tmdb.org/t/p/w500/${img}`
                    : 'https://www.freeiconspng.com/uploads/no-image-icon-7.gif'
                }
                alt={`${name}`}
                width="100px"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
      {error && <p>There are no reviews for this movie. </p>}
      {isLoading && <Loader />}
    </>
  );
};
