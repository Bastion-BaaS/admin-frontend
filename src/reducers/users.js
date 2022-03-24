export default function users(state = [], action) {
  switch (action.type) {
    case 'FETCH_USERS_SUCCESS': 
      return action.users;
    case 'CREATE_USER_SUCCESS':
      return [...state, action.newUser];
    case 'DELETE_USER_SUCCESS':
      return state.filter(user => user.id !== action.id);
    default:
      return state;
  };
};
