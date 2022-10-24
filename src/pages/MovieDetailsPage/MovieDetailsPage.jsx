import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { useFetchMovie } from 'hooks/useFetchMovie';

export const MovieDetailsPage = () => {
  const movie = useFetchMovie();

  return <MovieDetails movie={movie} />;
};
