import apiClient from '../lib/apiClient';
import { handleAPIError } from './ErrorActions';

function fetchFunctionsSuccess(funcs) {
  return { type: 'FETCH_FUNCTIONS_SUCCESS', funcs };
};

function createFunctionSuccess(newFunc) {
  return { type: 'CREATE_FUNCTION_SUCCESS', newFunc };
};

function deleteFunctionSuccess(name) {
  return { type: 'DELETE_FUNCTION_SUCCESS', name };
};


export function fetchFunctions(bastionName) {
  return function(dispatch) {
    apiClient.getCloudCodeFunctions(
      bastionName,
      data => dispatch(fetchFunctionsSuccess(data)),
      e => dispatch(handleAPIError(e))
    );
  };
};

export function createFunction(bastionName, func) {
  return function(dispatch) {
    apiClient.createCloudCodeFunction(
      bastionName,
      func,
      data => dispatch(createFunctionSuccess(data)),
      e => dispatch(handleAPIError(e))
    );
  };
};

export function deleteFunction(bastionName, funcName) {
  return function(dispatch) {
    apiClient.deleteCloudCodeFunction(
      bastionName,
      funcName,
      () => dispatch(deleteFunctionSuccess(funcName)),
      e => dispatch(handleAPIError(e))
    );
  };
};