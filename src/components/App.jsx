import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { MoviesPage } from 'pages/MoviesPage/MoviesPage';
import { MoviesInfoPage } from 'pages/MoviesInfoPage/MoviesInfoPage';
// import Home from 'path/to/pages/Home';
// import About from 'path/to/pages/About';
// import Products from 'path/to/pages/Products';
// import {
//   fetchEvents,
//   fetchMoviesPopular,
//   fetchEventById,
// } from 'services/fetchApi';

export const App = () => {
  console.log(999);
  // fetchMoviesPopular().then(data => console.log(data.data.results));
  // fetchEventById().then(data => console.log(data.results));

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />}>
            <Route path=":movieId" element={<MoviesInfoPage />} />
          </Route>
        </Route>
      </Routes>
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
