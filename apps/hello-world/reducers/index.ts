import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import user from './user';

export default function initializeStore(initialState = {}) {
  return createStore(
    combineReducers({
      user
    }),
    initialState,
    composeWithDevTools(applyMiddleware())
  );
}
