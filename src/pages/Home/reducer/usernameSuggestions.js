import { handleActions } from 'redux-actions';

import * as actions from '../actions';

const defaultState = [];

export default handleActions(
  {
    [actions.saveUsernameSuggestions]: (state, action) => {
      return action.payload.preparedUsernameSuggestions;
    },
  },
  defaultState,
);
