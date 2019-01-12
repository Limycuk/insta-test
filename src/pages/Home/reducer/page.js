import { handleActions } from 'redux-actions';

import * as action from '../actions';

const defaultState = 0;

export default handleActions(
  {
    [action.changePage]: (state, action) => {
      return action.payload;
    }
  },
  defaultState
);
