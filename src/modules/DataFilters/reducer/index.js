import { combineReducers } from 'redux';

import dates from './dates';
import type from './type';

const reducer = combineReducers({
  dates,
  type,
});

export default reducer;
