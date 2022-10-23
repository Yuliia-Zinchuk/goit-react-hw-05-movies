import axios from 'axios';
//import { transformMoviesList } from 'helpers/transformMoviesList';

const API_KEY = '89e906a95928d3d1981707d668e671c3';

axios.defaults.baseURL = 'http://api.themoviedb.org/3';

export async function fetchMovieById(movieId) {
  const response = await axios(`/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });

  //return transformMoviesList(response.data);
  return response.data;
}
