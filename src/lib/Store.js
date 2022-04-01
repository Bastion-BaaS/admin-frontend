import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import bastions from '../reducers/bastions';
import users from '../reducers/users';
import collections from '../reducers/collections';
import cloudCode from '../reducers/cloudCode';
import files from '../reducers/files';
import admin from '../reducers/admin';

const rootReducer = combineReducers({ users, bastions, collections, cloudCode, files, admin });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
