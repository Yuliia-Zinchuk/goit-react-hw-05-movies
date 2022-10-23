export const transformReviews = data => {
  return data.map(({ id, author, content }) => ({
    id,
    author,
    content,
  }));
};
