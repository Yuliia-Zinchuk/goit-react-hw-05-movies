//import { SearchPage } from 'pages/SearchPage/SearchPage';
import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import { Outlet } from 'react-router-dom';

export const MoviesPage = () => {
  return (
    <>
      {/* <></> */}
      {/* <div>Movies</div>; */}
      {/* <button onClick={() => {}}>Go back</button> */}
      {/* ---   create component  instead searchPage*/}
      <SearchMovies />
      {/* <div>search</div> */}
      <Outlet />
    </>
  );
};
