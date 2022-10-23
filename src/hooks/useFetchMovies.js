import { useEffect, useState } from 'react';
import { fetchMoviesTrending } from 'services/fetchMoviesTrending';
//import { useParams } from 'react-router-dom';
//import { fetchMovieById } from 'services/fetchMovieById';

// export const useFetchMovie = () => {
//   const [movie, setMovie] = useState(null);
//   const { movieId } = useParams();

//   useEffect(() => {
//     fetchMovieById(movieId).then(setMovie);
//   }, [movieId]);

//   return movie;
// };

export const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchMoviesTrending()
      .then(setMovies)
      .catch(setError)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return { movies, error, isLoading };
};
