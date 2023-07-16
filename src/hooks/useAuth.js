import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsError,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isError = useSelector(selectIsError)
  const user = useSelector(selectUser);
  return {
    isLoggedIn,
    isRefreshing,
    isError,
    user,
  };
};
