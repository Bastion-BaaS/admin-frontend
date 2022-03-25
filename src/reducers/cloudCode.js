export default function cloudCode(state = [], action) {
  switch (action.type) {
    case 'FETCH_FUNCTIONS_SUCCESS': 
      return action.funcs;
    case 'CREATE_FUNCTION_SUCCESS':
      return [...state, action.newFunc];
    case 'DELETE_FUNCTION_SUCCESS':
      return state.filter(state => state.id !== action.id)
    default:
      return state;
  };
};