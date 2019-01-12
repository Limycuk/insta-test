import { handleActions } from 'redux-actions';

import * as actions from '../actions';

const defaultState = 0;

export default handleActions(
  {
    [actions.setData]: (state, action) => {
      return action.payload.count;
    }
  },
  defaultState
);