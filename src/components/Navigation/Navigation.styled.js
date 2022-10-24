import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
text-decoration: none;
font-size 18px;
color: blue;

&.active {
    color: red;
    text-decoration-line: underline ;

}
`;
