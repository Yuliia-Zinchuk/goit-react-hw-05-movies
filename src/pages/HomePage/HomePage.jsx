import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchMovieById } from 'services/fetchMovieById';
//import { useLocation } from 'react-router-dom/dist';
//import { fetchMovieById } from 'services/fetchApi';
import { fetchMoviesTrending } from 'services/fetchMoviesTrending';

export const HomePage = () => {
  const location = useLocation();
  console.log(location);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMoviesTrending()
      .then(setMovies)
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      {/* {movies ? <h1>Welcome to MOVIES APP </h1> : <p>Error прописать какой-то если в стейте будет error true</p>} */}
      {movies && (
        <ul>
          {movies.map(({ title, id }) => {
            return (
              <li
                key={id}
                onClick={() => {
                  fetchMovieById(id);
                }}
              >
                <Link to={`movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      {/* <Outlet /> */}
    </>
  );
};
//fetchMoviesPopular().then(data => console.log(data));
