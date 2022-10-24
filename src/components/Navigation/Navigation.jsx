//import { css } from 'styled-components';
import { StyledLink } from './Navigation.styled';
import css from './Navigation.module.css';
export const Navigation = () => {
  return (
    <nav className={css.headerNav}>
      <ul className={css.navList}>
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
