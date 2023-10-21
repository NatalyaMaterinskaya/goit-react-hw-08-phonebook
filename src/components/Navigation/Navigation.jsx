import React from 'react';

import { List, ListItem, Nav, LinkItem, Header } from './Navigation.styled';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
      <Nav>
        <List>
          <ListItem>
            <LinkItem to="/">Home</LinkItem>
          </ListItem>
          {isLoggedIn && (
            <ListItem>
              <LinkItem to="/contacts">Contacts</LinkItem>
            </ListItem>
          )}
        </List>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
 
      </Nav>
    </Header>
  );
};
