export default function files(state = [], action) {
  switch (action.type) {
    case 'FETCH_FILES_SUCCESS': 
      return action.files;
    case 'DELETE_FILE_SUCCESS':
      return state.filter(state => state.id !== action.id)
    default:
      return state;
  };
};