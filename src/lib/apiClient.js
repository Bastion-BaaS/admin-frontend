import axios from 'axios';

const getBastions = (callback) => {
  // return axios
  //   .get('/instances')
  //   .then(response => response.data)
  //   .then(callback)
  //   .catch(e => console.log(e))
  callback([{id: 1, name: 'bast1'},{id: 2, name: 'bast2'},{id: 3, name: 'bast3'},{id: 4, name: 'bast4'}])
}

const getBastion = (bastionName, callback) => {
  // return axios
  //   .get(`/instances/${bastionName}`)
  //   .then(response => response.data)
  //   .then(callback)
  //   .catch(e => console.log(e))
  callback({name: 'bast1', APIKey: 'testkey'})
}

const createBastion = (bastion, callback) => {
  // return axios
  //   .post('/instances', bastion)
  //   .then(response => response.data)
  //   .then(callback)
  //   .catch(e => console.log(e))
  callback({id: 7, name: 'bast7'});
};

const deleteBastion = (bastionName, callback) => {
  // return axios
  //   .delete(`/instances/${bastionName}`)
  //   .then(callback)
  //   .catch(e => console.log(e))
  callback();
};

const getCollections = (bastionName, callback) => {
  // return axios
  //   .get(`/collections/${bastionName}`)
  //   .then(response => response.data)
  //   .then(callback)
  //   .catch(e => console.log(e))
  callback([{id: 1, name: '1aadasddsdasdsa', data: {title: [{test: 'model1'}, 2, 3], name: 'test'}}, {id: 2, name: '2bb', data: {title: 'model2', blah: 'test2'}}])
};

const createCollection = (bastionName, callback) => {
  // return axios
  //   .post(`/collections/${bastionName}`)
  //   .then(response => response.data)
  //   .then(callback)
  //   .catch(e => console.log(e))
  callback({name: 'createdCollection'});
};

const deleteCollection = (bastionName, collectionId, callback) => {
  // return axios
  //   .delete(`/collections/${bastionName}/${collectionId}`)
  //   .then(callback)
  //   .catch(e => console.log(e))
  callback();
};

const getUsers = (bastionName, callback) => {
  // return axios
  //   .get(`/users/${bastionName}`)
  //   .then(response => response.data)
  //   .then(callback)
  //   .catch(e => console.log(e))
  callback([{id: 1, email: '22@afterAll.com', username: 'username1234'},{id: 2, email: '22@aftesdasdsadasdsdrAll.com', username: 'user2'}]);
};

const createUser = (bastionName, user, callback) => {
  // return axios
  //   .post(`/users/${bastionName}`, user)
  //   .then(response => response.data)
  //   .then(callback)
  //   .catch(e => console.log(e))
  callback({id: 7, username: 'bast7', email: 'created'})
};

const deleteUser = (bastionName, userId, callback) => {
  // return axios
  //   .delete(`/users/${bastionName}/${userId}`)
  //   .then(callback)
  //   .catch(e => console.log(e))
  callback()
};

const apiClient = {
  getBastions,
  getBastion,
  createBastion,
  deleteBastion,
  getCollections,
  createCollection,
  deleteCollection,
  getUsers,
  createUser,
  deleteUser,
}
export default apiClient;