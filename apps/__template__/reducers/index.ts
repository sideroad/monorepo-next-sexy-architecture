import user from './user';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function initializeStore(initialState = {}) {
  return createStore(
    combineReducers({
      user
    }),
    initialState,
    composeWithDevTools(applyMiddleware())
  );
}
