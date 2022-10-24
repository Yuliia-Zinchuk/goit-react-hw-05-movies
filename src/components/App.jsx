import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { MoviesPage } from 'pages/MoviesPage/MoviesPage';
import { MovieDetailsPage } from 'pages/MovieDetailsPage/MovieDetailsPage';
//import { MovieDetails } from './MovieDetails/MovieDetails';
import { CastPage } from 'pages/CastPage/CastPage';
//import { SearchPage } from 'pages/SearchPage/SearchPage';
import { ReviewsPage } from 'pages/ReviewsPage/ReviewsPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Home from 'path/to/pages/Home';
// import About from 'path/to/pages/About';
// import Products from 'path/to/pages/Products';
// import {
//   fetchEvents,
//   fetchMoviesPopular,
//   fetchEventById,
// } from 'services/fetchApi';

export const App = () => {
  //console.log(999);
  // fetchMoviesPopular().then(data => console.log(data.data.results));
  // fetchEventById().then(data => console.log(data.results));

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
          {/* <Route path="/movies" element={<SearchPage />} /> */}
        </Route>
        {/* </Route> */}
      </Routes>
      <ToastContainer
        autoClose={3000}
        position="top-center"
        hideProgressBar={false}
      />
    </div>
  );
};

// export const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/products" element={<Products />} />
//       </Routes>
//     </div>
//   );
// };
