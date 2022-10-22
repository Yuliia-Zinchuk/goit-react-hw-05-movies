import { Link, Outlet } from 'react-router-dom';

export const MovieDetails = ({ movie }) => {
  return (
    movie && (
      <>
        <div>
          <h2>
            {movie.original_title} ({`${movie.release_date}`.slice(0, 4)})
          </h2>
          <p>Use score: {movie.popularity}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Overview</h3>
          <p>{movie.genres[1].name}</p>
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
    )
  );
};
