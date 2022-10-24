import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useFetchMovies } from 'hooks/useFetchMovies';
import { toast } from 'react-toastify';
import css from './HomePage.module.css';

export const HomePage = () => {
  const { movies, error, isLoading } = useFetchMovies();

  return (
    <>
      <h1 className={css.title}>Trending today</h1>
      {movies && <MoviesList movies={movies} />}
      {error &&
        toast.warning('Sorry, the request cannot be completed! Server error')}
      {isLoading && <Loader />}
    </>
  );
};
