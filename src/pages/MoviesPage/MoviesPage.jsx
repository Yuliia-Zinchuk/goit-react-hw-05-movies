//import { SearchPage } from 'pages/SearchPage/SearchPage';
//import { SearchMovies } from 'components/SearchMovies/SearchMovies';
//import { Outlet } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom/dist';
import {
  fetchMovieById,
  fetchMovieByQuery,

  //fetchMoviesPopular,
} from 'services/fetchApi';

export const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSeachParams] = useSearchParams();
  const queryMovie = searchParams.get('query');

  const location = useLocation();
  console.log(queryMovie);

  useEffect(() => {
    if (queryMovie === null || queryMovie === '') return;

    async function fetchMovies() {
      const data = await fetchMovieByQuery(queryMovie);
      setMovies(data);
    }
    fetchMovies();
  }, [queryMovie]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setSeachParams({ query: form.elements.query.value });
    form.reset();
  };
  // const e = useSearchParams({query: e.target.value});
  //{(submit = () => {})}
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />

        <button type="submit">Search</button>
      </form>

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
                <Link to={`/movies/${id}`} state={{ from: location }}>
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

//   value={imageQuery}
//   onChange={handleImageChange}
//   value={imageQuery}
//   onChange={handleImageChange}

//   className={css.SearchForm_input}
//   className={css.SearchForm_button}
//     <div>искать тут searchBar создать и подключить</div>;
