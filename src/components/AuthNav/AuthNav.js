import { LinkItem, List, ListItem } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <List>
      <ListItem>
        <LinkItem to="/register">Register</LinkItem>
      </ListItem>
      <ListItem>
        <LinkItem to="/login">Login</LinkItem>
      </ListItem>
    </List>
  );
};
