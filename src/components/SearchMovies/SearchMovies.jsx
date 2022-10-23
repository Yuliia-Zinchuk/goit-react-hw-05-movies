export const SearchMovies = () => {
  return (
    <>
      {/* <div>Movies</div>; */}
      <form>
        <input
          //   className={css.SearchForm_input}
          type="text"
          name="query"
          //   value={imageQuery}
          //   onChange={handleImageChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />

        <button
          type="submit"
          //   className={css.SearchForm_button}
        >
          Search
        </button>
      </form>
      <div>искать тут searchBar создать и подключить</div>
      {/* <Outlet /> */}
    </>
  );
};
