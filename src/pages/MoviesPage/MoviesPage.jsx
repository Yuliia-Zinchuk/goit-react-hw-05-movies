import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom/dist';
import { fetchMovieByQuery } from 'services/fetchMovieByQuery';
import css from './MoviesPage.module.css';

export const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSeachParams] = useSearchParams();
  const queryMovie = searchParams.get('query');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (queryMovie === null || queryMovie === '') return;

    async function fetchMovies() {
      setIsLoading(true);
      await fetchMovieByQuery(queryMovie)
        .then(data => {
          setMovies(data);
          if (!data.length) {
            setError(true);
          }
        })
        .catch(setError)
        .finally(() => {
          setIsLoading(false);
        });
    }
    fetchMovies();
  }, [queryMovie]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    if (form.elements.query.value.trim() === '') {
      return toast.warning('Please, enter your request!');
    }

    setSeachParams({ query: form.elements.query.value });

    form.reset();
    setError(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className={css.inputMovie}
          type="text"
          name="query"
          autoComplete="off"
          // autoFocus
          placeholder="Search movies"
        />

        <button className={css.btnSearch} type="submit">
          Search
        </button>
      </form>

      {movies && <MoviesList movies={movies} />}
      {error && <p>Sorry, no results for your request. Please try again</p>}
      {isLoading && <Loader />}
    </>
  );
};

//   className={css.SearchForm_input}
//   className={css.SearchForm_button}
