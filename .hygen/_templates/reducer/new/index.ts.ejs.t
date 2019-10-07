---
to: reducers/<%= name %>.ts
---
import { Action } from 'types/redux';

const RESET = '<%= name %>/RESET';
const GET_START = '<%= name %>/GET_START';
const GET_SUCCESS = '<%= name %>/GET_SUCCESS';
const GET_FAIL = '<%= name %>/GET_FAIL';
const GETS_START = '<%= name %>/GETS_START';
const GETS_SUCCESS = '<%= name %>/GETS_SUCCESS';
const GETS_FAIL = '<%= name %>/GETS_FAIL';

const initialState = {
  item: {},
  items: []
};
export default function reducer(
  state = initialState,
  action: Action = { type: '' }
) {
  switch (action.type) {
    case RESET:
      return {
        ...state,
        item: {}
      };
    case GET_START:
      return {
        ...state,
        loading: true
      };
    case GET_SUCCESS:
      return {
        ...state,
        item: action.body,
        loading: false,
        loaded: true
      };
    case GET_FAIL:
      return {
        ...state,
        err: action.err,
        loading: false,
        loaded: true
      };
    case GETS_START:
      return {
        ...state,
        loading: true
      };
    case GETS_SUCCESS:
      return {
        ...state,
        items: action.body.items,
        loading: false,
        loaded: true
      };
    case GETS_FAIL:
      return {
        ...state,
        err: action.err,
        loading: false,
        loaded: true
      };
    default:
      return state;
  }
}

export function reset() {
  return {
    type: RESET
  };
}
