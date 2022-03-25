import apiClient from '../lib/apiClient';

function fetchFunctionsSuccess(funcs) {
  return { type: 'FETCH_FUNCTIONS_SUCCESS', funcs };
};

function createFunctionSuccess(newFunc) {
  return { type: 'CREATE_FUNCTION_SUCCESS', newFunc };
};

function deleteFunctionSuccess(id) {
  return { type: 'DELETE_FUNCTION_SUCCESS', id };
};


export function fetchFunctions(bastionName) {
  return function(dispatch) {
    apiClient.getCloudCodeFunctions(bastionName, data => dispatch(fetchFunctionsSuccess(data)));
  };
};

export function createFunction(bastionName, funcName, funcData) {
  return function(dispatch) {
    apiClient.createCloudCodeFunction(bastionName, funcName, funcData, data => dispatch(createFunctionSuccess(data)));
  };
};

export function deleteFunction(bastionName, funcId) {
  return function(dispatch) {
    apiClient.deleteCloudCodeFunction(bastionName, funcId, () => dispatch(deleteFunctionSuccess(funcId)));
  };
};