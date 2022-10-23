import axios from 'axios';
import { transformCast } from 'helpers/transformCast';
//import { transformMovie } from 'helpers/transformMovie';
import { transformReviews } from 'helpers/transformReviews';
const API_KEY = '89e906a95928d3d1981707d668e671c3';

axios.defaults.baseURL = 'http://api.themoviedb.org/3';

export async function fetchMoviesPopular() {
  const response = await axios('/trending/movie/week', {
    params: {
      api_key: API_KEY,
      size: 20,
    },
  });
  return response.data.results;
}
export async function fetchMovieById(movieId) {
  const response = await axios(`/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
      //query: 'Batman',
    },
  });
  // return transformMovie(response.data);
  return response.data;
}

//fetchMovieById(869025).then(data => console.log(data));
//fetchMovieById(869025).then(data => console.log(data.genres[1].name));
//movie.genres[1].name;

// export async function fetchMovieBy(movieId) {
//   const response = await axios(`/movie/${movieId}/alternative_titles`, {
//     params: {
//       api_key: API_KEY,
//       query: 'Batman',
//     },
//   });
//   return response.data;
// }

// fetchMovieBy(95403).then(data => console.log(data));

//movie/{ movie_id }
//----------from query
// export async function fetchMovieByName() {
//   const response = await axios(`/search/movie`, {
//     params: {
//       api_key: API_KEY,
//       query: 'Batman',
//       name: 'Batman',
//     },
//   });
//   return response.data;
// }

// fetchMovieByName().then(data => console.log(data));

export async function fetchMovieCast(movieId) {
  const response = await axios(`/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
      //   query: 'Batman',
      //   name: 'Batman',
    },
  });
  return transformCast(response.data.cast);
}

fetchMovieCast(663712).then(data => console.log(data));
//вот эта name не работает - надо промепать

export async function fetchMovieReviews(movieId) {
  const response = await axios(`/movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
      //   query: 'Batman',
      //   name: 'Batman',
    },
  });
  return transformReviews(response.data.results);
}

//fetchMovieReviews(718930).then(data => console.log(data));
