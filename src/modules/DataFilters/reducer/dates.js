import { handleActions } from 'redux-actions';

import * as filterActions from '../actions';
import { EXISTED_DATES } from '../constants';

const defaultState = [EXISTED_DATES[EXISTED_DATES.length - 1].value];

export default handleActions(
  {
    [filterActions.changeFilters]: (state, action) => {
      const { dates } = action.payload;

      return dates;
    },
  },
  defaultState,
);
