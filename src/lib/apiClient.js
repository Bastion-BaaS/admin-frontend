import axios from 'axios';
const baseUrl = '/admin';

const getBastions = (callback) => {
  return axios
    .get(`${baseUrl}/instances`)
    .then(response => response.data)
    .then(callback)
    .catch(e => console.log(e))
}

const getBastion = (bastionName, callback) => {
  return axios
    .get(`${baseUrl}/instances/${bastionName}`)
    .then(response => response.data)
    .then(callback)
    .catch(e => console.log(e))
}

const createBastion = (bastion, callback) => {
  return axios
    .post(`${baseUrl}/instances`, bastion)
    .then(response => response.data)
    .then(callback)
    .catch(e => console.log(e))
};

const deleteBastion = (bastionName, callback) => {
  return axios
    .delete(`${baseUrl}/instances/${bastionName}`)
    .then(callback)
    .catch(e => console.log(e))
};

const getCollections = (bastionName, callback) => {
  return axios
    .get(`${baseUrl}/collections/${bastionName}`)
    .then(response => response.data)
    .then(callback)
    .catch(e => console.log(e))
};

const getCollection = (bastionName, collectionName, callback) => {
  return axios
    .get(`${baseUrl}/collections/${bastionName}/${collectionName}`)
    .then(response => response.data)
    .then(callback)
    .catch(e => console.log(e))
};

const createCollection = (bastionName, callback) => {
  return axios
    .post(`${baseUrl}/collections/${bastionName}`)
    .then(response => response.data)
    .then(callback)
    .catch(e => console.log(e))
};

const deleteCollection = (bastionName, collectionName, callback) => {
  return axios
    .delete(`${baseUrl}/collections/${bastionName}/${collectionName}`)
    .then(callback)
    .catch(e => console.log(e))
};

const getUsers = (bastionName, callback) => {
  return axios
    .get(`${baseUrl}/users/${bastionName}`)
    .then(response => response.data)
    .then(callback)
    .catch(e => console.log(e))
};

const createUser = (bastionName, user, callback) => {
  return axios
    .post(`${baseUrl}/users/${bastionName}`, user)
    .then(response => response.data)
    .then(callback)
    .catch(e => console.log(e))
};

const deleteUser = (bastionName, userId, callback) => {
  return axios
    .delete(`${baseUrl}/users/${bastionName}/${userId}`)
    .then(callback)
    .catch(e => console.log(e))
};

const getCloudCodeFunctions = (bastionName, callback) => {
  return axios
    .get(`${baseUrl}/ccf/${bastionName}`)
    .then(response => response.data)
    .then(callback)
    .catch(e => console.log(e))
};

const createCloudCodeFunction = (bastionName, funcName, funcData, callback) => {
  const header = { headers: { 'Content-Type': 'multipart/form-data' } };
  return axios
    .post(`${baseUrl}/ccf/${bastionName}`, funcName, funcData, header)
    .then(response => response.data)
    .then(callback)
    .catch(e => console.log(e))
};

const deleteCloudCodeFunction = (bastionName, funcId, callback) => {
  return axios
    .delete(`${baseUrl}/ccf/${bastionName}/${funcId}`)
    .then(callback)
    .catch(e => console.log(e))
};

const getFiles = (bastionName, callback) => {
  return axios
    .get(`${baseUrl}/files/${bastionName}`)
    .then(response => response.data)
    .then(callback)
    .catch(e => console.log(e))
};

const deleteFile = (bastionName, fileId, callback) => {
  return axios
    .delete(`${baseUrl}/files/${bastionName}/${fileId}`)
    .then(callback)
    .catch(e => console.log(e))
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
