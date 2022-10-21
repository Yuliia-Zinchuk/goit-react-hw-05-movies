import axios from 'axios';
const API_KEY = '89e906a95928d3d1981707d668e671c3';

axios.defaults.baseURL = 'http://api.themoviedb.org/3';

export async function fetchMoviesPopular() {
  const response = await axios('/trending/all/day', {
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
      // query: 'Batman',
    },
  });
  return response.data;
}

fetchMovieById(94997).then(data => console.log(data));

///movie/{ movie_id }
//----------from query
// export async function fetchMovieById() {
//   const response = await axios(`/search/movie`, {
//     params: {
//       api_key: API_KEY,
//       query: 'Batman',
//     },
//   });
//   return response.data;
// }

// fetchMovieById().then(data => console.log(data));
