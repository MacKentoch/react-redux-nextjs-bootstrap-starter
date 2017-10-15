// @flow

import { combineReducers }  from 'redux';
import fakeModuleWithFetch  from './fakeModuleWithFetch';

export const reducers = {
  fakeModuleWithFetch
};

export default combineReducers({
  ...reducers
});
