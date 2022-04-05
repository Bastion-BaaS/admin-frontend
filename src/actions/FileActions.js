import apiClient from '../lib/apiClient';
import { handleAPIError } from './ErrorActions';

function fetchFilesSuccess(files) {
  return { type: 'FETCH_FILES_SUCCESS', files };
};

function deleteFileSuccess(id) {
  return { type: 'DELETE_FILE_SUCCESS', id };
};

export function fetchFiles(bastionName) {
  return function(dispatch) {
    apiClient.getFiles(bastionName,
      data => dispatch(fetchFilesSuccess(data)),
      e => dispatch(handleAPIError(e))
    );
  };
};

export function deleteFile(bastionName, fileId) {
  return function(dispatch) {
    apiClient.deleteFile(bastionName,
      fileId,
      () => dispatch(deleteFileSuccess(fileId)),
      e => dispatch(handleAPIError(e))
    );
  };
};