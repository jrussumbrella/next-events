import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import auth from './auth/authReducer';
import groups from './groups/groupsReducer';
import events from './events/eventsReducer';

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const reducer = combineReducers({ auth, groups, events });

const store = initialState => {
  return createStore(reducer, initialState, bindMiddleware([thunkMiddleware]));
};

export default store;
