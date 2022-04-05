import axios from 'axios';
const baseUrl = '/admin';

const getBastions = (success, err) => {
  return axios
    .get(`${baseUrl}/instances`)
    .then(response => response.data)
    .then(success)
    .catch(err)
};

const getBastion = (bastionName, success, err) => {
  return axios
    .get(`${baseUrl}/instances/${bastionName}`)
    .then(response => response.data)
    .then(success)
    .catch(err)
};

const createBastion = (bastion, success, err) => {
  return axios
    .post(`${baseUrl}/instances`, bastion)
    .then(response => response.data)
    .then(success)
    .catch(err)
};

const deleteBastion = (bastionName, success, err) => {
  return axios
    .delete(`${baseUrl}/instances/${bastionName}`)
    .then(success)
    .catch(err)
};

const getCollections = (bastionName, success, err) => {
  return axios
    .get(`${baseUrl}/collections/${bastionName}`)
    .then(response => response.data)
    .then(success)
    .catch(err)
};

const getCollection = (bastionName, collectionName, success, err) => {
  return axios
    .get(`${baseUrl}/collections/${bastionName}/${collectionName}`)
    .then(response => response.data)
    .then(success)
    .catch(err)
};

const createCollection = (bastionName, collectionName, success, err) => {
  return axios
    .post(`${baseUrl}/collections/${bastionName}`, {name: collectionName})
    .then(response => response.data)
    .then(success)
    .catch(err)
};

const deleteCollection = (bastionName, collectionName, success, err) => {
  return axios
    .delete(`${baseUrl}/collections/${bastionName}/${collectionName}`)
    .then(success)
    .catch(err)
};

const getUsers = (bastionName, success, err) => {
  return axios
    .get(`${baseUrl}/users/${bastionName}`)
    .then(response => response.data)
    .then(success)
    .catch(err)
};

const createUser = (bastionName, user, success, err) => {
  return axios
    .post(`${baseUrl}/users/${bastionName}`, user)
    .then(response => response.data)
    .then(success)
    .catch(err)
};

const deleteUser = (bastionName, userId, success, err) => {
  return axios
    .delete(`${baseUrl}/users/${bastionName}/${userId}`)
    .then(success)
    .catch(err)
};

const getCloudCodeFunctions = (bastionName, success, err) => {
  return axios
    .get(`${baseUrl}/ccf/${bastionName}`)
    .then(response => response.data)
    .then(success)
    .catch(err)
};

const createCloudCodeFunction = (bastionName, func, success, err) => {
  const config = {
    method: 'post',
    data: func,
    url: `${baseUrl}/ccf/${bastionName}`,
  };

  return axios(config)
    .then(response => response.data)
    .then(success)
    .catch(err)
};

const deleteCloudCodeFunction = (bastionName, funcName, success, err) => {
  return axios
    .delete(`${baseUrl}/ccf/${bastionName}/${funcName}`)
    .then(success)
    .catch(err)
};

const getFiles = (bastionName, success, err) => {
  return axios
    .get(`${baseUrl}/files/${bastionName}`)
    .then(response => response.data)
    .then(success)
    .catch(err)
};

const deleteFile = (bastionName, fileId, success, err) => {
  return axios
    .delete(`${baseUrl}/files/${bastionName}/${fileId}`)
    .then(success)
    .catch(err)
};

const apiClient = {
  getBastions,
  getBastion,
  createBastion,
  deleteBastion,
  getCollections,
  getCollection,
  createCollection,
  deleteCollection,
  getUsers,
  createUser,
  deleteUser,
  getCloudCodeFunctions,
  createCloudCodeFunction,
  deleteCloudCodeFunction,
  getFiles,
  deleteFile
}

export default apiClient;
