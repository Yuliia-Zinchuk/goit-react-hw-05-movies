export const transformCast = data => {
  return data.map(({ cast_id, name, profile_path, character }) => ({
    id: cast_id,
    name,
    img: profile_path,
    character,
  }));
};
