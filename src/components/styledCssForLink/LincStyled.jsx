import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LinkStyled = styled(NavLink)`
  text-decoration: none;
  margin-left: 20px;
  color: black;

  &.active {
    color: #4169e1;
  }
`;

export default LinkStyled;
