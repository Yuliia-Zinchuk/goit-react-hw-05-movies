import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { useFetchMovie } from 'hooks/useFetchEvent';
//import { useParams } from 'react-router-dom';

// const ProductDetails = () => {
//   const { productId } = useParams();
//   return <div>Now showing product with id - {productId}</div>;
// };
export const MovieDetailsPage = () => {
  //------рабочий код с с юзпарамс из конспекта без кастомного хука
  //   const { movieId } = useParams();
  //   console.log(useParams());
  //   return <div>Now showing product with id - {movieId}</div>;
  const movie = useFetchMovie();
  //console.log(movie.id);
  return (
    <MovieDetails movie={movie} />
    // movie && (
    //   <div>
    //     {movie.original_title}({movie.release_date})
    //   </div>
    // )
  );
};
