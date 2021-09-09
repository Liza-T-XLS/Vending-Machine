// == Imports

import { createStore } from 'redux';

import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from '../reducers/vmReducer';

// == Store

const store = createStore(
  // reducer
  reducer,
  // enhancer
  devToolsEnhancer({}),
);

// == Export

export default store;