import axios from 'axios';
import { transformReviews } from 'helpers/transformReviews';

const API_KEY = '89e906a95928d3d1981707d668e671c3';

axios.defaults.baseURL = 'http://api.themoviedb.org/3';

export async function fetchMovieReviews(movieId) {
  const response = await axios(`/movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return transformReviews(response.data.results);
}
