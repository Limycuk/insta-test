import { combineReducers } from 'redux';

import data from './data';
import page from './page';
import count from './count';

const reducer = combineReducers({
  data,
  page,
  count
});

export default reducer;
