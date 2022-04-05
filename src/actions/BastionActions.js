import apiClient from '../lib/apiClient';
import { handleAPIError } from './ErrorActions';

function fetchBastionsSuccess(bastions) {
  return { type: 'FETCH_BASTIONS_SUCCESS', bastions };
};

function fetchBastionSuccess(bastion) {
  return { type: 'FETCH_BASTION_SUCCESS', bastion };
};

function createBastionSuccess(newBastion) {
  return { type: 'CREATE_BASTION_SUCCESS', newBastion };
};

function deleteBastionSuccess(bastionName) {
  return { type: 'DELETE_BASTION_SUCCESS', bastionName };
};

export function fetchBastions() {
  return function(dispatch) {
    apiClient.getBastions(
      data => dispatch(fetchBastionsSuccess(data)),
      e => dispatch(handleAPIError(e))
    );
  };
};

export function fetchBastion(bastionName) {
  return function(dispatch) {
    apiClient.getBastion(
      bastionName,
      data => dispatch(fetchBastionSuccess(data)),
      e => dispatch(handleAPIError(e))
    );
  };
};

export function createBastion(bastion) {
  return function(dispatch) {
    apiClient.createBastion(
      bastion, 
      data => dispatch(createBastionSuccess(data)),
      e => dispatch(handleAPIError(e))
    );
  };
};

export function deleteBastion(bastionName) {
  return function(dispatch) {
    apiClient.deleteBastion(
      bastionName,
      () => dispatch(deleteBastionSuccess(bastionName)),
      e => dispatch(handleAPIError(e))
    );
  };
};