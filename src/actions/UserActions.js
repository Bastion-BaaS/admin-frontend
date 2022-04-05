import apiClient from '../lib/apiClient';
import { handleAPIError } from './ErrorActions';

function fetchUsersSuccess(users) {
  return { type: 'FETCH_USERS_SUCCESS', users };
};

function createUserSuccess(newUser) {
  return { type: 'CREATE_USER_SUCCESS', newUser };
};

function deleteUserSuccess(id) {
  return { type: 'DELETE_USER_SUCCESS', id };
};

export function fetchUsers(bastionName) {
  return function(dispatch) {
    apiClient.getUsers(bastionName,
      data => dispatch(fetchUsersSuccess(data)),
      e => dispatch(handleAPIError(e))
    );
  };
};

export function createUser(bastionName, user) {
  return function(dispatch) {
    apiClient.createUser(bastionName,
      user,
      data => dispatch(createUserSuccess(data)),
      e => dispatch(handleAPIError(e))
    );
  };
};

export function deleteUser(bastionName, userId) {
  return function(dispatch) {
    apiClient.deleteUser(bastionName,
      userId,
      () => dispatch(deleteUserSuccess(userId)),
      e => dispatch(handleAPIError(e))
    );
  };
};