import axios from 'axios';
const baseUrl = '/admin';

const login = (admin, success, err) => {
  return axios
    .post(`${baseUrl}/login`, admin)
    .then(success)
    .catch(err)
};

const logout = (success, err) => {
  return axios
    .post(`${baseUrl}/logout`)
    .then(success)
    .catch(err)
};

const auth = {
  login,
  logout
}

export default auth;