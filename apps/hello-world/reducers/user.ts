import { Action } from '../../../types/redux';

const RESET = 'user/RESET';
const GET_START = 'user/GET_START';
const GET_SUCCESS = 'user/GET_SUCCESS';
const GET_FAIL = 'user/GET_FAIL';

const initialState = {
  item: {}
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
    default:
      return state;
  }
}

export function set() {
  return {
    type: RESET
  };
}
