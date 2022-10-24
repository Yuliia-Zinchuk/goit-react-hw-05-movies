import { StyledLink } from './Navigation.styled';
export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <StyledLink to="/" end>
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink to="movies">Movies</StyledLink>
        </li>
      </ul>
    </nav>
  );
};
