// @flow weak

import {
  createStore,
  compose,
  applyMiddleware
}                               from 'redux';
import thunkMiddleware          from 'redux-thunk';
import reducer                  from '../modules/reducers';
import fetchMiddleware          from '../middleware/fetchMiddleware';

// #region createStore : enhancer
const enhancer = compose(
  applyMiddleware(
    thunkMiddleware,
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
