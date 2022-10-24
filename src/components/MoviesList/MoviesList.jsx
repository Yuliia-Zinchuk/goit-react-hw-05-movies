import { Link, useLocation } from 'react-router-dom';
import { fetchMovieById } from 'services/fetchMovieById';
import PropTypes from 'prop-types';
import css from './MoviesList.module.css';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul className={css.moviesList}>
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

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
