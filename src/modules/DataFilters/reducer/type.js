import { handleActions } from 'redux-actions';

import * as filterActions from '../actions';
import { SINGLE_TYPE } from '../constants';

const defaultState = SINGLE_TYPE;

export default handleActions(
  {
    [filterActions.changeFilters]: (state, action) => {
      const { type } = action.payload;

      return type;
    },
  },
  defaultState,
);
