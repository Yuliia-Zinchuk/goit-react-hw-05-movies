import { useFetchMovie } from 'hooks/useFetchEvent';
import { useParams } from 'react-router-dom';

// const ProductDetails = () => {
//   const { productId } = useParams();
//   return <div>Now showing product with id - {productId}</div>;
// };
export const MoviesInfoPage = () => {
  //------рабочий код с с юзпарамс из конспекта без кастомного хука
  //   const { movieId } = useParams();
  //   console.log(useParams());
  //   return <div>Now showing product with id - {movieId}</div>;
  const movie = useFetchMovie();
  //console.log(movie.id);
  return movie && <div>{movie.original_title}</div>;
};
