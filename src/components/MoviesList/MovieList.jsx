//import { MoviesList } from 'components/MoviesList/MovieList';
//import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchMovieById } from 'services/fetchMovieById';

//import { fetchMoviesTrending } from 'services/fetchMoviesTrending';
export const MoviesList = ({ movies }) => {
  const location = useLocation();
  //   console.log(location);
  //   const [movies, setMovies] = useState([]);
  //   useEffect(() => {
  //     fetchMoviesTrending()
  //       .then(setMovies)
  //       .catch(error => console.log(error));
  //   }, []);

  return (
    <>
      <ul>
        {movies.map(({ title, id }) => {
          return (
            <li
              key={id}
              onClick={() => {
                fetchMovieById(id);
              }}
            >
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
