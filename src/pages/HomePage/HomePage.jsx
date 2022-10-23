import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
//import { useLocation } from 'react-router-dom/dist';
import { fetchMovieById, fetchMoviesPopular } from 'services/fetchApi';

export const HomePage = () => {
  const location = useLocation();
  console.log(location);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMoviesPopular()
      .then(setMovies)
      .catch(error => console.log(error));
    // console.log(movies);
  }, []);
  console.log(movies);

  // const ProductDetails = () => {
  //   const { productId } = useParams();
  //   return <div>Now showing product with id - {productId}</div>;
  // };

  return (
    <>
      {/* {movies ? <h1>Welcome to MOVIES APP </h1> : <p>Error прописать какой-то если в стейте будет error true</p>} */}
      {movies && (
        <ul>
          {movies.map(({ original_title, original_name, id }) => {
            return (
              <li
                key={id}
                onClick={() => {
                  fetchMovieById(id);
                }}
              >
                <Link to={`movies/${id}`} state={{ from: location }}>
                  {original_title}
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
