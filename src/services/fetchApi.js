import axios from 'axios';
const API_KEY = '89e906a95928d3d1981707d668e671c3';

axios.defaults.baseURL = 'http://api.themoviedb.org/3';

export async function fetchMoviesPopular() {
  const response = await axios('/trending/movie/day', {
    params: {
      api_key: API_KEY,
      size: 20,
    },
  });
  return response.data.results;
}
//console.log(fetchMoviesPopular());
//fetchMoviesPopular().then(data => console.log(data));

//api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
//const id='Batman'
//const movieId = 94997;
export async function fetchMovieById(movieId) {
  const response = await axios(`/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
      //query: 'Batman',
    },
  });
  return response.data;
}

//fetchMovieById(95403).then(data => console.log(data));
fetchMovieById(869025).then(data => console.log(data.genres[1].name));
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

export async function fetchMovieByCast(movieId) {
  const response = await axios(`/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
      //   query: 'Batman',
      //   name: 'Batman',
    },
  });
  return response.data;
}

fetchMovieByCast(949423).then(data => console.log(data.cast.name));
//вот эта name не работает - надо промепать
