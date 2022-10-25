import { Link, Outlet, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';
import PropTypes from 'prop-types';
import css from './MovieDetails.module.css';
import { Suspense } from 'react';

export const MovieDetails = ({ movie }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {movie && (
        <>
          <button
            className={css.btnSearch}
            onClick={() => {
              navigate(location?.state?.from ?? '/');
            }}
          >
            Go back
          </button>
          <div className={css.movieWraper}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : 'https://www.freeiconspng.com/uploads/movie-icon-19.png'
              }
              alt={movie.title}
              width="300"
            />
            <div>
              <h2>
                {movie.title} ({`${movie.release_date}`.slice(0, 4)})
              </h2>
              <p>Use score: {Math.round(movie.vote_average * 10)}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>
                {movie.genres.map(({ id, name }) => {
                  return <span key={id}>{name} </span>;
                })}
              </p>
            </div>
          </div>
          <div className={css.addInfoWraper}>
            <h4>Additional information</h4>
            <nav>
              <ul>
                <li>
                  <Link to="cast" state={location.state}>
                    Cast
                  </Link>
                </li>
                <li>
                  <Link to="reviews" state={location.state}>
                    Reviews
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <Suspense fullback={null}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.object,
};
