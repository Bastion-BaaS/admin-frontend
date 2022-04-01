import auth from '../lib/auth';

function loginSuccess() {
  return { type: 'LOGIN_SUCCESS' };
};

function loginFailure() {
  return { type: 'LOGIN_FAILURE' };
};

function logoutSuccess() {
  return { type: 'LOGOUT_SUCCESS' };
};

function fetchSuccess() {
  return { type: 'FETCH_SUCCESS' };
};

function fetchFailure() {
  return { type: 'FETCH_FAILURE' };
};

export function loginAdmin(admin) {
  return function(dispatch) {
    auth.login(admin, () => dispatch(loginSuccess()), () => dispatch(loginFailure()));
  };
};

export function logoutAdmin() {
  return function(dispatch) {
    auth.logout(() => dispatch(logoutSuccess()));
  };
};

export function fetchAdmin() {
  return function(dispatch) {
    auth.check(() => dispatch(fetchSuccess()), () => dispatch(fetchFailure()));
  };
};
