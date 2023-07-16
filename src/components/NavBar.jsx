import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { UserMenu } from './UserMenu';
import { useAuth } from 'hooks';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderContainer>
      <NavSt>
        <NavLinkSt to="/">HOME</NavLinkSt>
        {isLoggedIn && <NavLinkSt to="/contacts">CONTACTS</NavLinkSt>}
      </NavSt>

      <Wrapper>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <>
            <NavLinkSt to="/register">Register</NavLinkSt>
            <NavLinkSt to="/login">Log In</NavLinkSt>
          </>
        )}
      </Wrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const NavSt = styled.nav`
  display: flex;
  column-gap: 20px;
`;

const NavLinkSt = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 8px;
  font-weight: 700;
  background-color: #ecd9dc;
  color: #626060;
  border-radius: 15px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.1);
    color: #a95050;
  }
  &.active {
    transform: scale(1.1);
    background-color: #f6b0b0;
  }
`;