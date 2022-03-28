import apiClient from '../lib/apiClient';

function fetchCollectionsSuccess(collections) {
  return { type: 'FETCH_COLLECTIONS_SUCCESS', collections };
};

function createCollectionSuccess(newCollection) {
  return { type: 'CREATE_COLLECTION_SUCCESS', newCollection };
};

function deleteCollectionSuccess(name) {
  return { type: 'DELETE_COLLECTION_SUCCESS', name };
};

function fetchCollectionSuccess(collectionName, collection) {
  return { type: 'FETCH_COLLECTION_SUCCESS', name: collectionName, collection };
};

export function fetchCollections(bastionName) {
  return function(dispatch) {
    apiClient.getCollections(bastionName, data => dispatch(fetchCollectionsSuccess(data)));
  };
};

export function fetchCollection(bastionName, collectionName) {
  return function(dispatch) {
    apiClient.getCollection(bastionName, collectionName, data => dispatch(fetchCollectionSuccess(collectionName, data)));
  };
};

export function createCollection(collection) {
  return function(dispatch) {
    apiClient.createCollection(collection, data => dispatch(createCollectionSuccess(data)));
  };
};

export function deleteCollection(bastionName, collectionName) {
  return function(dispatch) {
    apiClient.deleteCollection(bastionName, collectionName, () => dispatch(deleteCollectionSuccess(collectionName)));
  };
};
