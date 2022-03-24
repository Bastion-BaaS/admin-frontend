import apiClient from '../lib/apiClient';

function fetchCollectionsSuccess(collections) {
  return { type: 'FETCH_COLLECTIONS_SUCCESS', collections };
};

function createCollectionSuccess(newCollection) {
  return { type: 'CREATE_COLLECTION_SUCCESS', newCollection };
};

function deleteCollectionSuccess(id) {
  return { type: 'DELETE_COLLECTION_SUCCESS', id };
};


export function fetchCollections(bastionName) {
  return function(dispatch) {
    apiClient.getCollections(bastionName, data => dispatch(fetchCollectionsSuccess(data)));
  };
};

export function createCollection(collection) {
  return function(dispatch) {
    apiClient.createCollection(collection, data => dispatch(createCollectionSuccess(data)));
  };
};

export function deleteCollection(bastionName, collectionId) {
  return function(dispatch) {
    apiClient.deleteCollection(bastionName, collectionId, () => dispatch(deleteCollectionSuccess(collectionId)));
  };
};
