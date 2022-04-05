import apiClient from '../lib/apiClient';
import { handleAPIError } from './ErrorActions';

function fetchCollectionsSuccess(collections) {
  return { type: 'FETCH_COLLECTIONS_SUCCESS', collections };
};

function createCollectionSuccess(newCollection) {
  return { type: 'CREATE_COLLECTION_SUCCESS', newCollection };
};

function deleteCollectionSuccess(name) {
  return { type: 'DELETE_COLLECTION_SUCCESS', name };
};

function fetchCollectionSuccess(collectionName, collectionData) {
  return { type: 'FETCH_COLLECTION_SUCCESS', name: collectionName, collectionData };
};

export function fetchCollections(bastionName) {
  return function(dispatch) {
    apiClient.getCollections(bastionName,
      data => dispatch(fetchCollectionsSuccess(data)),
      e => dispatch(handleAPIError(e))
    );
  };
};

export function fetchCollection(bastionName, collectionName) {
  return function(dispatch) {
    apiClient.getCollection(
      bastionName,
      collectionName,
      data => dispatch(fetchCollectionSuccess(collectionName, data)),
      e => dispatch(handleAPIError(e))
    );
  };
};

export function createCollection(bastionName, collectionName) {
  return function(dispatch) {
    apiClient.createCollection(
      bastionName,
      collectionName,
      data => dispatch(createCollectionSuccess(data)),
      e => dispatch(handleAPIError(e))
    );
  };
};

export function deleteCollection(bastionName, collectionName) {
  return function(dispatch) {
    apiClient.deleteCollection(
      bastionName,
      collectionName,
      () => dispatch(deleteCollectionSuccess(collectionName)),
      e => dispatch(handleAPIError(e))
    );
  };
};