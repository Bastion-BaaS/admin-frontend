export default function admin(state = false, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS': 
      return true;
    case 'LOGIN_FAILURE':
      return false;
    case 'FETCH_SUCCESS':
      return true;
    case 'FETCH_FAILURE':
      return false;
    case 'LOGOUT_SUCCESS':
      return false;
    default:
      return state;
  };
};
