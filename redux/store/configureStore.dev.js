// @flow weak

import {
  createStore,
  applyMiddleware
}                               from 'redux';
import { createLogger }         from 'redux-logger';
import thunkMiddleware          from 'redux-thunk';
import { composeWithDevTools }  from 'redux-devtools-extension';
import reducer                  from '../modules/reducers';
import fetchMiddleware          from '../middleware/fetchMiddleware';

// #region configure logger middleware
const loggerMiddleware = createLogger({
  level:      'info',
  collapsed:  true
});
// #endregion

// #region createStore : enhancer
const enhancer = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
    fetchMiddleware
  )
);
// #endregion

// #region store initialization
export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer);
  return store;
}
// #endregion
