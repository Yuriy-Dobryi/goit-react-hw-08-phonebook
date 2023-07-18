import { useDispatch } from 'react-redux';
import { HiOutlineLogout } from 'react-icons/hi';
import styled from 'styled-components';

import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <>
      <UserName>Welcome, {user.name}</UserName>
      <Btn type="button" onClick={() => dispatch(logOut())}>
        <HiOutlineLogout size={40} color={`#D08892`} />
      </Btn>
    </>
  );
};

const UserName = styled.p`
  color: #353535;
  font-size: 18px;
  font-weight: 700;
  font-style: italic;
`;

const Btn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.1);
  }
`;