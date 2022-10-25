import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { useFetchMovie } from 'hooks/useFetchMovie';

const MovieDetailsPage = () => {
  const movie = useFetchMovie();

  return <MovieDetails movie={movie} />;
};

export default MovieDetailsPage;
