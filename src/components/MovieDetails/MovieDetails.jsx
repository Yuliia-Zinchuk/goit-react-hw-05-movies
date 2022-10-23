import { Link, Outlet, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';

export const MovieDetails = ({ movie }) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  return (
    <>
      {movie && (
        <>
          <button
            onClick={() => {
              navigate(location?.state?.from ?? '/');
            }}
          >
            Go back
          </button>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              width="400"
            />
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
          <div>
            <p>Additional information</p>
            <nav>
              <ul>
                <li>
                  <Link to="cast">Cast</Link>
                </li>
                <li>
                  <Link to="reviews">Reviews</Link>
                </li>
              </ul>
              <Outlet />
            </nav>
          </div>
        </>
      )}
    </>
  );
};
