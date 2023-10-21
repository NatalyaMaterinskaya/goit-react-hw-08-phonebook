import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 16px;
  list-style-type: none;
`;


export const ListItem = styled.li`
  font-weight: 500;
`;

export const LinkItem = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 16px 0;
  color: #000000;

  &.active {
    color: #ff6347;
  }
`;
