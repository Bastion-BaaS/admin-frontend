export default function cloudCode(state = [], action) {
  switch (action.type) {
    case 'FETCH_FUNCTIONS_SUCCESS': 
      return action.funcs;
    case 'CREATE_FUNCTION_SUCCESS':
      return [...state, action.newFunc];
    case 'DELETE_FUNCTION_SUCCESS':
      return state.filter(func => func.functionName !== action.name)
    default:
      return state;
  };
};