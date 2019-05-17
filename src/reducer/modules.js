import { combineReducers } from 'redux';

import dataFilters from '~/modules/DataFilters/reducer';

const reducer = combineReducers({
  dataFilters,
});

export default reducer;
