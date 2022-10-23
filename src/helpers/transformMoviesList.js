export const transformMoviesList = data => {
  return data.map(({ id, title }) => ({
    id,
    title,
  }));
};
