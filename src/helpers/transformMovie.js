export const transformMovie = data => {
  return data.map(
    ({ id, poster_path, title, release_date, overview, genres }) => ({
      id,
      poster_path,
      title,
      release_date,
      overview,
      genres,
    })
  );
};
