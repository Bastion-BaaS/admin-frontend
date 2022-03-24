import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import bastions from '../reducers/bastions';
import users from '../reducers/users';
import collections from '../reducers/collections';


const rootReducer = combineReducers({ users, bastions, collections });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
