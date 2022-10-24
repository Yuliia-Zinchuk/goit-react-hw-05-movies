import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MovieList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom/dist';
import { fetchMovieByQuery } from 'services/fetchMovieByQuery';

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
        .catch()
        .finally(() => {
          setIsLoading(false);
        });
    }
    fetchMovies();
  }, [queryMovie]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    console.log(form.elements.query.value);
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
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />

        <button type="submit">Search</button>
      </form>

      {movies && <MoviesList movies={movies} />}

      {error && <p>Sorry, no results for your request. Please try again</p>}

      {isLoading && <Loader />}
    </>
  );
};

//   className={css.SearchForm_input}
//   className={css.SearchForm_button}
