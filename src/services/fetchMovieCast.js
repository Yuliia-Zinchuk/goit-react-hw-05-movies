import axios from 'axios';
import { transformCast } from 'helpers/transformCast';

const API_KEY = '89e906a95928d3d1981707d668e671c3';
axios.defaults.baseURL = 'http://api.themoviedb.org/3';

export async function fetchMovieCast(movieId) {
  const response = await axios(`/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return transformCast(response.data.cast);
}
