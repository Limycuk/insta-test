import { reducer as reduxFormReducer } from 'redux-form';
import { combineReducers } from 'redux';

import pages from './pages';
import app from './app';
import filters from './filters';

const reducer = combineReducers({
  app,
  filters,
  pages,
  form: reduxFormReducer,
});

export default reducer;
