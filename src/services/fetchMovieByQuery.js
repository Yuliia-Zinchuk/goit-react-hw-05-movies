import axios from 'axios';
//import { transformCast } from 'helpers/transformCast';

//import { transformReviews } from 'helpers/transformReviews';
const API_KEY = '89e906a95928d3d1981707d668e671c3';

axios.defaults.baseURL = 'http://api.themoviedb.org/3';

// export async function fetchMoviesPopular() {
//   const response = await axios('/trending/movie/week', {
//     params: {
//       api_key: API_KEY,
//       size: 20,
//     },
//   });
//   return response.data.results;
// }

// export async function fetchMovieById(movieId) {
//   const response = await axios(`/movie/${movieId}`, {
//     params: {
//       api_key: API_KEY,
//     },
//   });

//   return response.data;
// }

// export async function fetchMovieCast(movieId) {
//   const response = await axios(`/movie/${movieId}/credits`, {
//     params: {
//       api_key: API_KEY,
//     },
//   });
//   return transformCast(response.data.cast);
// }

// export async function fetchMovieReviews(movieId) {
//   const response = await axios(`/movie/${movieId}/reviews`, {
//     params: {
//       api_key: API_KEY,
//     },
//   });
//   return transformReviews(response.data.results);
// }

export async function fetchMovieByQuery(query) {
  const response = await axios(`/search/movie`, {
    params: {
      api_key: API_KEY,
      size: 20,
      query,
    },
  });
  return response.data.results;
}
