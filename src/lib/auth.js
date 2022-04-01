import axios from 'axios';
const baseUrl = '/admin';

const login = (admin, successCallback, failureCallback) => {
  return axios
    .post(`${baseUrl}/login`, admin)
    .then(response => {
      console.log(response)
      return response.status
    })
    .then(successCallback)
    .catch(failureCallback)
};

const logout = (callback) => {
  return axios
    .post(`${baseUrl}/logout`)
    .then(callback)
    .catch(callback)
};

const check = (successCallback, failureCallback) => {
  return axios
    .post(`${baseUrl}/check`, { withCredentials: true })
    .then(successCallback)
    .catch(failureCallback)
};


const auth = {
  login,
  logout,
  check
}

export default auth;
