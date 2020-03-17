import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import auth from './user/userReducer';
import groups from './groups/groupsReducer';
import events from './events/eventsReducer';
import api from './apiState/apiStateReducer';
import categories from './categories/categoriesReducer';

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const reducer = combineReducers({ auth, groups, events, api, categories });

const store = initialState => {
  return createStore(reducer, initialState, bindMiddleware([thunkMiddleware]));
};

export default store;
