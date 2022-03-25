export default function collections(state = [], action) {
  switch (action.type) {
    case 'FETCH_COLLECTIONS_SUCCESS': 
      return action.collections;
    case 'CREATE_COLLECTION_SUCCESS':
      return [...state, action.newCollection];
    case 'DELETE_COLLECTION_SUCCESS':
      return state.filter(state => state.id !== action.id)
    default:
      return state;
  };
};