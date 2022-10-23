//import { useFetchMovie } from 'hooks/useFetchMovie';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/fetchApi';

export const CastPage = () => {
  // const movie = useFetchMovie();
  // console.log(movie);
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  //fetchMovieCast(movieId).then(data => console.log(data));

  return (
    <>
      <ul>
        {cast.map(({ id, name, img, character }) => {
          // console.log(img);
          return (
            <li key={id}>
              <img
                src={
                  img
                    ? `https://image.tmdb.org/t/p/w500/${img}`
                    : 'https://www.freeiconspng.com/uploads/no-image-icon-7.gif'
                }
                alt={`${name}`}
                width="100px"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
