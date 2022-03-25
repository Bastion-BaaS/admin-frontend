import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import bastions from '../reducers/bastions';
import users from '../reducers/users';
import collections from '../reducers/collections';
import cloudCode from '../reducers/cloudCode';
import files from '../reducers/files';

const rootReducer = combineReducers({ users, bastions, collections, cloudCode, files });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
