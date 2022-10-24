import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MovieList';
import { useFetchMovies } from 'hooks/useFetchMovies';
import { toast } from 'react-toastify';

export const HomePage = () => {
  const { movies, error, isLoading } = useFetchMovies();

  return (
    <>
      {movies && <MoviesList movies={movies} />}
      {error &&
        toast.warning('Sorry, the request cannot be completed! Server error')}
      {isLoading && <Loader />}
    </>
  );
};
