import axios from 'axios';
import { transformMoviesList } from 'helpers/transformMoviesList';

const API_KEY = '89e906a95928d3d1981707d668e671c3';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchMoviesTrending() {
  const response = await axios('/trending/movie/day', {
    params: {
      api_key: API_KEY,
      size: 20,
    },
  });
  return transformMoviesList(response.data.results);
}
