---
to: reducers/<%= name %>.ts
---
import { Action } from 'types/redux';

const TOGGLE = '<%= name %>/TOGGLE';

const initialState = {
  status: false
};
export default function reducer(
  state = initialState,
  action: Action = { type: '' }
) {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        status: !state.status
      };
    default:
      return state;
  }
}

export function toggle() {
  return {
    type: TOGGLE
  };
}
