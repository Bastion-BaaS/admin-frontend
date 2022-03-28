export default function collections(state = [], action) {
  switch (action.type) {
    case 'FETCH_COLLECTIONS_SUCCESS': 
      return action.collections.map(collectionName => {
        return {name: collectionName};
      });
    case 'FETCH_COLLECTION_SUCCESS':
      return state.map(collection => collection.name === action.name ? {name: collection.name, data: action.collection} : collection)
    case 'CREATE_COLLECTION_SUCCESS':
      return [...state, {name: action.newCollection}];
    case 'DELETE_COLLECTION_SUCCESS':
      return state.filter(collection => collection.name !== action.name)
    default:
      return state;
  };
};
