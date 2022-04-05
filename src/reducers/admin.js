export default function admin(state = true, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS': 
      return true;
    case 'AUTH_ERROR':
      return false;
    case 'LOGOUT_SUCCESS':
      return false;
    default:
      return state;
  };
};
