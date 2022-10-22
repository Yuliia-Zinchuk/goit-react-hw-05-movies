import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/fetchApi';

export const CastPage = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  //fetchMovieCast(movieId).then(data => console.log(data));

  console.log(useParams());
  console.log(cast);
  return (
    <>
      <ul>
        {cast.map(({ id, name, img, character }) => {
          return (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${img}`}
                alt="name"
                width=""
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
//<div>Cast!!! Нужно сделать фетч и сюда прислать инфу об актерах</div>;
//) =>  {id, name, img, character}
