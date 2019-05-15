import { handleActions } from 'redux-actions';

import * as filterActions from '../../actions/filter';
import { EXISTED_DATES } from '../../constants';

const defaultState = [EXISTED_DATES[EXISTED_DATES.length - 1]];

export default handleActions(
  {
    [filterActions.changeDates]: (state, action) => {
      const { dates } = action.payload;

      return dates;
    },
  },
  defaultState,
);
