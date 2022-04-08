import auth from '../lib/auth';
import { handleAPIError } from './ErrorActions';

function loginSuccess() {
  return { type: 'LOGIN_SUCCESS' };
};

function logoutSuccess() {
  return { type: 'LOGOUT_SUCCESS' };
};

export function loginAdmin(admin) {
  return function(dispatch) {
    auth.login(
      admin,
      () => dispatch(loginSuccess()),
      e => dispatch(handleAPIError(e))
    );
  };
};

export function logoutAdmin() {
  return function(dispatch) {
    auth.logout(
      () => dispatch(logoutSuccess()),
      e => dispatch(handleAPIError(e))
    );
  };
};